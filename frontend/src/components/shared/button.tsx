import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import React from "react"

abstract class ButtonProps {
    className?: string = 'button-1';
    label?: string = '';
    icon?: any;
    onHoverOutlined?: boolean
    onClick?: (e: any) => void
}

export function ButtonAction(props: ButtonProps) {
    return (
        <button
        className={`button-1 ${props.onHoverOutlined && 'button-border'} ${props.className}`}
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
        <Link href={props.href}>
            <ButtonAction {...(props as ButtonProps)} />
        </Link>
    );
}