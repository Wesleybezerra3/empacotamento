import { PackagesService } from './packages.service';
import { CreateOrdersDto } from './dto/create-orders.dto';
export declare class PackagesController {
    private readonly packagesService;
    constructor(packagesService: PackagesService);
    packOrders(ordersDto: CreateOrdersDto): {
        orderId: string;
        boxes: import("./box.interface").Box[];
    }[];
}
