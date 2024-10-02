import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

export default function StarReview(props: StarReviewProps) {
    function mapNotaParaEstrelas(nota: number) {
        const SIZE = props.tamanho ?? 12;
        const END_CHEIAS = Math.floor(nota), END_METADE = Math.round(nota);
        return new Array(5)
            .fill(<IconStarFilled size={SIZE}/>, 0, END_CHEIAS)
            .fill(<IconStarHalfFilled size={SIZE} />, END_CHEIAS, END_METADE)
            .fill(<IconStar size={SIZE}/>, END_METADE)
    }

    return <div className={props.className ?? ''}>
        <div className="flex gap-0.5 text-emerald-400">{mapNotaParaEstrelas(props.nota)}</div>
    </div>
}

interface StarReviewProps {
    nota: number
    tamanho?: number
    className?: string
}