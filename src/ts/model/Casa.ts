import Financiamento from './Financiamento';

export default class Casa extends Financiamento {
  constructor(
    valorImovel: number,
    prazoFinanciamentoAnual: number,
    taxaJurosAnual: number,
    private _areaConstruida: number,
    private _areaTerreno: number,
  ) {
    super(valorImovel, prazoFinanciamentoAnual, taxaJurosAnual);
  }

  mostraDadosFinanciamento(): boolean | void {
    console.log('\n\n#### Dados do Financiamento da Casa #### \n');
    console.log('Area Construida: ', this.areaConstruida);
    console.log('Area do Terreno: ', this.areaTerreno);
    super.mostraDadosFinanciamento();
  }

  verificaDesconto(desconto: number) {
    if (desconto > this.pagamentoMensal)
      return 'Desconto ultrapassou o valor da mensalidade';

    this.pagamentoMensal = this.pagamentoMensal - desconto;
  }

  get areaConstruida() {
    return this._areaConstruida;
  }

  get areaTerreno() {
    return this._areaTerreno;
  }
}
