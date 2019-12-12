import React from 'react';

class Button extends React.Component{


	constructor(props) {
		super(props);
		this.state = {
			text:this.props.text,
			value:this.props.value
		};
		// this.handleClick=this.handleClick.bind(this)
	}

	render(){
		return (
				<button onClick={this.props.handleClick}>{this.state.text}</button>
			)
	}


}

export default Button