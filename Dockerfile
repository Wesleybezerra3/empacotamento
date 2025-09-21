# Imagem base
FROM node:18-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Compila o NestJS para dist/
RUN npm run build

# Exponha a porta do NestJS
EXPOSE 3000

# Comando para rodar em produção
CMD ["node", "dist/main.js"]
