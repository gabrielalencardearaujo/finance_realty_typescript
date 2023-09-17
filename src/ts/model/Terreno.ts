import Financiamento from './Financiamento';

export default class Terreno extends Financiamento {
  constructor(
    valorImovel: number,
    prazoFinanciamentoAnual: number,
    taxaJurosAnual: number,
    private tipoZona: string,
  ) {
    super(valorImovel, prazoFinanciamentoAnual, taxaJurosAnual);
  }

  calcTotalPagamento(): number {
    this.valorTotalPagamento += this.valorTotalPagamento * 0.002;
    return this.valorTotalPagamento;
  }

  mostraDadosFinanciamento(): boolean | void {
    console.log('\n\n#### Dados do Financiamento do Terreno #### \n');
    console.log(
      `Zona: ${this.tipoZona.charAt(0).toUpperCase() + this.tipoZona.slice(1)}`,
    );
    super.mostraDadosFinanciamento();
  }
}
