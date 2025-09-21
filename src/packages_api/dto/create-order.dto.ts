import { CreateProductDto } from './create-product.dto';

export class CreateOrderDto {
  orderId: string;
  products: CreateProductDto[];
}
