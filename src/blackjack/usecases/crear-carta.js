
/**
 * Añadir la carta en el html
 * @param {String} carta 
 * @param {Number} turno
 */
export const crearCarta = (carta, turno) => {

   if( !carta ){ throw new Error('La carta es un argumento obligatorio '); }
   
   // Insertar la carta en el DOM --> Guía de elemento <img class="carta" src="assets/cartas/3C.png"> 
   const imgCarta = document.createElement('img');
   const divCartaJugadorHTML =  document.querySelectorAll('.divCartas')[turno];
   imgCarta.src = `assets/cartas/${carta}.png`; // Añadir la fuente en el html
   imgCarta.classList.add('carta'); // Añadir la clase en el html
   
   divCartaJugadorHTML.append(imgCarta);

};
