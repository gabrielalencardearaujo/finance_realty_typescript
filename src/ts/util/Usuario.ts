// eslint-disable-next-line @typescript-eslint/no-var-requires
const prompt = require('prompt-sync')({ sigint: true });

export default class Usuario {
  startApp(): DadosUser {
    return {
      valorImovel: this.getValorImovel(),
      prazoFinanciamento: this.getPrazoFinanciamento(),
      taxaJurosAnual: this.getTaxaJuros(),
    };
  }

  presentation() {
    console.log('\n\nBem-vindo ao sistema de financiamento de imoveis!\n');
    console.log('Temos tres tipos de financiamento: ');
    console.log('CASA | APARTAMENTO | TERRENO \n');
    console.log('Escolha o melhor para voce!\n\n');
    const escolhaFinanciamento = prompt(
      'Qual o tipo de financiamento? Escolha uma das opções acima: ',
    );

    if (
      !escolhaFinanciamento ||
      (escolhaFinanciamento.toUpperCase() != 'CASA' &&
        escolhaFinanciamento.toUpperCase() != 'APARTAMENTO' &&
        escolhaFinanciamento.toUpperCase() != 'TERRENO')
    )
      return false;

    return escolhaFinanciamento.toUpperCase();
  }

  getValorImovel(): number {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        console.log('\n');
        const value: string = prompt('Qual o valor do Imovel? ');

        const error = this.checkValores(value);
        if (error) throw new Error(`${error}`);

        return Number(value);
      } catch (err) {
        console.log(err + '\n');
        continue;
      }
    }
  }

  getPrazoFinanciamento(): number {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        console.log('\n');
        const value: string = prompt('Qual o prazo do financimento? ');

        const error = this.checkValores(value);
        if (error) throw new Error(`${error}`);

        if (Number(value) > 100) {
          const check: string = prompt(
            `Tem certeza que o prazo de financiamento anual é ${Number(
              value,
            )} anos? S/N  `,
          );

          if (check.toUpperCase() == 'N') continue;
        }

        return Number(value);
      } catch (err) {
        console.log(err + '\n');
        continue;
      }
    }
  }

  getTaxaJuros(): number {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        console.log('\n');
        const value = prompt('Qual a taxa de Juros Anual? ');

        const error = this.checkValores(value);
        if (error) throw new Error(`${error}`);

        if (Number(value) > 10_000)
          throw new Error('Valor da taxa de juros excede o limite maximo permitido.');

        return Number(value);
      } catch (err) {
        console.log(err + '\n');
        continue;
      }
    }
  }

  FinCasa() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        const areaConstruida = prompt('Qual a area construida da casa? ');
        const areaTerreno = prompt('Qual a area do terreno? ');

        const error = this.checkValores(areaConstruida, areaTerreno);
        if (error) throw new Error(`${error}`);

        const desconto = prompt(
          'Deseja aplicar desconto de ate 100 reais nas parcelas do Financiamento? S/N',
        );

        let valorDesconto = 0;
        if (desconto.toUpperCase() == 'S') {
          valorDesconto = Number(prompt('Qual o valor? '));

          if (isNaN(valorDesconto) || valorDesconto < 0 || valorDesconto > 100)
            throw new Error('O desconto deve ser entre 0 e 100 reais.');
        }

        return {
          'Area Construida': Number(areaConstruida),
          'Area Terreno': Number(areaTerreno),
          Desconto: valorDesconto,
        };
      } catch (err) {
        console.log(err);
        continue;
      }
    }
  }

  FinApartamento() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        const vagasCarro = prompt('Quantas vagas no estacionamento? ');
        const numeroAndar = prompt('Qual o numero do Andar?  ');

        const error = this.checkValores(vagasCarro, numeroAndar);
        if (error) throw new Error(`${error}`);

        return {
          'Vagas Estacionamento': Number(vagasCarro),
          'Numero Andar': Number(numeroAndar),
        };
      } catch (err) {
        console.log(err);
        continue;
      }
    }
  }

  checkValores(...valor: string[]): string | null {
    if (!valor || valor.length == 0) return 'Digite um valor valido!';

    for (const i of valor) {
      if (isNaN(Number(i))) return 'O valor não é um número! Insira um valor válido!';

      if (Number(i) < 0) return 'O valor deve ser positivo!';
    }

    return null;
  }

  FinTerreno() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        const zona = prompt('Qual a zona do Terreno, residencial ou comercial?  ');
        console.log(zona);
        if (
          !zona ||
          (zona.toUpperCase() != 'RESIDENCIAL' && zona.toUpperCase() != 'COMERCIAL')
        )
          throw new Error('Digite um dos valores solicitados');

        return zona;
      } catch (err) {
        console.log(err);
        continue;
      }
    }
  }
}
