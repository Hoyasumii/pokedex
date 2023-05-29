import React from "react";
import Link from "next/link";
export default function Page()
{
    return (
    
        <div>
            <h1 className="title">Sobre o Projeto</h1>
                <p className="texto">Este projeto foi criado para a disciplina de Cloud Computing 
                com o objetivo de criar uma aplicação e fazer o deploy para algum serviço de hospedagem.
                A aplicação foi desenvolvida utilizando o framework Next.js e a linguagem TypeScript, com o intuito 
                de consumir a api <Link target="_blank" href="https://pokeapi.co/"legacyBehavior><a>PokéAPI</a></Link>, através da fetch API, 
                e exibir os dados básicos de todos os Pokémon da primeira geração.
                - A aplicação está hospedada no Vercel e pode ser acessada através do link: https://pokedex-tan-seven.vercel.app/.</p>
        </div>

    )
}

