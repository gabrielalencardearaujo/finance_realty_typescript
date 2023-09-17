export default class Financiamento implements InterfaceFinanciamento {
  private _prazoFinanciamentoMensal: number;
  private _pagamentoMensal: number;
  private _valorTotalPagamento: number = 0;

  constructor(
    private _valorImovel: number,
    private _prazoFinanciamentoAnual: number,
    private _taxaJurosAnual: number,
  ) {
    this._prazoFinanciamentoMensal = this.prazoFinanciamentoAnual * 12;
    this.calcPagamentoMensal();
  }

  calcPagamentoMensal() {
    this.pagamentoMensal =
      (this.valorImovel / this.prazoFinanciamentoMensal) * (1 + this.taxaJurosAnual / 12);
  }

  calcTotalPagamento(): number {
    this.valorTotalPagamento = this.pagamentoMensal * this.prazoFinanciamentoMensal;
    return this.valorTotalPagamento;
  }

  mostraDadosFinanciamento(): boolean | void {
    if (this.checkErrors()) {
      console.log(
        'Infelizmente nao conseguimos calcular o financiamento, tente novamente!',
      );
      return;
    }
    console.log('Valor do imovel: ', this.valorImovel);
    console.log('Prazo Financiamento em Anos: ', this.prazoFinanciamentoAnual.toFixed(2));
    console.log('Valor total do Pagamento: ', this.calcTotalPagamento().toFixed(2));
    console.log('Valor base das Parcelas: ', this.pagamentoMensal.toFixed(2));
  }

  checkErrors(): boolean {
    if (
      isNaN(Number(this.valorImovel)) ||
      isNaN(Number(this.prazoFinanciamentoAnual)) ||
      isNaN(Number(this.calcTotalPagamento())) ||
      isNaN(Number(this.pagamentoMensal))
    )
      return true;
    else return false;
  }

  get valorImovel(): number {
    return this._valorImovel;
  }

  get prazoFinanciamentoAnual(): number {
    return this._prazoFinanciamentoAnual;
  }

  get taxaJurosAnual(): number {
    return this._taxaJurosAnual;
  }

  get valorTotalPagamento(): number {
    return this._valorTotalPagamento;
  }

  set valorTotalPagamento(value) {
    this._valorTotalPagamento = value;
  }

  get pagamentoMensal() {
    return this._pagamentoMensal;
  }

  get prazoFinanciamentoMensal() {
    return this._prazoFinanciamentoMensal;
  }

  set pagamentoMensal(value) {
    this._pagamentoMensal = value;
  }

  set valorImovel(value: number) {
    this._valorImovel = value;
  }

  set prazoFinanciamentoAnual(value: number) {
    this._prazoFinanciamentoAnual = value;
  }

  set taxaJurosAnual(value: number) {
    this._taxaJurosAnual = value;
  }
}
