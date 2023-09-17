import Financiamento from './Financiamento';

export default class Apartamento extends Financiamento {
  constructor(
    valorImovel: number,
    prazoFinanciamentoAnual: number,
    taxaJurosAnual: number,
    private _numeroVagasGaragem: number,
    private _numeroAndar: number,
  ) {
    super(valorImovel, prazoFinanciamentoAnual, taxaJurosAnual);
  }

  calcTotalPagamento(): number {
    for (let i = 1; i <= this.prazoFinanciamentoMensal; i++) {
      this.valorTotalPagamento +=
        this.pagamentoMensal + this.pagamentoMensal * (1 / i / 100);
    }

    return this.valorTotalPagamento;
  }

  mostraDadosFinanciamento(): boolean | void {
    console.log('\n\n#### Dados do Financiamento do Apartamento #### \n');
    console.log('Vagas Estacionamento: ', this.numeroVagasGaragem);
    console.log('Andar: ', this.numeroAndar);
    super.mostraDadosFinanciamento();
  }

  get numeroVagasGaragem() {
    return this._numeroVagasGaragem;
  }

  set numeroVagasGaragem(value) {
    this._numeroVagasGaragem = value;
  }

  get numeroAndar() {
    return this._numeroAndar;
  }

  set numeroAndar(value) {
    this._numeroAndar = value;
  }
}
