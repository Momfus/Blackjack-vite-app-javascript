/**
 * Guía de cartas:
 * 
 * 2C = Two of Clubs (tréboles)
 * 2D = Two of Diamons (tréboles)
 * 2H = Two of Hearts (tréboles)
 * 2S = Two of Spades (tréboles)
 * 
 */

// Módulo con función anónima auto invocada sin referencia para usar this por lo que está adentro no puedo acceder
/*

   NOTA: Sobre el patrón módulo
   El patrón módulo en JavaScript es una forma de organizar y estructurar el código de una aplicación. Permite a los desarrolladores escribir código que sea más fácil de mantener y entender, 
   así como de reutilizar en diferentes partes de la aplicación.

   El patrón módulo también aumenta la seguridad y la privacidad del código, ya que permite que las variables y funciones sean declaradas como privadas, lo que significa que solo pueden
   ser accedidas y utilizadas por el código dentro del módulo. Esto reduce la posibilidad de conflictos o errores causados por el acceso accidental o intencional a variables o funciones
   desde otras partes de la aplicación.

   En resumen, el patrón módulo en JavaScript es una forma de organizar y estructurar el código de una aplicación de manera más eficiente, mantenible y segura.

*/

import _ from 'underscore';
import { crearDeck as CrearNuevoDeck, pedirCarta, acumularPuntos, turnoComputadora, crearCarta} from './usecases';

// Declaraciones generales
let deck          = [];
const tipos       = ['C', 'D', 'H', 'S'],
      especiales  = ['A', 'J', 'Q', 'K'];

let puntosJugadores = []; // El último jugador será siempre la computadora

// Referencias al HTML
const btnPedir = document.querySelector('#btnPedir'), // Referencia por id con el selector se hace con "#", class de css con "." y sin esos es un tag lo que busca
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
      // divCartasJugador = document.querySelector('#jugador-cartas'), // Usado en duro en anteriores versiones
      // divCartasComputadora = document.querySelector('#computadora-cartas'), // Usado en duro en anteriores versiones
      puntosHTML = document.querySelectorAll('small');


/** 
* Funciones
* 
*/

// Esta función inicializa el juego
const inicializarJuego = ( numJugadores = 2) => { 
   
   deck = CrearNuevoDeck(tipos, especiales);

   puntosJugadores = [];
   for( let i = 0; i < numJugadores; i++ ) {
      puntosJugadores.push(0);
   }

   // Reiniciar DOM
   puntosHTML.forEach( elem => elem.innerText = 0);
   divCartasJugadores.forEach( elem => elem.innerHTML = '' );

   btnPedir.disabled = false;
   btnDetener.disabled = false;


};





/** 
* Eventos
* 
*/
btnPedir.addEventListener('click', () => { // Callback -> función que se manda como argumento, puede ser una tradicional o de flecha

   const carta = pedirCarta(deck);

   puntosJugadores[0] = acumularPuntos( carta, puntosJugadores[0], puntosHTML[0] );
   
   const puntosJugador = puntosJugadores[0];

   crearCarta(carta, 0);
   
   const turnoPC = puntosJugadores.length - 1;

   // Controlar si ganó o perdió
   if( puntosJugador > 21) {

      // Perder y bloquear el úso del botón
      console.warn('Has perdido');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      puntosJugadores[turnoPC] = turnoComputadora(puntosJugador, deck, puntosJugadores[turnoPC], turnoPC);

   } else if ( puntosJugador === 21 ) {
      // Gana con 21 justo
      console.warn('21, ¡Genial!');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      puntosJugadores[turnoPC] = turnoComputadora(puntosJugador, deck, puntosJugadores[turnoPC], turnoPC);
   }

});

// Se detiene para jugar con las cartas que tiene el jugador y juega la computadora
btnDetener.addEventListener('click', () => {

   btnPedir.disabled = true;
   btnDetener.disabled = true;
   const turnoPC = puntosJugadores.length - 1;
   
   puntosJugadores[turnoPC] = turnoComputadora( puntosJugadores[0], deck, puntosJugadores[turnoPC], turnoPC);
});

// Iniciar/reiniciar juego
btnNuevo.addEventListener('click', () => {

   console.clear();
   inicializarJuego();

});
