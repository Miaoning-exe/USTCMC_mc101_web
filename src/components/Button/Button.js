import Link from '@docusaurus/Link';
import React, { useState } from 'react';

export default function Button ({
    href, 
    text, 
    color = 'bg-amber-300',
    width = 'w-auto',
    height = 'h-auto',
    className = '',
}) {
    return (
       <Link
        to={href}
        className={`
            ${color} ${width} ${height} ${className}
            inline-flex items-center justify-center
            px-6 py-2 
            border-solid border-2 border-black 
            shadow-[4px_4px_0_0_rgba(0,0,0,1)] 
            hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)]
            active:translate-y-[4px] active:translate-x-[4px] active:shadow-none
            cursor-pointer transition-all font-black
            text-black hover:text-black hover:no-underline 
        `}
       >
        {text}
       </Link>
    )
}