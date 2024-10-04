'use client'

import { IconTag } from "@tabler/icons-react"

interface TagProps {
    label: string
    icone?: React.ReactNode
    outlined?: boolean
    className?: string
}

export default function Tag(props: TagProps) {
    return (
        <div
            className={`
                flex items-center gap-2 py-1 px-4
                rounded-full text-xs uppercase
                ${
                    props.outlined
                        ? 'border border-violet-500 text-white'
                        : 'bg-gradient-to-r from-violet-600 to-violet-700'
                }
                ${props.className}
            `}
        >
            {props.icone ?? <IconTag size={15}/>}
            <span>{props.label}</span>
        </div>
    )
}
