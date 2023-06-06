#!/bin/bash
# Ejecutar npx electron-packager
npx electron-packager ./ greeenwheels --platform=linux --arch=x64
# Cambiar al directorio greeenwheels-linux-x64
cd Proyect_Final/Frontend/greeenwheels-linux-x64/
# Ejecutar el archivo greenwheels
./greenwheels