import React, { Component } from 'react'
import { Query } from 'react-apollo';
import { GET_POKEMON } from '../../Query/GetQuery';
import Pokemon from './Pokemon';

class PokemonInfo extends Component {
	render () {
		const { match } = this.props;
		const pokemonName = match.params.pokemon;

		return (
			<Query query={GET_POKEMON} variables={{ name: pokemonName}}>
				{({ loading, error, data }) => {
					const { pokemon } = data;
					if (loading) return <p>Loading...</p>;
          if (error || !pokemon) return <p>Pokemon Not Found :(</p>;

					return <React.Fragment>
						<img src={pokemon.image} alt={pokemon.name}/>
						<div>Name: {pokemon.name}</div>
						<div className="mt3">Max CP: {pokemon.maxCP}</div>
						<div>Max HP: {pokemon.maxHP}</div>
						<div className="mt3">Evolution(s):</div>
						{
							pokemon.evolutions ?
							pokemon.evolutions.map(
								ePokemon => <Pokemon key={ePokemon.id} pokemon={ePokemon} />
							) :
							<div className="b">No more Evolution :(</div>
						}
					</React.Fragment>
				}}
			</Query>
		)
	}
}

export default PokemonInfo;
