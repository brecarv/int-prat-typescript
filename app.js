"use strict";
let valorAny;
valorAny = 3;
valorAny = "Hello World!";
valorAny = true;
let valorString = "teste";
valorString = valorAny;
let valorString2 = "teste2";
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString("valorString", "valorString2");
