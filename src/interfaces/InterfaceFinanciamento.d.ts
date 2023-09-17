interface InterfaceFinanciamento {
  valorImovel: number;
  prazoFinanciamentoAnual: number;
  taxaJurosAnual: number;
  calcPagamentoMensal: () => void;
  calcTotalPagamento: () => number;
  mostraDadosFinanciamento: () => void;
}
