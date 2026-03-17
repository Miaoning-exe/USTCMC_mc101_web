import Link from '@docusaurus/Link';
import React, { useState } from 'react';

export default function Button({
    onClick,
    text,
    color = 'bg-zinc-100',
    width = 'w-auto',
    height = 'h-auto',
    className = '',
}) {
    return (
        <button
            onClick={onClick}
            className={`
            ${color} ${width} ${height} ${className}
            inline-flex items-center justify-center
            px-6 py-2 
            border-2 border-black 
            shadow-brutal-m
            hover:bg-colorset-primaryLightest
            active:translate-y-[4px] active:translate-x-[4px] active:shadow-none
            cursor-pointer transition-all font-black
            text-black hover:text-black hover:no-underline 
        `}
        >
            {text}
        </button>
    )
}