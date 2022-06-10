// union type
//https://www.becomebetterprogrammer.com/typescript-union-types-defining-multiple-types/
// function somarValores(input1: number | string, input2: number | string) {
//   if (typeof input1 === "string" || typeof input2 === "string") {
//     return input1.toString() + input2.toString();
//   } else {
//     return input1 + input2;
//   }
// }

// console.log(somarValores(1, 5));
// console.log(somarValores("Hello", ", darkness"));
// console.log(somarValores("1", 5));

// defining return type
function somarValoreNumericos(numero1: number, numero2: number): number {
  return numero1 + numero2;
}

//console.log(somarValoreNumericos(3, 3));

function printarValoreNumericos(numero1: number, numero2: number): void {
  console.log(numero1 + numero2);
}

// callback
function somarValoreNumericosETratar(
  numero1: number,
  numero2: number,
  callback: (numero: number) => number
): number {
  let resultado = numero1 + numero2;
  return callback(resultado);
}

function aoQuadrado(numero: number): number {
  return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {
  return numero / numero;
}

console.log(somarValoreNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoreNumericosETratar(1, 3, dividirPorEleMesmo));
