# Dockerfile do PHP
FROM php:8.1.27-fpm

# Atualização do apt-get para captura de pacotes mais recentes
RUN apt-get update

# Instalação de todas as dependencias necessárias para funcionamento da aplicação
RUN apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libpq-dev \
    libonig-dev \
    nodejs \
    npm \
    libcurl4-openssl-dev \
    libssl-dev

# Instalação do npm (Via bash) - Executar pois não funcionou parametrizando direto no dockerfile
# apt-get install npm

# Instalação do Swoole
RUN pecl install swoole \
    && docker-php-ext-enable swoole

# Extensões para funcionamento do crud com banco pgsql
RUN docker-php-ext-install pdo_pgsql mbstring bcmath && \
    pecl install redis && \
    docker-php-ext-enable redis && \
    docker-php-ext-install pcntl

# Instalação do composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/app

CMD ["php", "artisan", "serve", "--host=0.0.0.0"]
