# ClearLasik React Docker Setup

이 프로젝트는 Docker를 사용하여 React 애플리케이션을 컨테이너화했습니다.

## 파일 구조

- `Dockerfile`: 멀티스테이지 빌드를 위한 Docker 설정
- `docker-compose.yml`: Docker Compose 설정
- `env.example`: 환경 변수 예시 파일
- `.dockerignore`: Docker 빌드 시 제외할 파일들

## 사용 방법

### 1. 환경 변수 설정

```bash
# env.example 파일을 .env로 복사
cp env.example .env

# 필요에 따라 .env 파일의 값들을 수정
```

### 2. Docker Compose로 실행

```bash
# 개발 환경으로 실행
docker-compose up --build

# 백그라운드에서 실행
docker-compose up -d --build
```

### 3. 개별 Docker 명령어로 실행

```bash
# 개발 환경으로 빌드 및 실행
docker build --target development -t clearlasik-react .
docker run -p 3002:3002 clearlasik-react

# 프로덕션 환경으로 빌드 및 실행
docker build --target production -t clearlasik-react-prod .
docker run -p 80:80 clearlasik-react-prod
```

## 환경 변수

- `APP_ENV`: 애플리케이션 환경 (development/production)
- `REACT_V1_PORT`: 호스트 포트 (기본값: 3002)
- `REACT_CONTAINER_PORT`: 컨테이너 포트 (기본값: 3002)
- `API_URL`: API 서버 URL
- `TZ`: 타임존 (기본값: Asia/Seoul)

## 포트

- 개발 환경: `http://localhost:3002`
- 프로덕션 환경: `http://localhost:80`

## 볼륨

- `clearlasik_react_node_modules`: node_modules를 위한 네임드 볼륨
- 소스 코드는 호스트와 컨테이너 간에 동기화됩니다.

## 네트워크

- `clearlasik_net`: 애플리케이션용 브리지 네트워크
