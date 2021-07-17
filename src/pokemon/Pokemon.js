import React, { Component } from "react";

export default class Pokemon extends Component {
	constructor ( props ) {
		super( props );
		this.state = {
			isLoading: true,
			character: null
		};
		this.initCharacter = this.initCharacter.bind( this );
		this.toggleIsLoading = this.toggleIsLoading.bind( this );
	}

	initCharacter ( character ) {
		this.setState( prevState => ( {
			...prevState,
			character,
		} ) )
	}

	toggleIsLoading () {
		this.setState( prevState => ( {
			...prevState,
			isLoading: !prevState.isLoading
		} ) )
	}

	componentDidMount () {
		fetch( `https://pokeapi.co/api/v2/pokemon/${ this.props.characterId }` )
			.then( res => res.json() )
			.then( this.initCharacter )
			.then( this.toggleIsLoading )
	}

	render () {
		return this.state.isLoading
			? <h1>Loading...</h1>
			: <div style={ { display: 'flex', flexFlow: 'column' } }>
				<img
					height={ 300 }
					src={ this.state.character.sprites.other.dream_world.front_default }
					alt={ this.state.character.name }
				/>
				<div>{ this.state.character.name }</div>

			</div>
	}
}
// (condition)? statement if true : statement if false