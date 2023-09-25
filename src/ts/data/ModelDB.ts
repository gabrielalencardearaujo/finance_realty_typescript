import { writeFile, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import ConvertData from './ConvertData';

export default class ModelDB implements ModelDBProtocol {
  private path = resolve();
  public database: string = '';

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
    const filePath = `${this.path}/database/data.json`;
    try {
      return await readFile(filePath, { encoding: 'utf-8' });
    } catch (err) {
      console.error(err);
    }
  }
}

