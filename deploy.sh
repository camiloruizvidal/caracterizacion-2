#!/bin/bash


frontend_dir="/var/www/html/caracterizacion/caracterizacion-2/frontend"
backend_dir="/var/www/html/caracterizacion/caracterizacion-2/back"

echo "Iniciando el proceso..."

cd $frontend_dir
echo "Ejecutando git pull en el directorio $frontend_dir"
git pull origin main

echo "Ejecutando npm i en el directorio $frontend_dir"
npm i

echo "Ejecutando npm run build en el directorio $frontend_dir"
npm run build

echo "Copiando .htaccess al directorio de distribución"
cp $frontend_dir/.htaccess $frontend_dir/dist/.htaccess

cd $backend_dir

echo "Ejecutando npm i en el directorio $backend_dir"
npm i

echo "Ejecutando adonis migration:run en el directorio $backend_dir"
adonis migration:run

echo "Reiniciando PM2"
pm2 restart all

echo "Proceso completado."
exit 0
