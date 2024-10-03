import Link from 'next/link'
import Image from 'next/image'

// import useCarrinho from '@/data/hooks/useCarrinho'
import { IconShoppingCart } from '@tabler/icons-react'

import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconBrandYoutube,
} from '@tabler/icons-react'


interface PaginaProps {
    children: any
    className?: string
    semCabecalho?: boolean
    semRodape?: boolean
}

export default function Pagina(props: PaginaProps) {
    return (
        <div
            className="flex flex-col min-h-screen"
            style={{ background: 'radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)' }}
        >
            <div
                className="flex-1 flex flex-col w-screen"
                style={{ background: 'url("/background.png")' }}
            >
                {!props.semCabecalho && <Cabecalho />}
                <main className={`flex-1 flex flex-col ${props.className ?? ''}`}>
                    {props.children}
                </main>
                {!props.semRodape && <Rodape />}
            </div>
        </div>
    )
}


// SEÇÕES

function Cabecalho() {
    const qtdeItens = 0
    // const { qtdeItens } = useCarrinho()
    return (
        <header
            className="flex flex-col justify-between h-20"
            style={{
                background: 'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)',
            }}
        >
            <div className="boxed flex-1 flex justify-between items-center">
                <Logo />
                <Link href="/checkout/carrinho">
                    <IconeCarrinho qtdeItens={qtdeItens} />
                </Link>
            </div>
            <LinhaGradiente/>
        </header>
    )
}

function Rodape() {
    return (
        <footer className="flex flex-col bg-black/30 text-zinc-400 mt-10">
            <LinhaGradiente/>
            <div className="boxed flex flex-col py-10 gap-10">

                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    <Logo />

                    <section className="flex flex-col gap-1">
                        <h3 className="text-2xl font-bold text-zinc-200 pb-2">Sobre</h3>
                        <span className="text-sm">Nossa História</span>
                        <span className="text-sm">Política de Privacidade</span>
                        <span className="text-sm">Termos de Uso</span>
                    </section>

                    <section className="flex flex-col gap-1">
                        <h3 className="text-2xl font-bold text-zinc-200 pb-2">Contato</h3>
                        <span className="text-sm">suporte@gam3r.store</span>
                        <div className=" text-sm flex items-center gap-2 justify-center md:justify-start">
                            <IconBrandWhatsapp size={20} className="text-green-500" />
                            <span>WhatsApp</span>
                        </div>
                    </section>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
                    <section className="flex gap-2 ">
                        <IconBrandYoutube size={28} stroke={1} />
                        <IconBrandInstagram size={28} stroke={1} />
                        <IconBrandFacebook size={28} stroke={1} />
                        <IconBrandLinkedin size={28} stroke={1} />
                    </section>
                    
                    <section className="flex flex-col md:flex-row items-center gap-1.5 text-sm text-zinc-500">
                        <div className="flex gap-1.5">
                            <span>Feito com</span>
                            <span>❤️</span>
                            <span>em {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>Todos os direitos reservados</span>
                    </section>
                </div>
            </div>
        </footer>
    )
}


// COMPONENTES

function IconeCarrinho(props: {qtdeItens: number}) {
    return (
        <div className="flex flex-col justify-center items-center rounded-full w-14 h-14 bg-violet-dark relative">
            <IconShoppingCart size={30} stroke={1.3} />
            <span className="
                flex justify-center items-center absolute top-2 right-2 w-5 h-5
                bg-pink-500 rounded-full text-white text-xs font-semibold
            ">
                {props.qtdeItens ?? 0}
            </span>
        </div>
    )
}

function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" height={60} width={60} alt="logo" />
            <Image src="/logo-texto.png" width={230} height={0} alt="logo" />
        </Link>
    )
}

function LinhaGradiente() {
    return <span className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"/>
}
