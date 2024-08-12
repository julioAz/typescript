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
}


class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem de aluno: ' + this.nome + ' ' + this.sobrenome
    }
}

const pessoa = new Pessoa('Julio', 'teste', 33, '000.000.000-00')
const cliente = new Cliente('Julio', 'teste', 33, '000.000.000-00')
const aluno = new Aluno('Julio', 'teste', 33, '000.000.000-00')

console.log(pessoa, cliente, aluno)