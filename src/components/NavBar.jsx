function NavBar ({pokemonIndex, pokemonList, setPokemonIndex}) {
        
        const handleClickNext = () => {
          if (pokemonIndex < pokemonList.length - 1)
          setPokemonIndex(pokemonIndex + 1)
        }
        
        const handleClickBack = () => {
          if (pokemonIndex > 0)
          setPokemonIndex(pokemonIndex - 1)
        }
        
          return (
            <div>
              {pokemonIndex > 0 && (<button onClick={handleClickBack}>Précédent</button>)}
              {pokemonIndex < pokemonList.length - 1 && (<button onClick={handleClickNext}>Suivant</button>)}
            </div>
        );
        
        }


export default NavBar;