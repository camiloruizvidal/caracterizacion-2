#!/bin/bash

export FORCE_COLOR=true

timestamp=$(date +"%Y_%m_%d_%H_%M_%S")

log_file="/var/www/html/caracterizacion/caracterizacion-2/logsDeploy/deploy_$timestamp.log"
frontend_dir="/var/www/html/caracterizacion/caracterizacion-2/frontend"
backend_dir="/var/www/html/caracterizacion/caracterizacion-2/back"

exec > >(tee -a "$log_file")
exec 2>&1

echo -e "\e[31m========================================================================\e[0m"
echo "Iniciando el proceso..."
echo -e "\e[31m========================================================================\e[0m"

cd $frontend_dir

echo -e "\e[31m========================================================================\e[0m"
echo "Ejecutando git pull en el directorio $frontend_dir"
echo -e "\e[31m========================================================================\e[0m"

git pull origin main


echo -e "\e[31m========================================================================\e[0m"
echo "Ejecutando npm i en el directorio $frontend_dir"
echo -e "\e[31m========================================================================\e[0m"

npm i

echo -e "\e[31m========================================================================\e[0m"
echo "Ejecutando npm run build en el directorio $frontend_dir"
echo -e "\e[31m========================================================================\e[0m"

npm run build


echo -e "\e[31m========================================================================\e[0m"
echo "Copiando .htaccess al directorio de distribución"
echo -e "\e[31m========================================================================\e[0m"

cp $frontend_dir/.htaccess $frontend_dir/dist/.htaccess

cd $backend_dir


echo -e "\e[31m========================================================================\e[0m"
echo "Ejecutando npm i en el directorio $backend_dir"
echo -e "\e[31m========================================================================\e[0m"

npm i


echo -e "\e[31m========================================================================\e[0m"
echo "Ejecutando adonis migration:run en el directorio $backend_dir"
echo -e "\e[31m========================================================================\e[0m"

adonis migration:run


echo -e "\e[31m========================================================================\e[0m"
echo "Reiniciando PM2"
echo -e "\e[31m========================================================================\e[0m"

pm2 restart all


echo -e "\e[30m========================================================================\e[0m"
echo "Proceso completado."
echo -e "\e[30m========================================================================\e[0m"
exit 0
