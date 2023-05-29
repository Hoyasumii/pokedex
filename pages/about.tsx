import React from "react";
import Link from "next/link";

import slugify from "slugify";

export default function Page() {
 
    let collaborators = {
        "Alan Reis Anjos": "https://github.com/Hoyasumii",
        "José Henrique de Oliveira de Carvalho": "https://github.com/jose15000",
        "José Flávio Cerqueira Marques": "https://github.com/Deepzera",
        "Luca Capelocci Guerreiro": "https://github.com/LucaCguerreiro",
        "Luciano Magno de Souza Prata Júnior": "https://github.com/Anloucy"
    }

    return (

        <div className="container text">
            <h1>Sobre o Projeto</h1>
            <p>
                Este projeto foi criado para a disciplina de Cloud Computing com o objetivo de criar uma aplicação e fazer o deploy para algum serviço de hospedagem. A aplicação foi desenvolvida utilizando o framework Next.js e a linguagem TypeScript, com o intuito de consumir a api <Link className="link" target="_blank" href="https://pokeapi.co/">PokéAPI</Link>, através da fetch API, 
                e exibir os dados básicos de todos os Pokémon da primeira geração.
            </p>
            <hr />
            <h2>Participantes</h2>
            <p>
                As pessoas que contribuíram para o desenvolvimento da aplicação são:
            </p>
            <ol>
                {
                    Object.keys(collaborators).map((name) => {
                        return <li key={slugify(name)}><Link href={collaborators[name]}>{name}</Link></li>
                    })
                }
            </ol>
            <hr />
            <h2>Repositório</h2>
            <p>
                O repositório do projeto pode ser encontrado no <Link className="link" target="_blank" href="https://github.com/Hoyasumii/pokedex">GitHub</Link>.
            </p>
            <hr />
            <h2>Muito obrigado!!</h2>
        </div>

    )
}

