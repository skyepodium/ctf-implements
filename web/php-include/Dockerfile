# 베이스 이미지 설정
FROM nginx

# PHP 레포지토리 추가
RUN apt-get update && apt-get install -y wget && \
    apt-get install -y lsb-release && \
    wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg && \
    echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/php.list && \
    apt-get update

# PHP 7.1.33 설치
RUN apt-get install -y php7.1-fpm php7.1-cli

# Nginx 설정 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 웹 애플리케이션 파일 복사
COPY index.php /usr/share/nginx/html/index.php

# PHP-FPM 실행
CMD service php7.1-fpm start && nginx -g "daemon off;"