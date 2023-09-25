/* eslint-disable */
import { resolve } from 'node:path';
import ModelDB from '../data/ModelDB';
import Apartamento from '../model/Apartamento';
import Casa from '../model/Casa';
import Terreno from '../model/Terreno';
import Usuario from '../util/Usuario';

const prompt = require('prompt-sync')({ sigint : true }) ;

class Main {
  private arrayFinanciamento: InterfaceFinanciamento[] = [];

  constructor() {
    this.startApp();
  }

  startApp() {
    const database = new ModelDB();
  
    this.novosFinanciamentos();
    database.escreverArquivo(this.arrayFinanciamento);
  }

  novosFinanciamentos() {
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

          this.arrayFinanciamento.push(casa);

          console.log(casa.verificaDesconto(infoCasa.Desconto));
          casa.mostraDadosFinanciamento();
          break;
        case 'APARTAMENTO':
          const finApartamento = user.FinApartamento();

          const apartamento = new Apartamento(dadosUser.valorImovel, dadosUser.prazoFinanciamento, dadosUser.taxaJurosAnual, finApartamento['Vagas Estacionamento'], finApartamento['Numero Andar']);

          this.arrayFinanciamento.push(apartamento);

          apartamento.mostraDadosFinanciamento();
          break;
        case 'TERRENO':
          const zona = user.FinTerreno();

          const terreno = new Terreno(dadosUser.valorImovel, dadosUser.prazoFinanciamento, dadosUser.taxaJurosAnual, zona);

          this.arrayFinanciamento.push(terreno);

          terreno.mostraDadosFinanciamento();
          break;

        default:
          throw new Error('Algo inesperado aconteceu aqui. Tente novamente.')
      }
      const continuar = prompt('Deseja fazer outro financiamento? S/N ')

      if(continuar.toUpperCase() == 'S') continue;

      break;
    }
  }
}

new Main();
