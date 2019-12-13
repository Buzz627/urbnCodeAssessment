import React from 'react';

class Button extends React.Component{


	constructor(props) {
		super(props);
		this.setState({
			text:this.props.text,
			value:this.props.value
		})
	}

	render(){
		return (
				<button value={this.props.text} onClick={this.props.handleClick}>{this.props.text}</button>
			)
	}

	componentDidMount(){
		this.setState( {
			text:this.props.text,
			value:this.props.value
		});
	}


}

export default Button