import React from 'react';

class Score extends React.Component{

	constructor(props) {
		super(props);
		
	}

	render(){
		return(
			<div>
				<h1>What kind of dog is this?</h1>
				<p>
					Correct: {this.props.correct} Incorrect: {this.props.incorrect}
				</p>
			</div>
		)
	}

}

export default Score