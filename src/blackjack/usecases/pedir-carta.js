
/**
 * Esta función permite tomar una carta
 * @param {Array<String>} deck Arreglo de string con los números de cartas y tipos
 * @returns {String} El número y tipo de carta en un solo string
 */
export const pedirCarta = (deck) => {

   // Reporte de errores
   if( !deck ) {
      throw new Error('El deck es obligatorio como un arreglo de string');
   }
   if( deck.length === 0 ) { // No puede tomar más cartas
      throw new Error('No hay cartas en el deck'); // Muestra error y hacer return del mismo (por eso no hace falta hacer un return para cortar el código)
   }

   // console.log(deck);

   return  deck.pop();
};
