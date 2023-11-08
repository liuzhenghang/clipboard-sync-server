# 使用官方 Node.js 16 镜像作为基础镜像
FROM node:16

# 设置工作目录
WORKDIR /app

# 将本地项目文件复制到容器内的工作目录
COPY . .

# 安装项目依赖
RUN npm install

# 暴露容器内应用程序的端口（如果需要）
 EXPOSE 8765

# 运行 Node.js 应用程序
CMD ["node", "index.js"]
