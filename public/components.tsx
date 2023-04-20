import React from "react";
import Image from "next/image";

export function Card({pokemonName, pokemonId, pokemonTypes, pokemonSprite, generation}) {
    return (
        <div className={`card ${generation}`} key={`pokemon-${pokemonId}`}>
            <Image src={pokemonSprite} alt={pokemonName} width={150} height={150} quality={50} priority={true} />
            <p className="card-title">
                {pokemonName} 
                <span className="card-id"> #{pokemonId}</span>
            </p>
            <div className={`card-types`}>
                {pokemonTypes.map((type) => {
                    return (
                        <div className={`card-type ${type.type.name}`} key={`pokemon-${pokemonId}-type-${type.type.name}`} >
                            {type.type.name}
                        </div>
                    )})}
            </div>
        </div>
    )
}
