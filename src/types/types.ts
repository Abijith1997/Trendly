export interface ProductProps {
  id: number;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
  category: string;
}
