# Imagem base (Debian, mais compatível)
FROM node:18

# Diretório do app
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Build usando npx (Nest CLI local)
RUN npx nest build

# Expõe a porta do NestJS
EXPOSE 3000

# Rodar app
CMD ["node", "dist/main.js"]

