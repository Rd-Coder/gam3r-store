export default class Moeda {

    private constructor() {}

    static formatar(
        valor: number,
        localizacao: string = 'pt-BR',
        moeda: string = 'BRL',
    ): string {
        return (valor ?? 0).toLocaleString(localizacao, {
            style: 'currency',
            currency: moeda,
        })
    }

    static calcularJurosCompostos(valorTotal: number, taxaMensal: number, qtdeParcelas: number) {
        return valorTotal * Math.pow(1 + taxaMensal, qtdeParcelas)
    }
    
    static comDuasCasasDecimais(valor: number): number {
        return Math.round(valor * 100) / 100
    }

}

