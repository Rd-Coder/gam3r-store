import Parcelamento from "@/core/produto/parcelamento";


export default function useParcelamento(valor: number, qtdeParcelas = 12, taxaJuros?: number) {
    return Parcelamento.calcularParcelamento(valor, qtdeParcelas, taxaJuros);
}