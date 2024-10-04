import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import React from "react"

abstract class ButtonProps {
    className?: string = '';
    label?: string = '';
    icon?: any;
    onClick?: (e: any) => void
}

export function ButtonAction(props: ButtonProps) {
    return (
        <button
        className={`button-action ${props.className}`}
        onClick={props.onClick}
        >
            {props.icon}
            <span>{props.label}</span>
        </button>
    );
}

interface ButtonLinkProps extends ButtonProps {
    href: Url
}

export function ButtonLink(props: ButtonLinkProps) {
    return (
        <Link href={props.href} className={`button-link ${props.className}`}>
            {props.icon}
            <span>{props.label}</span>
        </Link>
    );
}