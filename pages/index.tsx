import React, { useEffect, useState } from 'react';
import * as Component from '../public/components';

const Queue = require('../public/Queue');

function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// TODO: Adicionar um botão para levar ao topo da página
// TODO: Adicionar um select para exibir apenas os pokémon de uma geração específica
// TODO: Adicionar um botão para pesquisar um pokémon específico. E irá levar para uma página onde será exibido o pokémon pesquisado. Todos seus dados principais: nome, id, sprite, tipos, moves, e também, o próximo pokémon e o anterior.

async function fetchData(urlPool: any[] | Queue<string>, stateFunction: { (value: React.SetStateAction<any[]>): void; (arg0: any[]): void; }) {

    let stateVariable = [];
    let queue = new Queue(urlPool);

    while (queue.running) {
        await fetch(`/api?data=${queue.next()}`).then(data => data.json()).then(pokemonData => {
            if (pokemonData.is_default) { // Eu to criando um barramento por id para facilitar o processo
                let newData = (
                    <Component.Card generation={`gen-1`} pokemonId={[pokemonData.id]} pokemonName={CapitalizeFirstLetter(pokemonData.name)} pokemonSprite={pokemonData.sprites.other['official-artwork'].front_default} pokemonTypes={pokemonData.types} />
                );
    
                stateVariable.push(newData);
                stateFunction([...stateVariable, newData]);
            }
        })
    }

}

export default function Index() {

    let toFetchPool = []; 
    let [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetch('/api').then((data) =>  data.json()).then((value) => {

            value.results.forEach((element) => {
                toFetchPool.push(element.url);
            });

            fetchData(toFetchPool, setPokedex);
            console.log(toFetchPool.length)
            
        });
    }, []);


    return (
        <>
            {pokedex.length}
            <div className="container">
                {pokedex}
            </div>

            
        </>
    )
}
