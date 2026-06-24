const v_list = document.querySelector(".category_nav_list")

function Open_Categ_list() {
    v_list.classList.toggle("active")
}





var cart = document.querySelector('.cart');

function open_close_cart() {
    cart.classList.toggle("active");
}















// 1. تحديث شكل زراير "إضافة للسلة" في الصفحة الرئيسية
function updateButtonsState(productId, isActive) {
    const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`);
    allMatchingButtons.forEach(btn => {
        if (isActive) {
            btn.classList.add("active");
            btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item in cart`;
        } else {
            btn.classList.remove("active");
            btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> add to cart`;
        }
    });
}

// 2. دالة التحديث الفوري (الجوكر) - بتحدث السلة والـ Checkout في نفس الثانية
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // تحديث العدادات فوراً
    document.querySelectorAll(".Count_item_cart, .count_item_header").forEach(el => el.innerText = cart.length);

    const cartItemsContainer = document.getElementById("cart_items");
    const checkoutItemsContainer = document.getElementById("checkout_items");
    
    let finalTotal = 0;
    let itemsHTML = "";

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        finalTotal += itemTotal;

        itemsHTML += `
            <div class="item_cart" style="display: flex; align-items: center; justify-content: space-between; gap: 15px; padding: 10px 0; border-bottom: 1px solid #eee;">
                <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
                    <img src="${item.img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px; flex-shrink: 0;">
                    <div style="flex: 1; min-width: 0;">
                        <h4 style="margin: 0; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</h4>
                        <p style="margin: 2px 0; font-weight: bold; color: var(--main_color); font-size: 14px;">${item.price} LE</p>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <button onclick="changeQuantity(${index}, -1)" style="width:22px; height:22px; cursor:pointer; border:1px solid #ccc; background:#fff;">-</button>
                            <span style="font-weight:bold;">${item.quantity}</span>
                            <button onclick="changeQuantity(${index}, 1)" style="width:22px; height:22px; cursor:pointer; border:1px solid #ccc; background:#fff;">+</button>
                        </div>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#ff4d4d; cursor:pointer; flex-shrink:0;">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>`;
    });

    // السر هنا: بنحدث أي حاوية موجودة في الصفحة حالياً
    const emptyMsg = '<p style="text-align:center; padding:20px; color:#999;">السلة فارغة</p>';
    if (cartItemsContainer) cartItemsContainer.innerHTML = itemsHTML || emptyMsg;
    if (checkoutItemsContainer) checkoutItemsContainer.innerHTML = itemsHTML || emptyMsg;

    // تحديث الأسعار الإجمالية فوراً
    document.querySelectorAll("#subtotal_price, .subtotal_checkout").forEach(el => el.innerText = finalTotal + " LE");
    document.querySelectorAll(".total_checkout").forEach(el => el.innerText = (finalTotal > 0 ? finalTotal + 20 : 0) + " LE");
}

// 3. إضافة منتج جديد (بيسمع في لحظتها)
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn_add_cart');
    if (btn) {
        e.preventDefault();
        const productCard = btn.closest('.product');
        const productId = btn.getAttribute('data-id');

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === productId);

        if (!existingProduct) {
            const productName = productCard.querySelector('.name_product a').innerText.trim();
            const productPrice = parseInt(productCard.querySelector('.price span').innerText.replace(/[^0-9]/g, ''));
            const productImg = productCard.querySelector('.img_product img').getAttribute('src');

            cart.push({ id: productId, name: productName, price: productPrice, img: productImg, quantity: 1 });
            updateButtonsState(productId, true);
        } else {
            existingProduct.quantity += 1;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart(); // التحديث اللحظي هنا
    }
});

// 4. تغيير الكمية (زائد وناقص)
window.changeQuantity = function(index, delta) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart[index]) return;

    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
};

// 5. الحذف النهائي (بيشيل من المكانين فوراً)
window.removeFromCart = function(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart[index]) return;

    const productId = cart[index].id;
    cart.splice(index, 1);
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateButtonsState(productId, false);
    updateCart(); // التحديث اللحظي هنا
};

// 6. عند تحميل الصفحة لأول مرة
document.addEventListener("DOMContentLoaded", () => {
    updateCart();
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item => updateButtonsState(item.id, true));
});



















// 7. دالة إتمام الطلب النهائية - إخفاء شامل لكل شيء
document.addEventListener('submit', (e) => {
    if (e.target.id === 'form_contact') {
        e.preventDefault(); 

        // Save order to localStorage before clearing
        let cartToSave = JSON.parse(localStorage.getItem('cart')) || [];
        if (cartToSave.length > 0) {
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            let totalAmount = cartToSave.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            let customerInfo = {
                name: document.querySelector('input[name="Name"]')?.value || 'Unknown',
                email: document.querySelector('input[name="Email"]')?.value || 'Unknown',
                address: document.querySelector('input[name="Address"]')?.value || 'Unknown',
                phone: document.querySelector('input[name="Phone"]')?.value || 'Unknown'
            };

            let newOrder = {
                id: 'ORD-' + Math.floor(Math.random() * 10000),
                date: new Date().toLocaleString(),
                customer: customerInfo,
                items: cartToSave,
                total: totalAmount > 0 ? totalAmount + 20 : 0, // +20 shipping
                status: 'New'
            };
            orders.unshift(newOrder); // Add to beginning
            localStorage.setItem('orders', JSON.stringify(orders));
        }

        // 1. مسح بيانات السلة من الذاكرة نهائياً
        localStorage.removeItem('cart');

        // 2. تحديث الواجهة لتصفير الأرقام (العدادات هتصفر فوراً)
        if (typeof updateCart === "function") {
            updateCart(); 
        }

        // 3. إخفاء السلة لو مفتوحة
        const elementsToHide = '.checkout, .cart, .cart_side, .sidebar'; 
        document.querySelectorAll(elementsToHide).forEach(el => {
            el.classList.remove('active'); // assuming active class was used for showing sidebar cart
        });

        // 4. إظهار رسالة النجاح والرجوع للصفحة الرئيسية
        showCustomAlert("تم تسجيل طلبك بنجاح!", "success");
        document.getElementById('form_contact').reset();
        
        if (typeof navigateTo === 'function') {
            navigateTo('home');
        }
    }
});
































































/* =========================================
   DYNAMIC PRODUCTS RENDERING 
   ========================================= */

function initStoreProducts() {
    let storedProducts = localStorage.getItem('products');
    let products = storedProducts ? JSON.parse(storedProducts) : null;
    
    // Force reset if user has stale or empty data (less than 40 products)
    if (!products || products.length < 40) {
        products = defaultProducts;
        localStorage.setItem('products', JSON.stringify(defaultProducts));
    }

    // Auto-update old image paths in localStorage
    let updated = false;
    products.forEach(p => {
        if (p.img && !p.img.startsWith('assets/images/') && !p.img.startsWith('http')) {
            p.img = 'assets/images/' + p.img;
            updated = true;
        }
    });
    if (updated) {
        localStorage.setItem('products', JSON.stringify(products));
    }

    renderProducts(products);
}

function renderProducts(products) {
    const containers = {
        'Hot Sale': document.getElementById('swiper_items_sale'),
        'Pants': document.getElementById('swiper_pants'),
        'Hoodies': document.getElementById('swiper_Hoodies'),
        'Caps': document.getElementById('swiper_kids'),
        'Accessories': document.getElementById('swiper_Abayas')
    };

    for (let key in containers) {
        if (containers[key]) containers[key].innerHTML = '';
    }

    let favs = JSON.parse(localStorage.getItem('favorites')) || [];

    products.forEach(p => {
        let container = containers[p.category];
        if (!container) return;

        let oldPriceHtml = p.oldPrice ? `<p class="old_price">${p.oldPrice} LE</p>` : '';
        let saleTagHtml = p.oldPrice ? `<span class="sale_present">Sale</span>` : '';

                let isFav = favs.includes(p.id);
                let heartClass = isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
                let activeClass = isFav ? 'active-fav' : '';

                let productHtml = `
            <div class="swiper-slide product">
                ${saleTagHtml}
                <div class="img_product">
                    <a href="#"><img src="${p.img}" alt="${p.name}" /></a>
                </div>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="name_product"><a href="#">${p.name}</a></p>
                <div class="price">
                    <p><span>${p.price} LE</span></p>
                    ${oldPriceHtml}
                </div>
                <div class="icons">
                    <span class="btn_add_cart" data-id="${p.id}">
                        <i class="fa-solid fa-cart-shopping"></i> add to cart
                    </span>
                    <span class="icon_product ${activeClass}" onclick="toggleFavorite(this, '${p.id}')"><i class="${heartClass}"></i></span>
                </div>
            </div>
        `;
        container.innerHTML += productHtml;
    });

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item => {
        updateButtonsState(item.id, true);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initStoreProducts();
    // Re-initialize Swiper after products are rendered
    if (typeof Swiper !== 'undefined') {
        document.querySelectorAll('.slide_product').forEach(el => {
            new Swiper(el, {
                slidesPerView: 2,
                spaceBetween: 10,
                grabCursor: true,
                autoplay: { delay: 2500, disableOnInteraction: false },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                loop: true,
                breakpoints: {
                    500: { slidesPerView: 3, spaceBetween: 15 },
                    768: { slidesPerView: 4, spaceBetween: 15 },
                    991: { slidesPerView: 5, spaceBetween: 20 },
                    1200: { slidesPerView: 7, spaceBetween: 20 }
                }
            });
        });
    }
});

// Update favorites counter in navbar
function updateFavCount() {
    let favs = JSON.parse(localStorage.getItem('favorites')) || [];
    document.querySelectorAll('.count_favourite').forEach(el => el.innerText = favs.length);
}

// Toggle favorite product functionality
window.toggleFavorite = function(element, productId) {
    let favs = JSON.parse(localStorage.getItem('favorites')) || [];
    let icon = element.querySelector('i');
    
    if (favs.includes(productId)) {
        // Remove
        favs = favs.filter(id => id !== productId);
        icon.className = 'fa-regular fa-heart';
        element.classList.remove('active-fav');
    } else {
        // Add
        favs.push(productId);
        icon.className = 'fa-solid fa-heart';
        element.classList.add('active-fav');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favs));
    updateFavCount();
};

// Init favorites counter on page load
document.addEventListener('DOMContentLoaded', () => {
    updateFavCount();
});
