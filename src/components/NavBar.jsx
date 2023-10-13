function NavBar ({pokemonIndex, pokemonList, setPokemonIndex}) {
    

       function handleClickPika(element, index) {
            if (element.name === "pikachu") { 
                alert("pika pikachu !!!")
            }
        setPokemonIndex(index)
       }
    
          return (

            <div>
                {pokemonList.map((element, index) => (
                    <button key={element.name} onClick={() => handleClickPika(element, index)}>{element.name}</button>                       
                        )
                    )
                }
            </div>
             );
            }

        


export default NavBar;