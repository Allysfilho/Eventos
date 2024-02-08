# Imagem base
FROM postgres:14

# Configurações do usuário e do banco de dados
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB eventos

# Configuração para aceitar conexões externas
RUN echo "listen_addresses='*'" >> /usr/share/postgresql/postgresql.conf.sample
RUN echo "host all all 0.0.0.0/0 md5" >> /usr/share/postgresql/pg_hba.conf.sample

# Expondo a porta padrão do PostgreSQL
EXPOSE 5432

# Comando de inicialização
CMD ["postgres", "-c", "config_file=/usr/share/postgresql/postgresql.conf.sample"]

#Acessar banco de dados com o ip da maquina
