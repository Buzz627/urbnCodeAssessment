import React from 'react';

class Result extends React.Component{

	constructor(props) {
		super(props);
		this.setState({
			text:this.props.text,
			value:this.props.value
		})
		// this.state = ;
		// this.handleClick=this.handleClick.bind(this)
	}

	render(){
		return(
			<div>
				<img src = {this.props.pic}/>
				<br/>
				<button onClick={this.props.handleClick} value="next">next</button>
			</div>
		)
	}

}

export default Result