import React, { Component } from "react";

export default class Pokemon extends Component {
	constructor ( props ) {
		super( props );
		this.state = {
			isLoading: true,
			characterId: props.characterId,
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
		fetch( `https://pokeapi.co/api/v2/pokemon/${ this.state.characterId }` )
			.then( res => res.json() )
			.then( this.initCharacter )
			.then( this.toggleIsLoading )
	}

	componentDidUpdate () {
		if ( this.state.character == null )
		{
			fetch( `https://pokeapi.co/api/v2/pokemon/${ this.state.characterId }` )
				.then( res => res.json() )
				.then( this.initCharacter )
				.then( this.toggleIsLoading )
		}
	}
	delete () {
		this.props.onDelete( this.props.characterId )
		this.setState( ( prevState => ( {
			...prevState,
			character: null

		} ) ) )
	}

	render () {
		return this.state.isLoading
			? <h1>Loading...</h1>
			: ( this.state.character !== null ) &&
			<div style={ { display: 'flex', flexFlow: 'column' } }>
				<img
					height={ 300 }
					src={ this.state.character.sprites.other.dream_world.front_default }
					alt={ this.state.character.name }
				/>
				<div>{ this.state.character.name }</div>
				<button style={ { width: 100 } } onClick={ () => this.delete() }>Remove </button>
			</div>
	}
}