"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesService = void 0;
const common_1 = require("@nestjs/common");
let PackagesService = class PackagesService {
    boxes = [
        { name: 'Box1', height: 30, width: 40, length: 80 },
        { name: 'Box2', height: 50, width: 50, length: 40 },
        { name: 'Box3', height: 50, width: 80, length: 60 },
    ];
    packOrder(order) {
        const packedBoxes = [];
        for (const product of order.products) {
            let placed = false;
            for (const box of packedBoxes) {
                if (product.height <= box.height &&
                    product.width <= box.width &&
                    product.length <= box.length) {
                    box.products.push(product);
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                const suitableBox = this.boxes.find((b) => product.height <= b.height &&
                    product.width <= b.width &&
                    product.length <= b.length);
                if (suitableBox) {
                    packedBoxes.push({ ...suitableBox, products: [product] });
                }
                else {
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
};
exports.PackagesService = PackagesService;
exports.PackagesService = PackagesService = __decorate([
    (0, common_1.Injectable)()
], PackagesService);
//# sourceMappingURL=packages.service.js.map