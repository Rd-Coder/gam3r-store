export interface Produto extends Precificavel {
    id: number
    nome: string
    descricao: string
    marca: string
    modelo: string
    imagem: string
    nota: number  
    videoReview: string
    tags: string[]
    especificacoes: Especificacoes
}

export interface Especificacoes {
    destaque: string
    [chave: string]: string | number | boolean
}

export interface Precificavel {
    precoBase: number
    precoPromocional: number
    menorPreco: number
    maiorPreco: number
    precoMedio: number
}
