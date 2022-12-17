import { valorCarta } from './valor-carta';

/**
 * Ir juntando los puntos reuniones sea por el jugador o la computadora
 * @param {Array<String>} carta 
 * @param {Number} puntosJugador 
 * @param {HTMLElement} puntosHTMLJugador 
 * @returns 
 */
export const acumularPuntos = ( carta, puntosJugador, puntosHTMLJugador ) => { // Turno: 0 = primer jugador y el último es de la computadora

   if( !carta ){ throw new Error('La carta es un argumento obligatorio '); }

   const nuevosPuntos = puntosJugador + valorCarta(carta);
   puntosHTMLJugador.innerText = nuevosPuntos; // Se modifica el elemento HTML 

   return nuevosPuntos;
   
};