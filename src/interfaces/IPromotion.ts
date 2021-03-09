export interface IPromotion {
  id: number;
  name: string;
  image: string;
  label: string;
  price: number;
  featured: boolean;
  description: string;
  designation?: string;
}
