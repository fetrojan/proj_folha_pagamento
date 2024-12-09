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

    registrarHoras(numHoras:number):void {
        this.horasTrabalhadas.push(Number(numHoras));
    }

    calcularTotalHoras():number {
        let totalHoras = 0
        this.horasTrabalhadas.map(hora => {
            totalHoras += hora
        })

        return totalHoras
    }


    calcularSalarioMensal(): number {
        return this.calcularTotalHoras() * this.taxaHoraria;
    }
}

export default Funcionario;