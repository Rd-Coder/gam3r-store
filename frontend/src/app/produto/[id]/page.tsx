import { Produto } from "@/core";
import { buscarProdutoPorId } from "@/core/produto/constants";

import { ProdutoNaoEncontrado } from "@/components/produto/shared";

export default function PaginaProduto(props: any) {
    const { id } = props.params;
    const produto: Produto | undefined = buscarProdutoPorId(+id);
    
    if (!produto)
        return <ProdutoNaoEncontrado hrefBotaoVoltar='/'/>;

    return (
        <div>Produto: {produto.nome} </div>
    );
}