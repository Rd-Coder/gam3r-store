import { Produto } from "@/core";
import { buscarProdutoPorId } from "@/core/produto/constants";

import { ProdutoNaoEncontrado } from "@/components/produto/shared";
import DetalhesProduto from "@/components/produto/detalhes";

export default function PaginaProduto(props: any) {
    const { id } = props.params;
    const produto: Produto | undefined = buscarProdutoPorId(+id);
    
    if (!produto)
        return <ProdutoNaoEncontrado hrefBotaoVoltar='/'/>;

    return (
        <div className="boxed flex flex-col gap-20 py-10">
            <DetalhesProduto produto={produto} />
        </div>
    );
}