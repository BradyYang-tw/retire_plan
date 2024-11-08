# 使用 Node.js 作為基礎鏡像
FROM node:16 AS build

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製其餘的應用程式代碼
COPY . .

# 打包 React 應用
RUN npm run build

# 使用 nginx 作為生產環境的 web 伺服器
FROM nginx:alpine

# 複製 build 資料夾到 nginx 的 html 目錄中
COPY --from=build /app/build /usr/share/nginx/html

# 暴露 nginx 預設端口
EXPOSE 80

# 啟動 nginx
CMD ["nginx", "-g", "daemon off;"]
