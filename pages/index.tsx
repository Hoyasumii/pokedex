import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as Component from '../public/components';

const Queue = require('../public/queue');

function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

async function fetchData(urlPool: any[] | Queue<string>, stateFunction: { (value: React.SetStateAction<any[]>): void; (arg0: any[]): void; }) {

    let stateVariable = [];
    let queue = new Queue(urlPool);

    while (queue.running) {
        await fetch(`/api?data=${queue.current}`).then(data => data.json()).then(pokemonData => {
            let newData = (
            <Component.Card>
                { pokemonData.sprites.other['official-artwork'].front_default == null ? null : <Image src={pokemonData.sprites.other['official-artwork'].front_default} alt="Image" width="150" height="150" /> }
                {pokemonData.id} - { CapitalizeFirstLetter(pokemonData.name) }
            </Component.Card> );

            stateVariable.push(newData);
            stateFunction([...stateVariable, newData]);
        })
        queue.next();
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
