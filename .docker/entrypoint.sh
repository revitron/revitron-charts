#!/bin/sh

sed -i "s/#LoadModule\ rewrite_module/LoadModule\ rewrite_module/" /etc/apache2/httpd.conf
sed -i "s/#LoadModule\ session_module/LoadModule\ session_module/" /etc/apache2/httpd.conf
sed -i "s/#LoadModule\ session_cookie_module/LoadModule\ session_cookie_module/"

sed -i "s/#ServerName www.example.com:80/ServerName revitron.docker/" /etc/apache2/httpd.conf
sed -i 's|^DocumentRoot\ ".*|DocumentRoot\ "/app/public"|g' /etc/apache2/httpd.conf
sed -i "s|/var/www/localhost/htdocs|/app/public|" /etc/apache2/httpd.conf

echo '<Directory "/app/public">' >> /etc/apache2/httpd.conf
echo "    AllowOverride All" >> /etc/apache2/httpd.conf
echo "</Directory>" >> /etc/apache2/httpd.conf

rm -f /run/apache2/apache2.pid
rm -f /run/apache2/httpd.pid

exec "$@"