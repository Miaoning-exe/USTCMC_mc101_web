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
                shadow-[6px_6px_0_0_rgba(0,0,0,1)] 
                hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] 
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