let NumeroSecreto = 0;
let Contador = 0;
let listaNumeroGenerado= [];
let NumeroMaximo = 10;

function AsignarTexto(elemento, texto) {
    let Parrafo = document.querySelector(elemento);
    Parrafo.innerHTML = texto;
    return;
}

function GenerarNumeroAleatorio(){
    let NAletorio = Math.floor(Math.random() * NumeroMaximo) + 1;
    console.log(NAletorio);
     console.log(listaNumeroGenerado);

     if(listaNumeroGenerado.length ==NumeroMaximo) {
         alert('Todos los numeros han sido sorteados.')
         document.getElementById('intentar').setAttribute('disabled','true');
         document.getElementById('NumeroIntento').setAttribute('disabled','true');
         AsignarTexto('p',``);
         AsignarTexto('h1','Fin del Juego');
     }
     else if(listaNumeroGenerado.includes(NAletorio)){
         return GenerarNumeroAleatorio();
     }
     else{
         listaNumeroGenerado.push(NAletorio);
         return NAletorio;
     }
    
 }

 function VerificarIntento(){
     let Intento =  parseInt(document.getElementById('NumeroIntento').value);

     if(Intento == NumeroSecreto){
         AsignarTexto('p',`Felicidades adivinaste el numero secreto en ${Contador} ${Contador == 1 ? 'intento' : 'intentos'}`);
         document.getElementById('reiniciar').removeAttribute('disabled');
     }
     else {   
         if(Intento > NumeroSecreto){
             AsignarTexto('p','El numero secreto es menor');
         }
         else{
             AsignarTexto('p','El numero secreto es mayor');
         }
         Contador++;
         limpiarCaja();
     }
   
 }

 function funcionesDeInicio(){
     AsignarTexto('p',`Digite un numero del 1 al ${NumeroMaximo}`);
     AsignarTexto('h1','Adivina el mumero secreto');
     NumeroSecreto = GenerarNumeroAleatorio();
     Contador=1;
 }


 function limpiarCaja(){
     document.getElementById('NumeroIntento').value = '';
 }

 function ReiniciarJuego(){
     funcionesDeInicio();
     limpiarCaja();
     document.getElementById('reiniciar').setAttribute('disabled','true');
 }

 funcionesDeInicio();




// function HolaMundo(){
//     let holamundo = 'Hola mundo';
//     console.log(holamundo);
//     return;
// }
// HolaMundo();


// function Nombre(NombreDigitado){
//     let nombre = NombreDigitado;
//     console.log(nombre);
// }
// Nombre('pedro');


// function numero(valor){
//     let doble = valor*2;
//     console.log(doble);
// }
// numero(10);


// function numero(valor1, valor2, valor3){
//     let suma = valor1 + valor2 + valor3;
//     let promedio = suma / 3;
//     console.log(promedio);
// }
// numero(3.5,5,3.5);


// function NumeroMayor(numero1, numero2){
//     if (numero1 > numero2) {
//         return numero1
//     }
//     else{
//         return numero2
//     }
// }
// let Mayor = NumeroMayor(5055, 150)
// console.log(Mayor);


// function numero(valor){
//     let doble = valor*valor;
//     console.log(doble);
// }
// numero(23);


// function IMC(peso, altura){
//     let metros = altura / 100 
//     let MasaCorporal = peso / (metros * metros);
//     console.log(MasaCorporal);
// }
// IMC(70,180);



// function factorial(numero){
//     contador = 1;
    
//     for (i=1; contador<=numero;)
//     {
//         let resultado = i*contador;
//         i=resultado;
//         contador++;
        
//         if(contador == numero+1){
//             console.log(i);
//         }

//     }

// }

// factorial(3);



// function CambioMoneda(Dolares){
//     let MonedaCop = 4147;
    
//     if(Dolares == 1){
//         console.log(MonedaCop);
//     }
//     else
//     {
//         let resultado = (Dolares * MonedaCop);
//         console.log(resultado);
//     }
// }

// CambioMoneda(1500);




// function MedidasRectangulo(alto, ancho){
//     let Area = alto * ancho;
//     let Perimetro = (alto * 2) + (ancho * 2);
//     console.log(`El area es ${Area}, el perimetro es ${Perimetro}`);
// }

// MedidasRectangulo(63,25);



// function MedidasCirculo(radio){
//     let Area = 3.1416 * (radio*radio);
//     let Perimetro = 3.1416*(radio*2);
//     console.log(`El area es ${Area}, el perimetro es ${Perimetro}`);
// }

// MedidasCirculo(6);




// function TablaDeMultiplicar(numero){

//     for(i=1; i<=10; i++){
//         let resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// }

// TablaDeMultiplicar(2);




//let listaGenerica = [1,2,3,4];
//let LenguajesDeProgramacion=['C','C++','Kotlin','Python'];

//LenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//function MostrarListaLenguajes(){
//    console.log(LenguajesDeProgramacion);   
//}


//function MostrarListaLenguajesInverso(){
  //  console.log(LenguajesDeProgramacion.reverse());   
//}

//function promedio(){
//  let cantidad = listaGenerica.length;
//    let suma = listaGenerica.reduce((a,b) => a+b);
//    let promedio = suma / cantidad;
//    console.log(promedio);
//}

//function MayorYMenor(){

//}


promedio();

MostrarListaLenguajes();

MostrarListaLenguajesInverso();
