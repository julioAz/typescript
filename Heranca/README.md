# Roteiro vídeo sobre Herança

Olá, aqui venho explicar um pouco dos que venho re-aprendendo sobre herança, polimorfismo em POO, uma vez que aprendi apenas em JAVA durante o periodo da faculdade, e convenhamos "nem quem trabalha com Java gosta de Java", então decidi pegar o que venho aplicando para POO usando typescript.

## Usar o arquivo Heranca.ts para explicar o código
`
export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string
    ){}

    getIdade(): number {
        return this.idade
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }

    getCpf(): string {
        return this.cpf
    }
}

class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem de cliente: ' + this.nome + ' ' + this.sobrenome
    }
};


class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem de aluno: ' + this.nome + ' ' + this.sobrenome
    }
};

const pessoa = new Pessoa("Julio", "teste", 33, "000.000.000-00")
const cliente = new Cliente("Julio", "teste", 33, "000.000.000-00")
const aluno = new Aluno("Julio", "teste", 33, "000.000.000-00")

console.log(pessoa, cliente, aluno)
`
Aqui nós temos uma classe chamada Pessoa, que possui como atributos 'nome' do tipo string, 'sobrenome' do tipo string, 'idade' do tipo number (OBS: dependendo da linguagem de programação essa tipagem pode mudar para int, etc) e 'cpf'do tipo string tambem, e dentro dessa classe temos os métodos getIdade(), getNomeCompleto() e getCpf() ambos responsáveis em retornar os valores da classe.

Vemos que podemos extender essa "Super Classe" Pessoa, para outras duas novas classes filhas, sendo elas Cliente e Aluno, e mesmo que não tenhamos definido métodos e atributos a elas, elas já recebem por herança os atributos da classe Pai, ou seja, se eu usar as mesmas propriedade que foram usadas para instanciar uma Pessoa, eu consigo instanciar um Aluno e um Cliente, mas tambem posso ter os prórpios métodos e atributos das classes filhas.


## Ingles

Hello, i'm come here to explained a little about heritance, polymorphism in OOP, last time a have learned OOP in JAVA was in my college period, i come here to share what have studying in OOP using typescript