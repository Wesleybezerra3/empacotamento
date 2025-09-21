import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiBody } from '@nestjs/swagger';
import { PackagesService } from './packages.service';
import { CreateOrdersDto } from './dto/create-orders.dto';

@ApiTags('Packages')
@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Post('pack-multiple')
  @ApiOkResponse({
    description: 'Exemplo de entrada de dados',
    schema: {
      example: {
        orders: [
          {
            orderId: 'pedido1',
            products: [
              { name: 'Produto A', height: 20, width: 30, length: 50 },
              { name: 'Produto B', height: 40, width: 40, length: 40 },
            ],
          },
          {
            orderId: 'pedido2',
            products: [
              { name: 'Produto C', height: 50, width: 50, length: 60 },
            ],
          },
        ],
      },
    },
  })
  //Route para empacotar múltiplos pedidos
  packOrders(@Body() ordersDto: CreateOrdersDto) {
    return ordersDto.orders.map((order) =>
      this.packagesService.packOrder(order),
    );
  }
}
