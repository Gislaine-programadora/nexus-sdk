# nexus-sdk/backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Instalar dependências
COPY package*.json ./
RUN npm install

# Copiar código e gerar o Prisma Client
COPY . .
RUN npx prisma generate
RUN npm run build

# Expor a porta do servidor
EXPOSE 3000

CMD ["npm", "start"]
