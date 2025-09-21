"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Empacotamento de games')
        .setDescription('API para empacotamento de produtos em caixas')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/', app, document);
    await app.listen(8081);
    console.log('API rodando em http://localhost:8081');
    console.log('Swagger em http://localhost:8081/');
}
bootstrap();
//# sourceMappingURL=main.js.map