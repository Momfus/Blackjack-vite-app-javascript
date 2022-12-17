// Dar valor a cada carta
/**
 * 
 * @param {String} carta La carta representada en un string por número y tipo
 * @returns {Number} El valor númerico de la carta que representa el string dado
 */
export const valorCarta = ( carta ) => {

   // Reporte de errores
   if( !carta ) {
      throw new Error('La carta es obligatorio');
   }

   const valor = carta.substring(0, carta.length - 1); // Desde el primer númer hasta el último caracter que es la letra que simboliza
   
   // if( isNaN(valor) ) { // Se evalua lo que esta en paréntesis y se fija si no es un número

   //    // no es un número  
   //    puntos = ( valor === 'A') ? 11: 10; 

   // } else {

   //    // es un número
   //    puntos = parseInt(valor);
   // }

   // Versión reducida con if ternario.
   return ( !isNaN(valor )) ? parseInt(valor): // Caso que sea un número
            ( valor === 'A') ? 11: 10; // Caso que sea un Rey o As

};
