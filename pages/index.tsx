import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as Component from '../public/components';

function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Index() {

    let [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetch('/api').then((data) =>  data.json()).then((value) => {
            value.results.forEach(async (element) => {
                // Essa parte está muito ruimkk
                await fetch(`/api?data=${element.url}`).then(pokemonData => pokemonData.json()).then(pokemonValue => {
                    setPokedex((pokedex) => [...pokedex, 
                        <Component.Card>
                            { pokemonValue.sprites.other['official-artwork'].front_default == null ? null : <Image src={pokemonValue.sprites.other['official-artwork'].front_default} alt="Image" width="200" height="200" /> }
                            {pokemonValue.id} - { CapitalizeFirstLetter(element.name) } - { pokemonValue.types[0].type.name }
                        </Component.Card>]);
                    console.log(pokemonValue.sprites.other['official-artwork'].front_default);
                });
            })
        });
    }, []);

    return (
        <>
            <div className="container">
                {pokedex}
            </div>
            
        </>
    )
}
