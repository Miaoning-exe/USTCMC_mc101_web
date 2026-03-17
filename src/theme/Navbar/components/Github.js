import React from "react";
import { Github } from "lucide-react";

export default function GithubButton() {
    return (
        <a
            href="https://github.com/Miaoning-exe/USTCMC_mc101_web"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-colorset-primaryDarker transition-colors text-black flex items-center"
            aria-label="GitHub repository"
        >
            <Github size={24} />
        </a>
    );
}