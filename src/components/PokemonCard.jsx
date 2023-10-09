function PokemonCard({pokemon}) {

    return (
      <div>
        <figure>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
        </figure>
        <figcaption>
            {pokemon.name ? pokemon.name : <p>???</p>}
        </figcaption>
      </div>
    )
  }

  export default PokemonCard;

