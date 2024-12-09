import { randomUUID } from "crypto";

class Funcionario {
    id: string;
    nome: string;
    cargo: string;
    taxaHoraria: number;
    horasTrabalhadas: number[];

    constructor(nome: string, cargo: string, taxaHoraria: number) {
        this.id = randomUUID().substring(0, 5)
        this.nome = nome;
        this.cargo = cargo;
        this.taxaHoraria = taxaHoraria;
        this.horasTrabalhadas = [];
    }

    registrarHoras(numHoras:number) {
        this.horasTrabalhadas.push(Number(numHoras));
    }

    calcularSalarioMensal() {
        let salario = this.horasTrabalhadas.reduce((acc, curr) => acc + curr, 0) * this.taxaHoraria;
        return salario;
    }
}

export default Funcionario;