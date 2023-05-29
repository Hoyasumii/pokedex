import React, { useEffect, useState } from 'react';
import * as Component from '../public/components';
import Link from 'next/link';

function CapitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

async function setData(urlPool, stateFunction) {
	const newDataArray = []; // Array temporário para armazenar os novos dados
  
	for (const url of urlPool) {
	  const response = await fetch(url);
	  const pokemonData = await response.json();
  
	  if (pokemonData.is_default) {
		const newData = (
		  <Component.Card
			pokemonId={pokemonData.id}
			pokemonName={CapitalizeFirstLetter(pokemonData.name)}
			pokemonSprite={pokemonData.sprites.other['official-artwork'].front_default}
			pokemonTypes={pokemonData.types}
			key={pokemonData.id}
		  />
		);
  
		newDataArray.push(newData);
		stateFunction(state => [...newDataArray]);
	  }
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
			
			setData(toFetchPool, setPokedex);

		});
	}, []);
		
	return (
		<>
			<div className="container pokedex">
				{pokedex}
			</div>
		</>
	)
}
