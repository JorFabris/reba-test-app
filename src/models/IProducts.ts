export interface IProducts {
    id: number;
    title: string;
    description: string;
    img: string;
    price: number;
    capacity: number;
    rate: number;
    reviews: number;
    favorite?: boolean
}
