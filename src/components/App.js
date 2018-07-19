import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { PokemonList } from './Pokemon';
import PokemonInfo from './Pokemon/PokemonInfo';
import './App.css';

class App extends Component {
	state = {
		pokemonCount: 5
	};

	updatePokemonCount = val => {
		this.setState({
			pokemonCount: val
		});
	}

  render() {
    return (
      <div className="App">
				<div className="header">
					<a href="/">Home</a>
				</div>
        <div className="center w85">
					<div className="ph3 pv1 background-gray">
						<Switch>
							<Route exact path="/" component={() => {
								return <React.Fragment>
									<div className="flex flex-row pv2">
									Count --
										<span className="ph2" value="5" onClick={() => {
											this.updatePokemonCount(5);
										}}>5</span> |
										<span className="ph2" value="10" onClick={() => {
											this.updatePokemonCount(10);
										}}>10</span> |
										<span className="ph2" value="20" onClick={() => {
											this.updatePokemonCount(20);
										}}>20</span> |
										<span className="ph2" value="50" onClick={() => {
											this.updatePokemonCount(50);
										}}>50</span>
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
