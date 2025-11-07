# 멀티스테이지 빌드를 위한 Node.js 베이스 이미지
FROM node:18-alpine as base

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일들 복사
COPY package*.json ./

# 개발 스테이지
FROM base as development

# 모든 의존성 설치 (개발 의존성 포함)
RUN npm ci

# 소스 코드 복사
COPY . .

# 포트 노출 (React 기본 포트)
EXPOSE 3000

# 개발 서버 시작
CMD ["npm", "start"]

# 프로덕션 빌드 스테이지
FROM base as production

# 모든 의존성 설치
RUN npm ci

# 소스 코드 복사
COPY . .

# 프로덕션 빌드
RUN npm run build

# Nginx를 사용한 정적 파일 서빙
FROM nginx:alpine as production-server

# 빌드된 파일을 nginx로 복사
COPY --from=production /app/build /usr/share/nginx/html

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 포트 노출
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]
