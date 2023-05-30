@echo off
REM Ejecutar npx electron-packager
npx electron-packager .\ greeenwheels --platform=win32 --arch=x64
REM Cambiar al directorio greeenwheels-win32-x64
cd Proyect_Final\Frontend\greeenwheels-win32-x64\
REM Ejecutar el archivo greenwheels.exe
start greenwheels.exe