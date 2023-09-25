import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import ConvertData from './ConvertData';

export default class ModelDB implements ModelDBProtocol {
  private path = resolve();
  public database: string = 'nao fui alterado';

  escreverArquivo(arr: InterfaceFinanciamento[]): boolean {
    try {
      writeFile(`${this.path}/database/data.json`, ConvertData.arrayToJson(arr), {
        encoding: 'utf-8',
        flag: 'w+',
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async lerArquivo() {
    try {
      const conteudo = readFileSync(`${this.path}/database/data.json`, 'utf8');
      this.database = JSON.parse(conteudo);
      return JSON.parse(conteudo);
    } catch (e) {
      console.log(e);
    }
  }
}

const db = new ModelDB();
db.lerArquivo();
console.log(db.database);
