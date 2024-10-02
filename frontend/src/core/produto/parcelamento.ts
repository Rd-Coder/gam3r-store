import { QTDE_MAX_PARCELAS, TAXA_JUROS_MENSAL } from './constants'
import Moeda from '../utils/moeda';

export default class Parcelamento {
    
    private constructor (    
        public valorTotal: number,
        public valorParcela: number,
        public qtdeParcelas: number,
        public taxaJuros: number
    ) {}

    static calcularParcelamento(
        valor: number,
        qtdeParcelas: number = QTDE_MAX_PARCELAS,
        taxaJuros: number = TAXA_JUROS_MENSAL
    ): Parcelamento {
        if (qtdeParcelas < 2 || qtdeParcelas > QTDE_MAX_PARCELAS) {
            throw new Error(`Quantidade de parcelas deve ser entre 2 e ${QTDE_MAX_PARCELAS}`)
        }

        const totalComJuros = Moeda.calcularJurosCompostos(valor, taxaJuros, qtdeParcelas)

        return {
            valorParcela: Moeda.comDuasCasasDecimais(totalComJuros / qtdeParcelas),
            valorTotal: Moeda.comDuasCasasDecimais(totalComJuros),
            qtdeParcelas,
            taxaJuros,
        }
    }
}
