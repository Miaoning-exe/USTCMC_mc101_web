import React from "react";

export default function HeroButton({
    onClick,
    text,
    icon,
    color = 'bg-amber-400',
    border = 'border-4 border-black',
    className = '',
}) {
    return (
        <button
            onClick={onClick}
            className={`
                ${color} 
                ${className}
                ${border}
                flex items-center justify-center gap-2 
                px-8 py-4 text-lg font-black 
                shadow-brutal-l
                hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-brutal-m 
                cursor-pointer
                active:translate-y-[6px] active:translate-x-[6px] active:shadow-none
                transition-all 
                text-black
            `}
        >
            {icon}
            {text}
        </button>
    )
}