/**
 * En el mundo del espionaje, se utiliza un lenguaje de codificación con símbolos que realizan operaciones matemáticas simples.

Tu tarea es crear un mini compilador que interprete y ejecute programas escritos en este lenguaje de símbolos.

Las operaciones del lenguaje son las siguientes:

"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
El valor numérico inicial es 0 y las operaciones deben aplicarse en el orden en que aparecen en la cadena de símbolos.

** Ejemplos de entrada: **
Entrada: "##*&"
Salida esperada: "4"
Explicación: Incrementa (1), incrementa (2), multiplica (4), imprime (4).

Entrada: "&##&*&@&"
Salida esperada: "0243"
Explicación: Imprime (0), incrementa (1), incrementa (2), imprime (2), multiplica (4), imprime (4), decrementa (3), imprime (3).

** Tu desafío: **
Desarrolla un mini compilador que tome una cadena de texto y devuelva otra cadena de texto con el resultado de ejecutar el programa.

 */
console.time('Challenge 02');
const MESSAGE = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';

function decode(message){
  message.split("").reduce((acc,letter)=>{
    if(letter === '#'){
      acc++;
    } else if(letter === '@'){
      acc--;
    } else if(letter === '*'){
      acc*=acc;
    } else if(letter === '&'){
      console.log(acc);
    }
    return acc;
  },0)
}

decode(MESSAGE);//Respuesta: 024899455
console.timeEnd('Challenge 02');