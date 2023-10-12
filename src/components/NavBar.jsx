function NavBar ({pokemonIndex, pokemonList, setPokemonIndex}) {
        
       function handleClick (index) {
       
            setPokemonIndex(index)

       }
    
          return (

            <div>
                {pokemonList.map((element, index) => (
                    <button key={element.name} onClick={() => handleClick(index)}>{element.name}</button>                       
                        )
                    )
                }
            </div>
             );
}
        


export default NavBar;