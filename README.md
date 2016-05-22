# Juego 1 a 121

Para la creacion del juego se comenzo por crear un archivo html con tres botones que cumplirian las tareas de dar inicio al juego, reiniciar el juego y solicitar ayudas

Despues creo el archivo scrip.js en donde se comenzo por crear una matriz de 11 por 11 que nos generara 121 espacios o campos para imprimir los numeros a buscar en el juego, cada campo tiene un id que se adicionaba a un array a medida que se genera la tabla

El siguiente paso fue crear una funcion que generara numeros aletorios para imprimirlos en cada uno delos campos, una vez tenido esto se procedio a  validar el boton de "comenzar" el cual ejecuta la funion de generar un numero aleatorio a buscar y desaparecer el boton despues de oprimido

Con el boton de nuevo juego se se procedio a validar la creacion de nuevos numeros aleatorios en la tabla y un nuevo numer a buscar

Pra el boton de ayuda se creo una variabe ayudas que mientra fuera meor a tres le iba a permitir encontrar el numero mas rapido, que en este caso la qyuda es el cambio de color del cuadro respectivo del numero

Finalmete se creo la funcion para temporizar 5 minutos la cual se ejcutaba cada un segundo para imprimir el tiempo restante dej jugador