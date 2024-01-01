
# Crear y publicar un nuevo package

## Creación del package
1. Inicializar npm desde CLI
```sh
npm init
```
Me guiará a través de una serie de pasos donde me solicita información relacionada con mi package, como el nombre (único), la versión, la descripción, el punto de entrada (index.js), comando de prueba, repositorio de git en donde vive, palabras clave para coincidir con búsquedas, autor, licencia.

2. Presionar enter para aceptar que la información es corrrecta y generar el archivo package.json
> - package.json
    - Contiene información sobre el proyecto-módulo que vamos a crear. Son un estándar de nodejs para facilitar la estructura y ejecución de los proyectos dentro del entorno de ejecución y de esta manera poder compartirlo a través del sitio de 
    -La información se estructura como objeto de Js con notación JSON.
```sh
npm init
```
3.Crear una carpeta llamda 'modules' en donde vivirá nuestro script.
4.Dentro de modules crear el script (.js) con el nombre 'par-impar.js
5.Crear la función del script y exportarla con 'export default'
6.Importar el script desde el archivo 'index.js' con 'import + function + from + ruta con extensión'
7. Configurar el `"type": "module"` en el archivo `package.json`
8. Ejecutamos el programa desde el entorno de nodejs con el comando
```sh
node index.js
```
## Publicar package en npm
1.Inicar sesión de npm desde CLI con el comando
```sh
npm login
```
1.Agregar el nombre de username, password, email
```sh
npm login
```
2. Esperamos que cargue y presionamos enter para abrir el navegador
3. Recibiremos un correo con un password de una sola vez, lo agregamos y presionamos Login
4. Regresamos a la terminal y nos mostrará el mensaje `logged in on npmjs.org`
5. Publicar el package con acceso público desde CLI a npm con el comando
```sh
npm publish --acess=public
```