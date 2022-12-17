import { pedirCarta } from './pedir-carta';
import { acumularPuntos } from './acumular-puntos';
import { crearCarta } from './crear-carta';


/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {Array<String>} deck
 * @param {Number} puntosComputadora 
 * @param {Number} turno 
 * @return {Number} puntosComputadoraActualizados
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosComputadora, turno ) => {

   // Mensaje de error
   if( !deck ) { throw new Error('El deck es necesario'); }
   if( !turno ) { throw new Error('El turno de la computadora (el index) es necesario'); }
   if( puntosMinimos === undefined) { throw new Error('Puntos mínimos son necesarios'); }
   if( puntosComputadora === undefined) { throw new Error('Puntos puntosComputadora a actualizar son necesarios'); }

   const puntosHTMLComputadora = document.querySelectorAll('small')[turno];


   do {

      // El jugador pierde porque superó 21 y se sale
      if( puntosMinimos > 21 ) {
         break;
      }
      
      const carta = pedirCarta(deck);
            
      puntosComputadora = acumularPuntos(carta, puntosComputadora, puntosHTMLComputadora );
      crearCarta(carta, turno);

   } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

   determinarGanador(puntosMinimos, puntosComputadora);

   return puntosComputadora;
};


/**
 * Avisos de victoria, perder o empate
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {Number} puntosComputadora 
 */
const determinarGanador = (puntosMinimos, puntosComputadora) => {
   
   setTimeout( () => { // Se hace un llamado con un tiempo de espera para que primero se termine de renderizar las cartas y luego se muestren las alertas

      if( puntosComputadora === puntosMinimos) {
         alert('Nadie gana :(');
      } else if( puntosMinimos > 21 ) {
         alert('Computadora gana');
      } else if( puntosComputadora > 21 ) {
         alert('Jugador Gana');
      } else {
         alert('Computadora gana');
      }

   }, 50 ); // 10 milisegundos
   
};
