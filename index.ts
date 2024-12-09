const prompt = require("prompt-sync")();

const listaFuncionarios = [];

function adicionarFuncionario(id, nome, cargo, taxaHoraria) {
    let funcionario = {
        id: id,
        nome,
        cargo: cargo,
        taxaHoraria: taxaHoraria,
        horasTrabalhadas: []
    };
    listaFuncionarios.push(funcionario);
}





function calcularInss(funcionario) {
    let salario = calcularSalarioMensal(funcionario);
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

function calcularHorasTrabalhadas(funcionario) {
    let horasTrabalhadas = funcionario.horasTrabalhadas.reduce((acc, curr) => acc + curr, 0);
    return horasTrabalhadas;
}

function gerarRelatorioPagamento() {
    console.log('********RELATÓRIO DE PAGAMENTO********\n');

    listaFuncionarios.map((funcionario) => {
        console.log('Nome: ' + funcionario.nome);
        console.log('Cargo: ' + funcionario.cargo);
        console.log('Horas Trabalhadas: ' + calcularHorasTrabalhadas(funcionario));
        console.log('Salário Bruto: R$ ' + calcularSalarioMensal(funcionario));
        console.log('Valor do INSS: R$ ' + calcularInss(funcionario));
        console.log('Salário Líquido: R$ ' + (calcularSalarioMensal(funcionario) - calcularInss(funcionario)));

        console.log('--------------------------------    ');
    });

    console.log('\n***************************************\n');
}

function gerenciarFolhaPagamento() {
    while (true) {
        console.log('********GERENCIAMENTO DE FOLHA DE PAGAMENTO********\n');
        console.log('1 - Adicionar Funcionário');
        console.log('2 - Registrar Horas Trabalhadas');
        console.log('3 - Gerar Relatório de Pagamento');
        console.log('4 - Sair');
        console.log('\n***************************************\n');

        let opcao = Number(prompt('Digite a opção desejada: '));
        switch (opcao) {
            case 1:
                let id = prompt('Digite o id do funcionário: ');
                let nome = prompt('Digite o nome do funcionário: ');
                let cargo = prompt('Digite o cargo do funcionário: ');
                let taxaHoraria = Number(prompt('Digite a taxa horária do funcionário: '));
                adicionarFuncionario(id, nome, cargo, taxaHoraria)
                break;
            case 2:
                let idFuncionario = prompt('Digite o id do funcionário: ');
                let numHoras = Number(prompt('Digite o número de horas trabalhadas: '));
                registrarHoras(idFuncionario, numHoras);
                break;
            case 3:
                gerarRelatorioPagamento();
                break;
            case 4:
                console.log('Saindo do gerenciamento de folha de pagamento...');
                return;
            default:
                console.log('Opção inválida');
        }
    }
}

gerenciarFolhaPagamento();

