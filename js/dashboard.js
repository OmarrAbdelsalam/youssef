document.addEventListener("DOMContentLoaded", () => {
    // Initial load happens via navigateTo() in SPA now.
    loadDummyProducts();
});

function switchTab(tabId, event) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Deactivate all sidebar items
    document.querySelectorAll('.sidebar-menu li').forEach(li => {
        li.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabId).classList.add('active');
    
    // Activate clicked sidebar item
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

function loadDashboardData() {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Update Metrics
    document.getElementById('total-orders-count').innerText = orders.length;
    
    let totalRevenue = orders.reduce((sum, order) => sum + parseInt(order.total), 0);
    document.getElementById('total-revenue-count').innerText = totalRevenue + " LE";
    
    // Render Recent Orders (up to 5)
    let recentOrdersHtml = "";
    orders.slice(0, 5).forEach(order => {
        let totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);
        let customerName = order.customer && order.customer.name ? order.customer.name : 'N/A';
        recentOrdersHtml += `
            <tr>
                <td><strong>${order.id}</strong></td>
                <td>${customerName}</td>
                <td>${order.date}</td>
                <td>${totalItems} items</td>
                <td><strong>${order.total} LE</strong></td>
                <td><span class="status-badge status-new">${order.status}</span></td>
            </tr>
        `;
    });
    
    document.getElementById('recent-orders-body').innerHTML = recentOrdersHtml || '<tr><td colspan="6" style="text-align:center;">No orders yet</td></tr>';
    
    // Render All Orders
    let allOrdersHtml = "";
    orders.forEach(order => {
        let totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);
        let customerName = order.customer && order.customer.name ? order.customer.name : 'N/A';
        allOrdersHtml += `
            <tr>
                <td><strong>${order.id}</strong></td>
                <td>${customerName}</td>
                <td>${order.date}</td>
                <td>${totalItems} items</td>
                <td><strong>${order.total} LE</strong></td>
                <td><span class="status-badge status-new">${order.status}</span></td>
                <td>
                    <button class="btn-action" onclick="viewOrderDetails('${order.id}')">View Details</button>
                </td>
            </tr>
        `;
    });
    
    document.getElementById('all-orders-body').innerHTML = allOrdersHtml || '<tr><td colspan="7" style="text-align:center;">No orders yet</td></tr>';
}

function viewOrderDetails(orderId) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    let order = orders.find(o => o.id === orderId);
    
    if (order) {
        document.getElementById('modal-order-id').innerText = "#" + order.id;
        
        let itemsHtml = "";

        if (order.customer) {
            itemsHtml += `
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                    <h3 style="margin-top: 0;">Customer Details</h3>
                    <p><strong>Name:</strong> ${order.customer.name || 'N/A'}</p>
                    <p><strong>Email:</strong> ${order.customer.email || 'N/A'}</p>
                    <p><strong>Phone:</strong> ${order.customer.phone || 'N/A'}</p>
                    <p><strong>Address:</strong> ${order.customer.address || 'N/A'}</p>
                </div>
                <h3 style="margin-bottom: 15px;">Order Items</h3>
            `;
        }
        
        order.items.forEach(item => {
            itemsHtml += `
                <div class="modal-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="modal-item-details">
                        <h4>${item.name}</h4>
                        <p>Quantity: ${item.quantity} | Price: ${item.price} LE</p>
                        <p><strong>Subtotal: ${item.quantity * item.price} LE</strong></p>
                    </div>
                </div>
            `;
        });
        
        // Add Shipping fee info
        itemsHtml += `
            <div style="text-align: right; margin-top: 20px; font-size: 1.1rem;">
                <p>Shipping: 20 LE</p>
                <h3>Total Paid: ${order.total} LE</h3>
            </div>
        `;
        
        document.getElementById('modal-order-items').innerHTML = itemsHtml;
        document.getElementById('order-modal').classList.add('active');
    }
}

function closeOrderModal() {
    document.getElementById('order-modal').classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById('order-modal');
    if (event.target == modal) {
        closeOrderModal();
    }
}

function loadDummyProducts() {
    let storedProducts = localStorage.getItem('products');
    let products = [];
    if (storedProducts) {
        products = JSON.parse(storedProducts);
        if (products.length === 0 && typeof defaultProducts !== 'undefined') {
            products = defaultProducts.slice();
            localStorage.setItem('products', JSON.stringify(products));
        }
    } else {
        if (typeof defaultProducts !== 'undefined') {
            products = defaultProducts.slice();
            localStorage.setItem('products', JSON.stringify(products));
        } else {
            products = [];
        }
    }
    
    document.getElementById('total-products-count').innerText = products.length;
    
    let productsHtml = "";
    products.forEach((p, index) => {
        let badgeClass = p.stock === 'In Stock' ? 'status-completed' : (p.stock === 'Out of Stock' ? 'status-new' : 'status-new');
        // Let's use red for out of stock if we had a class, else fallback
        if (p.stock === 'Out of Stock') badgeClass = 'status-badge'; 
        
        productsHtml += `
            <tr>
                <td><img src="${p.img}" class="product-img-cell" alt="${p.name}"></td>
                <td>${p.name}</td>
                <td><strong>${p.price} LE</strong></td>
                <td><span class="status-badge ${badgeClass}" ${p.stock === 'Out of Stock' ? 'style="background: #fadbd8; color: #c0392b;"' : ''}>${p.stock || 'In Stock'}</span></td>
                <td><button class="btn-action" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px;" onclick="deleteProduct(${index})">Delete</button></td>
            </tr>
        `;
    });
    
    document.getElementById('products-body').innerHTML = productsHtml;
}

function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    loadDummyProducts();
}
