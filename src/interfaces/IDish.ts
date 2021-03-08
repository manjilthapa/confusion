import { IComment } from "./IComment";
export interface IDish {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  comments: IComment[];
}
