const foodItem = [
    {
        id: 1,
        name: 'Hyderabadi Chicken',
        category: 'biryani',
        rating: 4.6,
        price: 200,
        img: 'images/Biryani/Hyderabadi-Chicken-Biryani.jpg',
        quantity: 1
    },
    {
        id: 2,
        name: 'Ambur Chicken',
        category: 'biryani',
        rating: 4.3,
        price: 160,
        img: 'images/Biryani/Ambur-Chicken-Biryani.jpg',
        quantity: 1
    },
    {
        id: 3,
        name: 'Egg Biryani',
        category: 'biryani',
        rating: 3.8,
        price: 110,
        img: 'images/Biryani/Egg-Biryani.jpg',
        quantity: 1
    },
    {
        id: 4,
        name: 'Hyderabadi Mutton',
        category: 'biryani',
        rating: 4.5,
        price: 220,
        img: 'images/Biryani/Hyderabadi-Mutton-Biryani.jpg',
        quantity: 1
    },
    {
        id: 5,
        name: 'Goan Fish Biryani',
        category: 'biryani',
        rating: 3.7,
        price: 150,
        img: 'images/Biryani/Goan-Fish-Biryani.jpg',
        quantity: 1
    },
    {
        id: 6,
        name: 'Kashmiri Pulao',
        category: 'biryani',
        rating: 4.1,
        price: 160,
        img: 'images/Biryani/Kashmiri-Pulao.jpg',
        quantity: 1
    },
    {
        id: 7,
        name: 'Mughlai Biryani',
        category: 'biryani',
        rating: 4.7,
        price: 250,
        img: 'images/Biryani/Mughlai-Biryani.jpg',
        quantity: 1
    },
    {
        id: 8,
        name: 'Kamrupi Biryani',
        category: 'biryani',
        rating: 3.9,
        price: 140,
        img: 'images/Biryani/Kamrupi-Biryani.jpg',
        quantity: 1
    },
    {
        id: 9,
        name: 'Afghani Pulao',
        category: 'biryani',
        rating: 4.4,
        price: 160,
        img: 'images/Biryani/Afghani-Pulao.jpg',
        quantity: 1
    },
    {
        id: 10,
        name: 'Chicken Curry',
        category: 'chicken',
        rating: 3.5,
        price: 90,
        img: 'images/Chicken/Chicken-Curry.jpg',
        quantity: 1
    },
    {
        id: 11,
        name: 'Chicken Do Pyaza',
        category: 'chicken',
        rating: 3.8,
        price: 110,
        img: 'images/Chicken/Chicken-Do-Pyaza.jpg',
        quantity: 1
    },
    {
        id: 12,
        name: 'Chicken Kali Mirch',
        category: 'chicken',
        rating: 3.9,
        price: 130,
        img: 'images/Chicken/Chicken-Kali-Mirch.jpg',
        quantity: 1
    },
    {
        id: 13,
        name: 'Chicken Masala',
        category: 'chicken',
        rating: 3.7,
        price: 110,
        img: 'images/Chicken/Chicken-Masala.jpg',
        quantity: 1
    },
    {
        id: 14,
        name: 'Handi Chicken',
        category: 'chicken',
        rating: 4.5,
        price: 200,
        img: 'images/Chicken/Handi-Chicken.jpg',
        quantity: 1
    },
    {
        id: 15,
        name: 'Murgh Musallam',
        category: 'chicken',
        rating: 4.2,
        price: 140,
        img: 'images/Chicken/Murgh-Musallam.jpg',
        quantity: 1
    },
    {
        id: 16,
        name: 'Roast Chicken',
        category: 'chicken',
        rating: 4.7,
        price: 220,
        img: 'images/Chicken/Roast-Chicken.jpg',
        quantity: 1
    },
    {
        id: 17,
        name: 'Kadhai Paneer',
        category: 'paneer',
        rating: 4.6,
        price: 165,
        img: 'images/Paneer/Kadhai-Paneer.jpg',
        quantity: 1
    },
    {
        id: 18,
        name: 'Matar Paneer',
        category: 'paneer',
        rating: 3.6,
        price: 120,
        img: 'images/Paneer/Matar-Paneer.jpg',
        quantity: 1
    },
    {
        id: 19,
        name: 'Palak Paneer',
        category: 'paneer',
        rating: 4.1,
        price: 140,
        img: 'images/Paneer/Palak-Paneer.jpg',
        quantity: 1
    },
    {
        id: 20,
        name: 'Paneer Butter',
        category: 'paneer',
        rating: 4.2,
        price: 150,
        img: 'images/Paneer/Paneer-Butter-Masala.jpg',
        quantity: 1
    },
    {
        id: 21,
        name: 'Paneer Do Pyaza',
        category: 'paneer',
        rating: 4.3,
        price: 105,
        img: 'images/Paneer/Paneer-Do-Pyaza.jpg',
        quantity: 1
    },
    {
        id: 22,
        name: 'Paneer Hyderabadi ',
        category: 'paneer',
        rating: 4.6,
        price: 180,
        img: 'images/Paneer/Paneer-Hyderabadi-Masala.jpg',
        quantity: 1
    },
    {
        id: 23,
        name: 'Paneer Lababdar',
        category: 'paneer',
        rating: 4.5,
        price: 150,
        img: 'images/Paneer/Paneer-Lababdar.jpg',
        quantity: 1
    },
    {
        id: 24,
        name: 'Shahi Paneer',
        category: 'paneer',
        rating: 4.6,
        price: 175,
        img: 'images/Paneer/Shahi-Paneer.jpg',
        quantity: 1
    },
    {
        id: 25,
        name: 'Navratan Korma',
        category: 'vegetable',
        rating: 4.2,
        price: 140,
        img: 'images/Vegetables/Navratan-Korma.jpg',
        quantity: 1
    },
    {
        id: 26,
        name: 'Veg Kolhapuri',
        category: 'vegetable',
        rating: 4.3,
        price: 150,
        img: 'images/Vegetables/Veg-Kolhapuri.jpg',
        quantity: 1
    },
    {
        id: 27,
        name: 'Veg Jalfrezi',
        category: 'vegetable',
        rating: 4.4,
        price: 170,
        img: 'images/Vegetables/Veg-Jalfrezi.jpg',
        quantity: 1
    },
    {
        id: 28,
        name: 'Veg Tikka Masala',
        category: 'vegetable',
        rating: 4.7,
        price: 190,
        img: 'images/Vegetables/Veg-Tikka-Masala.jpg',
        quantity: 1
    },
    {
        id: 29,
        name: 'Vegetable Curry',
        category: 'vegetable',
        rating: 4.0,
        price: 145,
        img: 'images/Vegetables/Vegetable-Curry.jpg',
        quantity: 1
    },
    {
        id: 30,
        name: 'Vegetable Pakora',
        category: 'vegetable',
        rating: 4.5,
        price: 80,
        img: 'images/Vegetables/Vegetable-Pakora.jpg',
        quantity: 1
    },
    {
        id: 31,
        name: 'Vegetable Soup',
        category: 'vegetable',
        rating: 3.5,
        price: 100,
        img: 'images/Vegetables/Vegetable-Soup.jpg',
        quantity: 1
    },
    {
        id: 32,
        name: 'Cabbage Momos',
        category: 'chinese',
        rating: 4.0,
        price: 80,
        img: 'images/Chinese/Cabbage-Momos.jpg',
        quantity: 1
    },
    {
        id: 33,
        name: 'Chicken Fried Rice',
        category: 'chinese',
        rating: 4.2,
        price: 160,
        img: 'images/Chinese/Chicken-Fried-Rice.jpg',
        quantity: 1
    },
    {
        id: 34,
        name: 'Chicken Momos',
        category: 'chinese',
        rating: 4.1,
        price: 100,
        img: 'images/Chinese/Chicken-Momos.jpg',
        quantity: 1
    }, {
        id: 35,
        name: 'Chilli Chicken',
        category: 'chinese',
        rating: 4.3,
        price: 200,
        img: 'images/Chinese/Chilli-Chicken.jpg',
        quantity: 1
    }, {
        id: 36,
        name: 'Chowein',
        category: 'chinese',
        rating: 3.7,
        price: 110,
        img: 'images/Chinese/Chowein.jpg',
        quantity: 1
    },
    {
        id: 37,
        name: 'Mnachuraian',
        category: 'chinese',
        rating: 4.2,
        price: 120,
        img: 'images/Chinese/Manchurian.jpg',
        quantity: 1
    },
    {
        id: 38,
        name: 'Spring Rolls',
        category: 'chinese',
        rating: 4.0,
        price: 125,
        img: 'images/Chinese/Spring-Rolls.jpg',
        quantity: 1
    },
    {
        id: 39,
        name: 'Veg Fried Rice',
        category: 'chinese',
        rating: 4.5,
        price: 150,
        img: 'images/Chinese/Veg-Fried-Rice.jpg',
        quantity: 1
    },
    {
        id: 40,
        name: 'Butter Masala Dosa',
        category: 'south-indian',
        rating: 4.5,
        price: 150,
        img: 'images/South-Indian/Butter-Masala-Dosa.jpg',
        quantity: 1
    },
    {
        id: 41,
        name: 'Idli',
        category: 'south-indian',
        rating: 4.5,
        price: 60,
        img: 'images/South-Indian/Idli.jpg',
        quantity: 1
    },
    {
        id: 42,
        name: 'Masala Dosa',
        category: 'south-indian',
        rating: 4.0,
        price: 100,
        img: 'images/South-Indian/Masala-Dosa.jpg',
        quantity: 1
    },
    {
        id: 43,
        name: 'Mysore Bonda',
        category: 'south-indian',
        rating: 3.8,
        price: 50,
        img: 'images/South-Indian/Mysore-Bonda.jpg',
        quantity: 1
    },
    {
        id: 44,
        name: 'Onion Uttapam',
        category: 'south-indian',
        rating: 4.3,
        price: 80,
        img: 'images/South-Indian/Onion-Uttapam.jpg',
        quantity: 1
    },
    {
        id: 45,
        name: 'Plain Dosa',
        category: 'south-indian',
        rating: 3.6,
        price: 75,
        img: 'images/South-Indian/Plain-Dosa.jpg',
        quantity: 1
    },
    {
        id: 46,
        name: 'Rava Uttapam',
        category: 'south-indian',
        rating: 4.4,
        price: 75,
        img: 'images/South-Indian/Rava-Uttapam.jpg',
        quantity: 1
    },
    {
        id: 47,
        name: 'Sambar Vada',
        category: 'south-indian',
        rating: 3.4,
        price: 60,
        img: 'images/South-Indian/Sambar-Vada.jpg',
        quantity: 1
    },
]

export { foodItem };