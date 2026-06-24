const defaultProducts = [
    {
        "id": "hot1",
        "name": "Elegance is the only beauty that never fades....",
        "price": 400,
        "oldPrice": 550,
        "img": "assets/images/18.jpg",
        "category": "Hot Sale",
        "stock": "In Stock"
    },
    {
        "id": "hot2",
        "name": "The hoodie you\u2019ll never want to take off....",
        "price": 170,
        "oldPrice": 220,
        "img": "assets/images/21.jpg",
        "category": "Hot Sale",
        "stock": "In Stock"
    },
    {
        "id": "hot3",
        "name": "The perfect fit for your everyday adventures....",
        "price": 100,
        "oldPrice": 150,
        "img": "assets/images/13.jpg",
        "category": "Hot Sale",
        "stock": "In Stock"
    },
    {
        "id": "hot4",
        "name": "Effortless style for the urban explorer....",
        "price": 300,
        "oldPrice": 375,
        "img": "assets/images/22.jpg",
        "category": "Hot Sale",
        "stock": "In Stock"
    },
    {
        "id": "hot5",
        "name": "A blend of tradition and high fashion....",
        "price": 200,
        "oldPrice": 250,
        "img": "assets/images/32.jpg",
        "category": "Hot Sale",
        "stock": "In Stock"
    },
    {
        "id": "hot6",
        "name": "Peak performance meets ultimate comfort....",
        "price": 250,
        "oldPrice": 350,
        "img": "assets/images/31.jpg",
        "category": "Hot Sale",
        "stock": "In Stock"
    },
    {
        "id": "hot7",
        "name": "Rugged outside, refined inside....",
        "price": 500,
        "oldPrice": 650,
        "img": "assets/images/30.jpg",
        "category": "Hot Sale",
        "stock": "In Stock"
    },
    {
        "id": "hot8",
        "name": "Luxury you can feel, style you can see....",
        "price": 550,
        "oldPrice": 650,
        "img": "assets/images/36.jpg",
        "category": "Hot Sale",
        "stock": "In Stock"
    },
    {
        "id": "hot9",
        "name": "Iconic style for the modern generation....",
        "price": 450,
        "oldPrice": 500,
        "img": "assets/images/35.jfif",
        "category": "Hot Sale",
        "stock": "In Stock"
    },
    {
        "id": "h1",
        "name": "The perfect pair of jeans is a life changer....",
        "price": 400,
        "oldPrice": 500,
        "img": "assets/images/40.jpg",
        "category": "Hoodies",
        "stock": "In Stock"
    },
    {
        "id": "h2",
        "name": "Denim that fits like a second skin.....",
        "price": 220,
        "oldPrice": 300,
        "img": "assets/images/41.jpg",
        "category": "Hoodies",
        "stock": "In Stock"
    },
    {
        "id": "h3",
        "name": "Your search for the ultimate fit ends here.....",
        "price": 450,
        "oldPrice": 500,
        "img": "assets/images/42.jpg",
        "category": "Hoodies",
        "stock": "In Stock"
    },
    {
        "id": "h4",
        "name": "From morning coffee to late-night vibes in our premium denim.....",
        "price": 700,
        "oldPrice": 900,
        "img": "assets/images/43.jpg",
        "category": "Hoodies",
        "stock": "In Stock"
    },
    {
        "id": "h5",
        "name": "Good jeans, good mood, good day.....",
        "price": 800,
        "oldPrice": 950,
        "img": "assets/images/45.jpg",
        "category": "Hoodies",
        "stock": "In Stock"
    },
    {
        "id": "h6",
        "name": "Softness you have to feel to believe.....",
        "price": 1000,
        "oldPrice": 1200,
        "img": "assets/images/46.jpg",
        "category": "Hoodies",
        "stock": "In Stock"
    },
    {
        "id": "h7",
        "name": "Relaxation has never looked this good.....",
        "price": 500,
        "oldPrice": 650,
        "img": "assets/images/47.jpg",
        "category": "Hoodies",
        "stock": "In Stock"
    },
    {
        "id": "h8",
        "name": "Sleep in them, gym in them, live in them.....",
        "price": 550,
        "oldPrice": 650,
        "img": "assets/images/50.jpg",
        "category": "Hoodies",
        "stock": "In Stock"
    },
    {
        "id": "h9",
        "name": "Upgrade your lounge game.....",
        "price": 450,
        "oldPrice": 500,
        "img": "assets/images/47.jpg",
        "category": "Hoodies",
        "stock": "In Stock"
    },
    {
        "id": "p1",
        "name": "Streetwear soul, hoodie goal.....",
        "price": 450,
        "oldPrice": 500,
        "img": "assets/images/51.jpg",
        "category": "Pants",
        "stock": "In Stock"
    },
    {
        "id": "p2",
        "name": "The ultimate urban uniform......",
        "price": 250,
        "oldPrice": 300,
        "img": "assets/images/52.jpg",
        "category": "Pants",
        "stock": "In Stock"
    },
    {
        "id": "p3",
        "name": "Level up your street game with this hoodie......",
        "price": 600,
        "oldPrice": 500,
        "img": "assets/images/53.jpg",
        "category": "Pants",
        "stock": "In Stock"
    },
    {
        "id": "p4",
        "name": "Hood on, world off......",
        "price": 700,
        "oldPrice": 900,
        "img": "assets/images/54.jpg",
        "category": "Pants",
        "stock": "In Stock"
    },
    {
        "id": "p5",
        "name": "Edgy vibes for the modern explorer......",
        "price": 800,
        "oldPrice": 950,
        "img": "assets/images/60.jpg",
        "category": "Pants",
        "stock": "In Stock"
    },
    {
        "id": "p6",
        "name": "Beyond basic, purely iconic......",
        "price": 1000,
        "oldPrice": 1800,
        "img": "assets/images/56.jpg",
        "category": "Pants",
        "stock": "In Stock"
    },
    {
        "id": "p7",
        "name": "Your new favorite layer for the concrete jungle......",
        "price": 500,
        "oldPrice": 1500,
        "img": "assets/images/57.jpg",
        "category": "Pants",
        "stock": "In Stock"
    },
    {
        "id": "p8",
        "name": "Catching vibes, not feelings......",
        "price": 550,
        "oldPrice": 650,
        "img": "assets/images/58.jpg",
        "category": "Pants",
        "stock": "In Stock"
    },
    {
        "id": "p9",
        "name": "The perfect blend of \"Cool\" and \"Cozy.\".....",
        "price": 450,
        "oldPrice": 800,
        "img": "assets/images/59.jpg",
        "category": "Pants",
        "stock": "In Stock"
    },
    {
        "id": "c1",
        "name": "Adventure-ready outfits for active play......",
        "price": 450,
        "oldPrice": 500,
        "img": "assets/images/70.jpg",
        "category": "Caps",
        "stock": "In Stock"
    },
    {
        "id": "c2",
        "name": "Vibrant colors for vibrant personalities.......",
        "price": 250,
        "oldPrice": 300,
        "img": "assets/images/71.jpg",
        "category": "Caps",
        "stock": "In Stock"
    },
    {
        "id": "c3",
        "name": "Style that keeps up with their energy.......",
        "price": 600,
        "oldPrice": 500,
        "img": "assets/images/79.jpg",
        "category": "Caps",
        "stock": "In Stock"
    },
    {
        "id": "c4",
        "name": "Smart styles for smart kids.......",
        "price": 700,
        "oldPrice": 900,
        "img": "assets/images/73.jpg",
        "category": "Caps",
        "stock": "In Stock"
    },
    {
        "id": "c5",
        "name": "Every girl deserves to feel like a princess.......",
        "price": 800,
        "oldPrice": 950,
        "img": "assets/images/74.jpg",
        "category": "Caps",
        "stock": "In Stock"
    },
    {
        "id": "c6",
        "name": "Twirl-worthy dresses for your little star.......",
        "price": 1000,
        "oldPrice": 1800,
        "img": "assets/images/75.jpg",
        "category": "Caps",
        "stock": "In Stock"
    },
    {
        "id": "c7",
        "name": "Elegance starts young.......",
        "price": 500,
        "oldPrice": 1500,
        "img": "assets/images/76.jpg",
        "category": "Caps",
        "stock": "In Stock"
    },
    {
        "id": "c8",
        "name": "Magical outfits for magical moments.......",
        "price": 550,
        "oldPrice": 650,
        "img": "assets/images/77.jpg",
        "category": "Caps",
        "stock": "In Stock"
    },
    {
        "id": "c9",
        "name": "Designed for the leaders of tomorrow......",
        "price": 450,
        "oldPrice": 800,
        "img": "assets/images/78.jpg",
        "category": "Caps",
        "stock": "In Stock"
    },
    {
        "id": "a1",
        "name": "The perfect pair of jeans is a life changer....",
        "price": 400,
        "oldPrice": 500,
        "img": "assets/images/91.jpg",
        "category": "Accessories",
        "stock": "In Stock"
    },
    {
        "id": "a2",
        "name": "Denim that fits like a second skin.....",
        "price": 220,
        "oldPrice": 300,
        "img": "assets/images/81.jpg",
        "category": "Accessories",
        "stock": "In Stock"
    },
    {
        "id": "a3",
        "name": "Your search for the ultimate fit ends here.....",
        "price": 450,
        "oldPrice": 500,
        "img": "assets/images/82.jpg",
        "category": "Accessories",
        "stock": "In Stock"
    },
    {
        "id": "a4",
        "name": "From morning coffee to late-night vibes in our premium denim.....",
        "price": 700,
        "oldPrice": 900,
        "img": "assets/images/92.jpg",
        "category": "Accessories",
        "stock": "In Stock"
    },
    {
        "id": "a5",
        "name": "Good jeans, good mood, good day.....",
        "price": 800,
        "oldPrice": 950,
        "img": "assets/images/84.jpg",
        "category": "Accessories",
        "stock": "In Stock"
    },
    {
        "id": "a6",
        "name": "Softness you have to feel to believe.....",
        "price": 1000,
        "oldPrice": 1200,
        "img": "assets/images/97.jpg",
        "category": "Accessories",
        "stock": "In Stock"
    },
    {
        "id": "a7",
        "name": "Relaxation has never looked this good.....",
        "price": 500,
        "oldPrice": 650,
        "img": "assets/images/86.jpg",
        "category": "Accessories",
        "stock": "In Stock"
    },
    {
        "id": "a8",
        "name": "Sleep in them, gym in them, live in them.....",
        "price": 550,
        "oldPrice": 650,
        "img": "assets/images/90.jpg",
        "category": "Accessories",
        "stock": "In Stock"
    },
    {
        "id": "a9",
        "name": "Upgrade your lounge game.....",
        "price": 450,
        "oldPrice": 500,
        "img": "assets/images/88.jpg",
        "category": "Accessories",
        "stock": "In Stock"
    }
];
