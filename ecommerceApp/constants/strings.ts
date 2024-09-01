export const categories = [
    {
        id: 0,
        title: 'T-shirts',
    },
    {
        id: 1,
        title: 'Crop tops',
    },
    {
        id: 2,
        title: 'Sleeveless',
    },
    {
        id: 3,
        title: 'T-shirts',
    },
];



export interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    rating: number;
}

export const data: Product[] = [
    {
        id: 1,
        title: 'Product 1',
        description: 'Description for Product 1',
        price: '$19.99',
        imageUrl: require("../assets/images/banner.png"),
        rating: 4.5,
    },
    {
        id: 2,
        title: 'Product 2',
        description: 'Description for Product 2',
        price: '$29.99',
        imageUrl: 'https://example.com/product2.jpg',
        rating: 4.2,
    },
    {
        id: 3,
        title: 'Product 3',
        description: 'Description for Product 3',
        price: '$24.99',
        imageUrl: 'https://example.com/product3.jpg',
        rating: 4.8,
    },
    {
        id: 4,
        title: 'Product 4',
        description: 'Description for Product 4',
        price: '$39.99',
        imageUrl: 'https://example.com/product4.jpg',
        rating: 4.0,
    },
    {
        id: 5,
        title: 'Product 5',
        description: 'Description for Product 5',
        price: '$49.99',
        imageUrl: 'https://example.com/product5.jpg',
        rating: 4.7,
    },
    {
        id: 6,
        title: 'Product 6',
        description: 'Description for Product 6',
        price: '$14.99',
        imageUrl: 'https://example.com/product6.jpg',
        rating: 4.3,
    },
    {
        id: 7,
        title: 'Product 7',
        description: 'Description for Product 7',
        price: '$34.99',
        imageUrl: 'https://example.com/product7.jpg',
        rating: 4.6,
    },
    {
        id: 8,
        title: 'Product 8',
        description: 'Description for Product 8',
        price: '$27.99',
        imageUrl: 'https://example.com/product8.jpg',
        rating: 4.1,
    },
    {
        id: 9,
        title: 'Product 9',
        description: 'Description for Product 9',
        price: '$22.99',
        imageUrl: 'https://example.com/product9.jpg',
        rating: 4.4,
    },
    {
        id: 10,
        title: 'Product 10',
        description: 'Description for Product 10',
        price: '$31.99',
        imageUrl: 'https://example.com/product10.jpg',
        rating: 4.9,
    },
    {
        id: 11,
        title: 'Product 11',
        description: 'Description for Product 10',
        price: '$31.99',
        imageUrl: 'https://example.com/product10.jpg',
        rating: 4.9,
    },
];
