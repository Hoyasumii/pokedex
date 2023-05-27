import React from "react";
import Image from "next/image";

export function Navbar() {
    return (
        <div className="pokedex-navbar">
            
        </div>
    )
}

export function Card({pokemonName, pokemonId, pokemonTypes, pokemonSprite}) {
    return (
        <div className={`pokemon-card`} key={`pokemon-${pokemonId}-card`}>
            <Image src={pokemonSprite} alt={pokemonName} width={150} height={150} quality={50} priority={true} />
            <p className="pokemon-card-title">
                {pokemonName} 
                <span className="pokemon-card-id"> #{pokemonId}</span>
            </p>
            <div className={`pokemon-card-types`}>
                {pokemonTypes.map((type) => {
                    return (
                        <div className={`pokemon-card-type ${type.type.name}`} key={`pokemon-${pokemonId}-type-${type.type.name}`} >
                            {type.type.name}
                        </div>
                    )})}
            </div>
        </div>
    )
}
