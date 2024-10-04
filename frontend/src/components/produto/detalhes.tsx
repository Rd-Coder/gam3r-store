'use client'

import { IconCreditCard, IconShoppingCart, IconTag } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Tag from "../shared/tag";
import { ProdutoConsumerProps } from "./shared";
import { ButtonAction } from "../shared/button";
import useParcelamento from "@/data/hooks/parcelamento";
import Moeda from "@/core/utils/moeda";

export default function DetalhesProduto(props: ProdutoConsumerProps) {
    const { produto } = props;
    return (
        <div className="flex flex-col gap-10">
            <TituloProduto produto={produto} />
            <InformacoesProduto produto={produto} />
            <BannerCompra produto={produto} />
        </div>
    );
}

function TituloProduto(props: ProdutoConsumerProps) {
    const { produto } = props;
    return (
        <div className="flex flex-col">
            <div className="text-2xl">{produto.nome}</div>
            <div className="font-light text-zinc-400">{produto.descricao}</div>
        </div>
    )
}

function InformacoesProduto(props: ProdutoConsumerProps) {
    const { produto } = props
    return produto ? (
        <div className="flex items-center bg-violet-dark rounded-xl p-5">
            <div className="flex-1 relative flex justify-center h-96">
                <Image
                    src={produto.imagem!}
                    alt="Imagem do Produto"
                    fill
                    className="object-cover p-7"
                />
            </div>
            <Especificacoes produto={produto!} />
        </div>
    ) : null
}


function BannerCompra(props: ProdutoConsumerProps) {
    const router = useRouter();
    const { produto } = props
    // const { adicionarItem } = useCarrinho()
    const parcelamento = useParcelamento(produto.precoPromocional);

    return (
        <div className="flex justify-between">
            <div className="flex flex-col border-r border-zinc-500 pr-5">
                <div className="line-through text-zinc-400">de R$ {produto?.precoBase}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-base text-zinc-300">por</span>{' '}
                    <span className="text-emerald-500">R$ {produto?.precoPromocional}</span>{' '}
                    <span className="text-base text-zinc-300">à vista</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
                <span className="text-base text-zinc-300">{parcelamento.qtdeParcelas}x de</span>
                {Moeda.formatar(parcelamento.valorParcela)}
            </div>
            <div className="flex gap-2 items-center">
                <ButtonAction
                    label="Adicionar"
                    icon={<IconShoppingCart size={20} />}
                    className="     bg-pink-600"
                    // onClick={() => adicionarItem(produto)}
                />
                <ButtonAction
                    label="Comprar"
                    icon={<IconCreditCard size={20} />}
                    className="bg-violet-700"
                    // onClick={() => adicionarItem(produto)}
                />
            </div>
        </div>
    )
}

function Especificacoes(props: ProdutoConsumerProps) {
    const { produto } = props
    return (
        <div className="flex-1 flex flex-col gap-1">
            <Tag
                label={produto.especificacoes.destaque!}
                icone={<IconTag size={15}/>} outlined
                className="flex self-start mb-3"
            />
            {produto.especificacoes 
                && Object.keys(produto.especificacoes)
                    .filter((k) => k !== 'destaque')
                    .map((chave) => (
                        <div key={chave} className="flex gap-1">
                            <span className="p-2 w-1/3 bg-white/5 rounded">{chave}</span>
                            <span className="p-2 w-2/3 bg-white/5 rounded">
                                {produto.especificacoes[chave]}
                            </span>
                        </div>
                    ))
            }
        </div>
    );
}