import { CreateProductDto } from './dto/create-product.dto';

export interface Box {
  name: string;
  height: number;
  width: number;
  length: number;
  products: CreateProductDto[];
}