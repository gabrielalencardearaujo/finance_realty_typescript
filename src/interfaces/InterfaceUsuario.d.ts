interface InterfaceUsuario {
  startApp: () => void;
  getValorImovel: () => number;
  getPrazoFinanciamento: () => number;
  getTaxaJuros: () => number;
  mostraDados: () => void;
}

type DadosUser = {
  valorImovel: number;
  prazoFinanciamento: number;
  taxaJurosAnual: number;
};
