/* eslint-disable */
import Apartamento from '../model/Apartamento';
import Casa from '../model/Casa';
import Terreno from '../model/Terreno';
import Usuario from '../util/Usuario';

const prompt = require('prompt-sync')({ sigint : true }) ;

class Main {
  private arrayFinanciamento: DadosUser[];
  constructor() {
    this.startApp();
  }

  startApp() {
    while(true) {
      const user = new Usuario();
      const escolhaFinanciamento = user.presentation();

      if(!escolhaFinanciamento) continue;

      const dadosUser: DadosUser = user.startApp();

      console.log(`\nFinanciamento ${escolhaFinanciamento.toUpperCase()}:\n`)

      switch(escolhaFinanciamento.toUpperCase()) {
        case 'CASA':
          const infoCasa = user.FinCasa();

          const casa = new Casa(dadosUser.valorImovel, dadosUser.prazoFinanciamento, dadosUser.taxaJurosAnual, infoCasa['Area Construida'], infoCasa['Area Terreno']);

          console.log(casa.verificaDesconto(infoCasa.Desconto));
          casa.mostraDadosFinanciamento();
          break;
        case 'APARTAMENTO':
          const finApartamento = user.FinApartamento();

          const apartamento = new Apartamento(dadosUser.valorImovel, dadosUser.prazoFinanciamento, dadosUser.taxaJurosAnual, finApartamento['Vagas Estacionamento'], finApartamento['Numero Andar']);

          apartamento.mostraDadosFinanciamento();
          break;
        case 'TERRENO':
          const zona = user.FinTerreno();

          const terreno = new Terreno(dadosUser.valorImovel, dadosUser.prazoFinanciamento, dadosUser.taxaJurosAnual, zona);
          terreno.mostraDadosFinanciamento();
          break;

        default:
          throw new Error('Algo inesperado aconteceu aqui. Tente novamente.')
          continue;
      }
      console.log('\n\n');
      const continuar = prompt('Deseja fazer outro financiamento? S/N ')

      if(continuar.toUpperCase() == 'S') continue;

      break;
    }
  }
}

new Main();
