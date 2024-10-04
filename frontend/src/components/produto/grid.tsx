'use client'

import { Produto } from "@/core";
import Moeda from "@/core/utils/moeda";
import { IconShoppingCartPlus, IconDevicesPcOff } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import StarReview from "../shared/review";
import { ButtonAction } from "../shared/button";
import { ProdutoNaoEncontrado } from "./shared";


interface GridProdutoProps {
    produtos: Produto[]
    className?: string
}

export function GridProdutos(props: GridProdutoProps) {
    const { produtos } = props;

    if (produtos.length)
        return (
            <div className={`
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
                ${props.className ?? ''}
            `}> {
                produtos.map( (produto) => <ProdutoItem
                    key={produto.id} produto={produto} href={'/produto/'+produto.id}
                    className="relative"
                />)
            } </div>
        );
    else
        return <ProdutoNaoEncontrado className={`flex-1 ${props.className ?? ''}`}/>;
}


interface ProdutoItemProps {
    produto: Produto,
    href?: string,
    className?: string,
}

export function ProdutoItem(props: ProdutoItemProps) {
    const { produto, href='', className='' } = props;

    return <Link
        href={href}
        className={`
            flex flex-col max-w-[350px]
            bg-violet-dark border border-white/10 rounded-xl
            ${className}
        `}
    >
        <StarReview nota={produto.nota} className="absolute self-end m-2.5"/>
        <div className="w-full h-48 relative">
            <Image
                src={produto.imagem} alt="Imagem do Produto" fill
                className="object-contain"
            />
        </div>
        <div className="flex flex-col flex-1 gap-3 p-5 border-t border-white/10">
            <h2 className="text-lg font-semibold">{produto.nome}</h2>
            <p className="self-start text-sm border-b border-dashed relative mb-2">
                {produto.especificacoes.destaque}
            </p>
            <div className="flex flex-col mt-auto">
                <span className="text-sm text-gray-400 line-through">
                    de {Moeda.formatar(produto.precoBase)}
                </span>
                <span className="text-xl font-semibold text-emerald-400">
                    por {Moeda.formatar(produto.precoPromocional)}
                </span>
            </div>
            <ButtonAction
                className="button-2"
                label="Adicionar"
                icon={<IconShoppingCartPlus size={20}/>}
                onHoverOutlined
                onClick={(e)=>{
                    e.preventDefault();
                    console.log('Adicionar ao carrinho');
                }}
            />
        </div>
    </Link>;
}