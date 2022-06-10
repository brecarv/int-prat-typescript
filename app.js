"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "Engenheira de Software",
};
pessoa.idade = 28;
const joao = {
    nome: "Joao",
    idade: 25,
    profissao: "Pedreiro",
};
const fernanda = {
    nome: "Fernanda",
    idade: 23,
    profissao: "Engenheira de Software",
};
var Profissao;
(function (Profissao) {
    Profissao["PROFESSOR"] = "Professor(a)";
    Profissao["ENGENHEIRO"] = "Engenheiro(a) de Software";
    Profissao["PEDREIRO"] = "Pedreiro";
    Profissao["PINTOR"] = "Pintor";
    Profissao["POLICIAL"] = "Policial";
})(Profissao || (Profissao = {}));
const felipe = {
    nome: "Felipe",
    idade: 29,
    profissao: Profissao.ENGENHEIRO,
};
const joana = {
    nome: "Joana",
    idade: 27,
    profissao: Profissao.ENGENHEIRO,
};
const maria = {
    nome: "Maria",
    matricula: 10001,
    idade: 28,
    disciplinas: ["ED I", "ED II", "PDS - WEB"],
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(maria.disciplinas);
