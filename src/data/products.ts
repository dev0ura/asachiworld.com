export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    features: string[];
    images: string[];
    inStock: boolean;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Asachi x3',
        description: 'Professional-grade triple burner for precise cooking',
        price: "12,000",
        features: ['Triple burner system', 'Premium stainless steel', 'Smart heat distribution'],
        inStock: true,
        images: [
            '/images/three-burner-1.jpeg',
            '/images/three-burner.jpeg',
            '/images/burner.jpeg',
            '/images/stove-switch.jpeg'
        ],
    },
    {
        id: 2,
        name: 'Asachi x4',
        description: 'Premium four-burner gas stove with precision control',
        price: "",
        features: ['Professional grade', 'Compact design', 'Maximum efficiency'],
        inStock: false,
        images: [
            '/images/four-burner.jpeg',
            '/images/single-burner.jpeg',
            '/images/gas-inlet.jpeg',
            '/images/rubber-stand.jpeg'
        ],
    },
    {
        id: 3,
        name: '',
        description: 'Premium single-burner gas stove with precision control',
        price: "",
        features: ['Professional grade', 'Compact design', 'Maximum efficiency'],
        inStock: false,
        images: [
            '/images/single-burner.jpeg',
            '/images/gas-inlet.jpeg',
            '/images/rubber-stand.jpeg'
        ],
    }
];

export default products;