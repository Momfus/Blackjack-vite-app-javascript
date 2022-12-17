import _ from 'underscore';

/**
 * Crear nueva baraja (nuevo deck)
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

   // Reporte de errores
   if( !tiposDeCarta ||  tiposDeCarta.length === 0 ){
      throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
   }

   let deck = [];
   // Se hace un ciclo con las cartas que van del 2 al 10)
   for( let i = 2; i <= 10; i++ ) { 

      // Loop de cada tipo de cartas
      for( let tipo of tiposDeCarta ) {
         deck.push( i + tipo );
      }

   }

   // Con las cartas de reyes y As
   for( let tipo of tiposDeCarta ) {

      for( let esp of tiposEspeciales ) {
         deck.push( esp + tipo );
      }

   }


   return _.shuffle( deck );   // Mezclar con la libreria underscore

};

// export default crearDeck; // Lo que se exporta por defecto para usarse en otros sitios y no tener que especificar (se usaria como la libreria de undescore)