'use client'

import { IconDevicesPcOff } from "@tabler/icons-react";
import { ButtonLink } from "../shared/button";
import { Url } from "next/dist/shared/lib/router/router";
import { Produto } from "@/core";

export interface ProdutoConsumerProps {
    produto: Produto
}

interface ProdutoNaoEncontradoProps {
    hrefBotaoVoltar?: Url,
    className?: string,
}

export function ProdutoNaoEncontrado(props: ProdutoNaoEncontradoProps) {
    return (
        <div className={`
            flex flex-col justify-center items-center text-violet-300
            ${props.className ?? ''}
        `}>
            <IconDevicesPcOff size={180} stroke={0.5} />
            <span className="text-violet-300 font-light">Produto não encontrado</span>
            {!props.hrefBotaoVoltar && (
                <ButtonLink
                    href={props.hrefBotaoVoltar ?? ''} label="Voltar" className="mt-5"
                />
            )}
        </div>
    )
}