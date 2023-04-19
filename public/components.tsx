import React from "react";
import Image from "next/image";

export function Card({pokemonName, pokemonId, pokemonTypes, pokemonSprite}) {
    return (
        <div className="card" key={`pokemon-${pokemonId}`}>
            <Image src={pokemonSprite} alt={pokemonName} width={150} height={150} quality={50} priority={true} />
            <h1 className="card-title">{pokemonName}</h1>
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
