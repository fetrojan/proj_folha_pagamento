import Funcionario from "./classes/Funcionario";
import PromptSync from 'prompt-sync';

const prompt = PromptSync();

const listaFuncionarios: Funcionario[] = [];

function adicionarFuncionario (nome: string, cargo:string, taxaHoraria:number) : void {
    let funcionario = new Funcionario(nome, cargo, taxaHoraria)
    listaFuncionarios.push(funcionario);
    console.log('Funcionário adicionado com sucesso!');
}

function gerarRelatorioPagamento() : void {
    console.log('********RELATÓRIO DE PAGAMENTO********\n');

    listaFuncionarios.map((funcionario) => {
        console.log('Nome: ' + funcionario.nome);
        console.log('Cargo: ' + funcionario.cargo);
        console.log('Horas Trabalhadas: ' + funcionario.calcularTotalHoras());
        console.log('Salário Bruto: R$ ' + funcionario.calcularSalarioMensal());
        console.log('Valor do INSS: R$ ' + funcionario.calcularInss());
        console.log('Salário Líquido: R$ ' + (funcionario.calcularSalarioMensal() - funcionario.calcularInss()));

        console.log('--------------------------------    ');
    });

    console.log('\n***************************************\n');
}

function gerenciarFolhaPagamento() :void {
    while (true) {
        console.log('********GERENCIAMENTO DE FOLHA DE PAGAMENTO********\n');
        console.log('1 - Adicionar Funcionário');
        console.log('2 - Registrar Horas Trabalhadas');
        console.log('3 - Exibir lista de funcionarios');
        console.log('4 - Gerar Relatório de Pagamento');
        console.log('5 - Sair');
        console.log('\n***************************************\n');

        let opcao = Number(prompt('Digite a opção desejada: '));
        switch (opcao) {
            case 1:
                let nome = prompt('Digite o nome do funcionário: ');
                let cargo = prompt('Digite o cargo do funcionário: ');
                let taxaHoraria = Number(prompt('Digite a taxa horária do funcionário: '));
                adicionarFuncionario (nome, cargo, taxaHoraria)
                break;
            case 2:
                let idFuncionario = prompt('Digite o id do funcionário: ');
                let numHoras = Number(prompt('Digite o número de horas trabalhadas: '));

                let funcionarioExiste = false

                listaFuncionarios.map(funcionario => {
                    if(funcionario.id === idFuncionario) {
                        funcionario.registrarHoras(numHoras);
                        funcionarioExiste = true;
                    }
                })
                if(!funcionarioExiste) {
                    console.log(`Funcionário com id ${idFuncionario} não encontrado`);
                }
                break;
            case 3:
                listaFuncionarios.map(funcionario => {
                    funcionario.exibirInformacoes();
                })
                break;
            case 4:
                gerarRelatorioPagamento();
                break;
            case 5:
                console.log('Saindo do gerenciamento de folha de pagamento...');
                return;
            default:
                console.log('Opção inválida');
        }
    }
}

gerenciarFolhaPagamento();

