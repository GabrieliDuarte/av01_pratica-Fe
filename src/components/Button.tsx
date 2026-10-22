import type { ReactNode } from "react";

type ButtonProps = {
    children : ReactNode
}

export default function Button ({children}: ButtonProps){
    return (
        <button>
            className="rounded-full bg-primary px-3 py -3 py-1.5 text-xs font-semibold text-white hover: bg-primary-dark"
        {children}</button>
    )
}