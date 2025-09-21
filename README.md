# Empacotamento de Games

API desenvolvida em **NestJS** que recebe pedidos com produtos e suas dimensões (altura, largura, comprimento) e retorna a melhor forma de embalar cada pedido em caixas de papelão.

---

## 📦 Funcionalidade Principal

- Recebe múltiplos pedidos com produtos.
- Calcula a melhor forma de empacotar produtos em caixas disponíveis.
- Retorna JSON indicando quais produtos vão em cada caixa.

---
## 🛠 Tecnologias
- Node.js  
- NestJS   
- TypeScript  
- Swagger (documentação da API)  
- Docker (para containerização)  

## 🔗 Links do Projeto

- Repositório GitHub: [https://github.com/Wesleybezerra3/empacotamento](https://github.com/Wesleybezerra3/empacotamento)  
- Ambiente GitHub Codespace (para testar sem instalar nada localmente): [https://refactored-carnival-66jj44pr5qpfwxv.github.dev/](https://refactored-carnival-66jj44pr5qpfwxv.github.dev/)  
- Endpoint de exemplo funcionando: [Teste do endpoint packOrders](https://refactored-carnival-66jj44pr5qpfwxv-3000.app.github.dev/#/Packages/PackagesController_packOrders)

---

## 📄 Exemplo de Requisição

**POST** `/packages/pack-multiple`

```json
{
  "orders": [
    {
      "orderId": "pedido1",
      "products": [
        { "name": "Produto A", "height": 20, "width": 30, "length": 50 },
        { "name": "Produto B", "height": 40, "width": 40, "length": 40 }
      ]
    }
  ]
}

## 📄 Resposta Esperada

```json
[
  {
    "orderId": "pedido1",
    "boxes": [
      {
        "name": "Box1",
        "height": 30,
        "width": 40,
        "length": 80,
        "products": [
          { "name": "Produto A", "height": 20, "width": 30, "length": 50 }
        ]
      },
      {
        "name": "Box2",
        "height": 50,
        "width": 50,
        "length": 40,
        "products": [
          { "name": "Produto B", "height": 40, "width": 40, "length": 40 }
        ]
      }
    ]
  }
]


