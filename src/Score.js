import React from 'react';

class Score extends React.Component{

	constructor(props) {
		super(props);
		
	}

	render(){
		return(
			<p>
				Correct: {this.props.correct} Incorrect: {this.props.incorrect}
			</p>
		)
	}

}

export default Score