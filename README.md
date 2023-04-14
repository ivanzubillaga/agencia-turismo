# DESAFIO TECNICO

 Selecciona una aerolineas para activar el formulario y poder completar la solicitud


Este software fue creado con las siguientes tecnologias:

- [ReactJS](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)

## 🛠 Instalación 
1. Clona este proyecto.

2. Entrar a la carpeta del proyecto
```
cd agencia-turismo
```
3. Instalando las dependencias
```
npm install
```
4. Corre el ambiente local
```
npm run dev
```
## 🛠 Contenido
1. Componentes:
App.js `Home Componente principal`

Bienvenida.js `Encargado de entregar el mensaje de bienvenida con la aerolinea seleccionada`

ContactForm.js `Formulario de contacto con validaciones HTML`

LighBox.js `Mensaje tipo Lightbox que aparece cuando el form es enviado con exito.`

Mensaje.js `Mensaje tipo alerta por error de formulario`

NavBar.js `Menu principal con botones para elegir la aerolinea`

2. Datos:
Datos.json `Json de los datos para crear el navBar`

3. Helpers:
getDataNav.js `Fetch de Datos.json para NavBar`

Validadators.js `Validadores de datos para el Form`

## 🛠 Test
1. Ejecutar pruebas
```
npm run test
```
## 🛠 Contenido Test
getDataNav.test.js `Realiza un fetch de Datos.json y comprueba que el objeto sea el deseado`

ContactForm.test.js  `Comprueba que existan todos los campos requeridos en el DOM`

main.test.js  `Comprueba que existe el mensaje de bienvenida h1`

LightBox.test.js `Comprueba mensaje de Formulario exitoso, se espera:"Tu información fue enviada con éxito, estaremos en contacto contigo`

## Autor

**ivanzubillaga**

Creador [@ivanzubillaga](https://github.com/ivanzubillaga)