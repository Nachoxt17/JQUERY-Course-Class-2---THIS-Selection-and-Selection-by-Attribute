/** La THIS Selection(Literalmente Significa "Selección ESTO") sirve para que dentro de una Función se llame al mismo Elemento al que se está Ejecutando sin Escribir De Nuevo el Nombre del Mismo, esto simplifica
 * la Escritura de Código a gran escala y hace más fácil poder Copiar la Función si se lo necesita. La THIS Selection Sólo se puede usar en Funciones Normales, No Funciona en Funciones Flecha del JS ES6, como
 * veremos en los Ejemplos a Continuación:_*/

 /**1er EJEMPLO:_ Aquí se toma a la Clase CSS ".boxes1" y se le Indica que al Hacerle Click a cualquier Elemento que tenga esa Clase CSS el Color de Fondo del Mismo Cambie a Verde:_*/
$(".boxes1").click(function(){
    $(this).css({"background":"green"});
    /** Acá Arriba se Escribe "this" que hace Referencia al Elemento al cual se le Ejecuta la Función para no tener que volver a escribir ".boxes1".*/
});

/** 2do EJEMPLO:_ Aquí se hace lo Mismo que en la Función de el Ejemplo Anterior, Al hacerle Click a cualquier Elemento con la Clase CSS ".boxes2" su Color de Fondo cambia a Rosado.
 * +-La Diferencia es que Esta Función es una Función Flecha de JS ES6, en la que la THIS Selection NO FUNCIONA:
*/
$(".boxes2").click(() => $(".boxes2").css({"background":"pink"}));

/** La Selección por Atributos(Selection by attributes) es Similar a la Selección por por Clase CSS o por ID, pero escribiendo entre Corchetes Cuadrados un Atributo del Elemento; en este caso es "[type='text']".*/
$("#button").click(() => $("[type='text']").css({"background":"red"}));