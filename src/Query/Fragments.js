import gql from "graphql-tag";

const POKEMON_ATTACKS = gql`
	fragment PokemonAttackInfo on Attack {
		name
	}
`

const POKEMON_INFO = gql`
	fragment PokemonInfo on Pokemon {
		id
		name
		number
		image
	}
`

export {
	POKEMON_ATTACKS,
	POKEMON_INFO
};
