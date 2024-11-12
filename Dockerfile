# Usar la imagen Node.js como base
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación Remix
RUN npm run build

# Exponer el puerto para el servidor Remix
EXPOSE 8080

# Ejecutar el servidor Remix
CMD ["npm", "run", "start"]
