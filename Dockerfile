FROM alpine:edge

RUN apk update && \
	apk add --no-cache \
	bash \
	shadow \
	ca-certificates \
	openssl \
	openssh \
	apache2 \
	php8-apache2 \
	curl \
	php8-curl \
	php8-opcache

RUN ln -s /usr/bin/php8 /usr/bin/php \
	&& rm -f /var/cache/apk/*

RUN usermod -u 1000 apache

RUN mkdir /app

COPY .docker/entrypoint.sh /usr/local/bin/
COPY .docker/php.ini /etc/php8/php.ini

COPY public /app/public
COPY src /app/src

RUN chown -R apache:apache /app && \
	chmod -R 755 /app

WORKDIR /app
VOLUME /app

# Note that the sed command is used to change line endings of the entrypoint to just LF.
RUN chmod +x /usr/local/bin/entrypoint.sh && \
	sed -i 's/\r$//' /usr/local/bin/entrypoint.sh

EXPOSE 80
ENTRYPOINT ["entrypoint.sh"]
CMD ["httpd", "-D", "FOREGROUND"]