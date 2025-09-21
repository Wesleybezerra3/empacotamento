import { CreateOrderDto } from './dto/create-order.dto';
import { Box } from './box.interface';
export declare class PackagesService {
    private boxes;
    packOrder(order: CreateOrderDto): {
        orderId: string;
        boxes: Box[];
    };
}
