import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { PokemonList } from './Pokemon';
import PokemonInfo from './Pokemon/PokemonInfo';
import './App.css';
const POKEMON_COUNT = [5, 10, 20, 25, 50];

class App extends Component {
	state = {
		pokemonCount: 5
	};

	updatePokemonCount = val => {
		this.setState({
			pokemonCount: parseInt(val.target.innerText, 10)
		});
	}

  render() {
    return (
      <div className="App">
        <div className="center w85">
					<div className="ph3 pv1 background-gray">
						<Switch>
							<Route exact path="/" component={() => {
								return <React.Fragment>
									<div className="flex flex-row pv2">
									Count --
										{
											POKEMON_COUNT.map(
												count =>
													<span
														className="ph2"
														key={count}
														value={count}
														onClick={this.updatePokemonCount}
													>
														{count} |
													</span>
											)
										}
									</div>
									<PokemonList pokemonCount={this.state.pokemonCount} />
								</React.Fragment>
							}} />
							<Route exact path="/:pokemon" component={PokemonInfo} />
						</Switch>
					</div>
				</div>

      </div>
    );
  }
}

export default App;
