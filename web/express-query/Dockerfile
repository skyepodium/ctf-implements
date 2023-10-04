# Node.js 이미지를 사용
FROM node:16.15.1

# 앱 디렉토리 생성 및 작업 디렉토리로 설정
WORKDIR ./src

# package.json과 package-lock.json 복사
COPY package*.json ./

# 종속성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 애플리케이션 실행
CMD ["node", "app.js"]