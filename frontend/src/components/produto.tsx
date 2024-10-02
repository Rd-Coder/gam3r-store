'use client'

import { Produto } from "@/core";
import Moeda from "@/core/utils/moeda";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import StarReview from "./shared/review";

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto, href='', className='' } = props;

    return <Link
        href={href}
        className={`
            flex flex-col max-w-[350px]
            bg-violet-dark border border-white/10 rounded-xl
            ${className}
        `}
    >
        <StarReview nota={produto.nota} className="absolute self-end m-1.5"/>
        <div className="w-full h-48 relative">
            <Image
                src={produto.imagem} alt="Imagem do Produto" fill
                className="object-contain"
            />
        </div>
        <div className="flex flex-col flex-1 gap-3 p-5 border-t border-white/10">
            <h2 className="text-lg font-semibold">{produto.nome}</h2>
            <p className="text-sm border-b border-dashed mb-2">{produto.especificacoes.destaque}</p>
            <div className="flex flex-col mt-auto">
                <span className="text-sm text-gray-400 line-through">
                    de {Moeda.formatar(produto.precoBase)}
                </span>
                <span className="text-xl font-semibold text-emerald-400">
                    por {Moeda.formatar(produto.precoPromocional)}
                </span>
            </div>
            <button
                className="
                flex flex-row justify-center items-center gap-2 h-8
                rounded-full bg-violet-700 border-emerald-500 hover:border-2
                "
                onClick={(e)=>{
                    e.preventDefault();
                    console.log('Adicionar ao carrinho');
                }}
            >
                <IconShoppingCartPlus size={20}/>
                <span>Adicionar</span>
            </button>
        </div>
    </Link>;
}

interface ProdutoItemProps {
    produto: Produto,
    href?: string,
    className?: string,
}