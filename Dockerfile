#制定node镜像的版本
FROM node:10-alpine
#移动当前目录下面的文件到app目录下
ADD . /app/
#进入到app目录下面，类似cd
WORKDIR /app
#安装依赖
RUN npm config set registry http://r.npm.taobao.org/ && \    
    npm config set sass_binary_site http://npm.taobao.org/mirrors/node-sass/ && \
    npm i
#对外暴露的端口
EXPOSE 3000
#程序启动脚本
CMD ["npm", "run","start:docker"]

# FROM keymetrics/pm2:latest-alpine
# WORKDIR /usr/src/app
# ADD . /usr/src/app
# RUN npm config set registry https://registry.npm.taobao.org/ && \  
#     npm i
# # RUN npm i
# EXPOSE 3000
# #pm2在docker中使用命令为pm2-docker
# # CMD ["pm2-runtime", "start", "--json", "process.json"]
# CMD ["pm2-runtime", "start",  "process.yml"]
