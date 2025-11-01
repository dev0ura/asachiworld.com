export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Anonymous Buyer',
        role: 'Housewife',
        content: 'The stove looks nice and shiny, and it makes the room brighter. The design seems safe and easy to use. The cleaning tray makes it simple to remove dirt.',
        rating: 5
    }
];

export default testimonials;