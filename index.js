// / Crie um arquivo typescript com o nome exercicio03.ts
// , com o auxílio do objeto já criado abaixo e utilizando o conhecimento aprendido em propriedades popule valores escolhidos por você para cada propriedade do objeto.
// OBS: No atributo cadeiras popule o array com no mínimo 4 cadeiras e logo após imprima em um console.log() o objeto completo.o:
function preencher(aluno) {
    console.log("Nome: " + aluno.nome, "Matricula: " + aluno.matricula, "Matriculado: " + aluno.ativo, "Cadeiras: " + aluno.cadeiras);
}
;
var aluno;
aluno = {
    nome: "Davi Borges",
    matricula: 47360,
    ativo: true,
    cadeiras: [
        "Pensamento Computacional",
        "Designer de Software",
        "Ingles",
        "Projeto Intregado"
    ]
};
preencher(aluno);
