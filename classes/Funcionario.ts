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

    exibirInformacoes():void {
        console.log(`
            --------------------------
            ID: ${this.id}
            Nome: ${this.nome}
            Cargo: ${this.cargo}
            Horas Trabalhadas: ${this.horasTrabalhadas}`)
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

    calcularInss() :number {
        let salario = this.calcularSalarioMensal();
        let inss = 0;
    
        if (salario > 4000.04) {
            inss = salario * 14 / 100;
        } else if (salario > 2666.69) {
            inss = salario * 12 / 100;
        } else if (salario > 1412.01) {
            inss = salario * 9 / 100;
        } else {
            inss = salario * 7.5 / 100;
        }
    
        if (inss > 908.85) {
            inss = 908.85;
        }
    
        return inss;
    }
}

export default Funcionario;