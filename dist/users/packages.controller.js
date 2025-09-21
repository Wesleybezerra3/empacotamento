"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const packages_service_1 = require("./packages.service");
const create_orders_dto_1 = require("./dto/create-orders.dto");
let PackagesController = class PackagesController {
    packagesService;
    constructor(packagesService) {
        this.packagesService = packagesService;
    }
    packOrders(ordersDto) {
        return ordersDto.orders.map((order) => this.packagesService.packOrder(order));
    }
};
exports.PackagesController = PackagesController;
__decorate([
    (0, common_1.Post)('pack-multiple'),
    (0, swagger_1.ApiOkResponse)({
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
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_orders_dto_1.CreateOrdersDto]),
    __metadata("design:returntype", void 0)
], PackagesController.prototype, "packOrders", null);
exports.PackagesController = PackagesController = __decorate([
    (0, swagger_1.ApiTags)('Packages'),
    (0, common_1.Controller)('packages'),
    __metadata("design:paramtypes", [packages_service_1.PackagesService])
], PackagesController);
//# sourceMappingURL=packages.controller.js.map