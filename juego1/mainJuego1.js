/*Juego:
El gato: es un robot que se come energía y puede tener un porcentaje de 0 a 100
El Raton es un pull de Jules de energía que puede ser comido por el gato 
El gato se desplaza a una 5x velocidad y el ratón se desplaza a 3x de velocidad
tenemos que armar un algoritmo que defina el espacio en 2 dimensiones puede existir
desplazamiento como una Reyna de ajedrez, puede existir
Nrandom de ratones en el espacio
El gato debe calcular que ratón cazar primero, cuál es la mejor eficiencia
sabiendo que los ratones se desplazan
------------------------HECHO---------------------------------------
Movimiento controlado para que si van a una pared se escapen a la punta proxima como si fuera el pacman
------------------------PASOS SIGUIENTES----------------------------
    # Hacer matriz de juego
    # Hacer spawnear al gato,
    # Que el gato calcule cual es el raton mas cercano y lo intente atrapar
    # Asignar una especie de movimiento por turnos? aun no sabemos como sera la modalidad
    # Asignar un numero random de ratones en el mapa
    # Quizas bufear al gato para que cada vez que atrape se le reduzca en 1 el movimiento por 2 rondas pero le aumente 20 de energia+
    # Ver cuanto quitara cada movimiento, lo logico seria que el gato se canse mas rapido
*/

const cat = {
    nombre: "gatuvela",
    signo: "c",
    energy: 100,
    movementEner: 5,
    calcular: function(){
        //calcular el raton mas cercano
    }
}
const mouse = {
    nombre: "ratoncito",
    signo: "r",
    energy: 15,
    //Spawn en el eje X
    mxS: Math.floor(Math.random()*6),
    //Spawn en el eje y
    myS: Math.floor(Math.random()*6),
    //Creando funciones de movimiento
    movement: function(){
        console.log(`spawnee en el eje X en ${this.mxS} , en el eje Y en ${this.myS}`)
        //Asignamos un numero random a X para que se mueva
        const mx = Math.floor(Math.random()*3);
        console.log(mx);
        //Asignamos el resto a Y para que se mueva en Y tambien
        const my = 3-mx;
        console.log(my);
        //Log para controlar que se este moviendo
        movimientoControl(this.mxS,mx,this.myS,my)
    }
}
mouse.movement()
function movimientoControl(xs, x, ys, y){
    //Controlamos que el spawn sea mayor o igual a 3(Ya que el maximo de movimientos es 2 antes del 5)
        if(xs>=3){
        //Creamos una variable de resto del spawn, ya que el numero maximo de casilleros es 5, simplemente restamos al 5 el xs(Spawn de X)
            var rxs = 5-xs 
        //Si el resto de XS es menor o igual a la X entonces le sumamos
            if (x>rxs){
                x-=rxs;
                xs = 0;
                x-=1;
                if(x>0){xs+=x}
                console.log(xs);
            }
            else{xs +=x}
        }
        else{xs +=x}
        console.log(`Hola!! me movi a ${xs} en el eje X`)
    //Controlamos que el spawn sea mayor o igual a 3(Ya que el maximo de movimientos es 2 antes del 5)
        if(ys>=3){
            var rys = 5-ys 
            if (y>rys){
                y-=rys;
                ys = 0;
                y-=1;
                if(y>0){ys+=y}
                console.log(ys);
            }
            else{ys +=y}
        }
        else{ ys += y}
        console.log(`Hola!! me movi a ${ys} en el eje Y`)
        console.log(`Hola!! Mi nueva posicion!!!! es ${xs} en el eje X, ${ys} en el eje Y`)
}
