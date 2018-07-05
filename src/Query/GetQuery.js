import gql from 'graphql-tag';
import { POKEMON_INFO, POKEMON_ATTACKS } from './Fragments';


const GET_POKEMONS = gql`
	query pokemons($first: Int!) {
    pokemons(first: $first) {
			...PokemonInfo
    }
  }
	${POKEMON_INFO}
`

const GET_POKEMON = gql`
	query pokemon($name: String) {
    pokemon(name: $name) {
			...PokemonInfo
			maxCP
			maxHP
			attacks {
				special {
					...PokemonAttackInfo
				}
				fast {
					...PokemonAttackInfo
				}
			}
			evolutions {
				...PokemonInfo
			}
    }
  }
	${POKEMON_ATTACKS}
	${POKEMON_INFO}
`;

export {
	GET_POKEMONS,
	GET_POKEMON
};
