Este proyecto se encuentra en el repositorio (https://github.com/jluisvar8a/tres-en-linea)

## Para iniciar el proyecto
  
  1. se debe tener instalado Mongodb, si no sabes como (https://gist.github.com/AlejoJamC/b8635af765ac7495c4931403b97a0d78)  
  2. Se debe tener instalado Nodejs, si no sabes como sigue los pasos del repositorio (https://github.com/paulomcnally/   content_desarrolladores/blob/master/articles/como-instalar-nodejs-en-windows-linux-mac.markdown)

## Levantar base de datos
  
  1. Presionamos las teclas window + R 
  2. Aparece una consola en la cual digitamos "cmd" y damos clic en el boton "Aceptar"
  3. En la consola digitamos "mongod"
  4. Si no muestra error quiere decir que mongod esta levantado

## Levantar el servidor 

  1. Vamos a la ruta tres-en-linea/backend 
  2. En la carpeta backend presionamos la techa shift y clic derecho del mause sin soltar la tecla shift 
  3. Clic en "abrir la ventana de PowerSell aqui" 
  4. En la ventana de comandos digitamos "npm run dev" y luego enter, en la ventana se visualizara un mensaje parcedio 

                [nodemon] 1.18.10
                [nodemon] to restart at any time, enter `rs`
                [nodemon] watching: *.*
                [nodemon] starting `node src/index.js`
                Server on port 3001
                DB is connected 

## Iniciar el frontend 

  1. Vamos a la ruta tres-en-linea/frontend 
  2. En la carpeta frontend presionamos la techa shift y clic derecho del mause sin soltar la tecla shift 
  3. Clic en "abrir la ventana de PowerSell aqui" 
  4. En la ventana de comandos digitamos "npm start" y luego enter, en la ventana se visualizara un mensaje parcedio 

    You can now view frontend in the browser.

    Local:            http://localhost:3000/
    On Your Network:  http://192.168.0.108:3000/

    Note that the development build is not optimized.
    To create a production build, use npm run build.

  5. Luego de levantar el frontend se abrirá una ventana en el navegador "http://localhost:3000/"

## Como funciona

  1.  Damos clic en el botón "New game", se visualiza un formulario con dos usuarios
  2.  Se ingresan los usuarios y clic en el botón "Start" 
  3.  Se visualiza un recuadro donde por medio del mouse un jugador puede seleccionar un espacion en los recuadros.
  4.  El sistema visualiza una X para el primer jugador y vusualiza que toca el turno del segundo jugador
  5.  El segundo jugador da clic en un recuadro vacío y se visualiza un circulo
  6.  El primero en hacer tres en linea será el ganador.  
  7.  En caso de no haber ganador se visualizará Empate.

