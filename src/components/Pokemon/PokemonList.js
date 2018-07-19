import React, { Component } from 'react'
import { Query } from 'react-apollo';

import Pokemon from './Pokemon'; 
import { GET_POKEMONS } from '../../Query/GetQuery';

class PokemonList extends Component {
	render () {
		const { pokemonCount } = this.props;

		return (
			<Query query={GET_POKEMONS} variables={{ first: pokemonCount }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return <div>{
						data.pokemons.map(
							pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />
						)
					}</div>
        }}
      </Query>
		)
	}
}

export default PokemonList;
