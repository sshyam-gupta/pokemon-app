
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Pokemon extends Component {
	render () {
		const { pokemon } = this.props;

    return (
      <div className='list pt2 flex flex-column tl'>
        <div className="b">
					<img src={pokemon.image} alt={pokemon.name} height="30" width="30"/>
					<Link to={`/${pokemon.name}`}>
						{pokemon.name} ({pokemon.number})
					</Link>
				</div>
      </div>
    );
	}
}

export default Pokemon;
