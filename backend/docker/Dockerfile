# 1. Usar uma imagem leve do Node
FROM node:20-slim AS builder

# 2. Instalar dependências para o Prisma e OpenSSL
RUN apt-get update && apt-get install -y openssl

# 3. Definir diretório de trabalho
WORKDIR /app

# 4. Copiar arquivos de dependências
COPY package*.json ./
COPY prisma ./prisma/

# 5. Instalar tudo
RUN npm install

# 6. Copiar o restante do código e compilar
COPY . .
RUN npx prisma generate
RUN npm run build

# 7. Imagem de produção (Fase final)
FROM node:20-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Expor a porta do seu Relayer
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "start"]