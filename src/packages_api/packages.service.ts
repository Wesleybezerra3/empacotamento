import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Box } from './box.interface';

@Injectable()
export class PackagesService {
  private boxes = [
    { name: 'Box1', height: 30, width: 40, length: 80 },
    { name: 'Box2', height: 50, width: 50, length: 40 },
    { name: 'Box3', height: 50, width: 80, length: 60 },
  ];

  packOrder(order: CreateOrderDto): { orderId: string; boxes: Box[] } {
    const packedBoxes: Box[] = [];

    for (const product of order.products) {
      let placed = false;

      // tenta colocar em caixas já usadas
      for (const box of packedBoxes) {
        if (
          product.height <= box.height &&
          product.width <= box.width &&
          product.length <= box.length
        ) {
          box.products.push(product);
          placed = true;
          break;
        }
      }

      // se não couber, cria nova caixa
      if (!placed) {
        const suitableBox = this.boxes.find(
          (b) =>
            product.height <= b.height &&
            product.width <= b.width &&
            product.length <= b.length,
        );

        if (suitableBox) {
          packedBoxes.push({ ...suitableBox, products: [product] });
        } else {
          packedBoxes.push({
            name: 'Não cabe em caixa',
            height: product.height,
            width: product.width,
            length: product.length,
            products: [product],
          });
        }
      }
    }

    return { orderId: order.orderId, boxes: packedBoxes };
  }

  login(): string {
    return 'Login realizado com sucesso!';
  }
}
