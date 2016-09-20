import React from 'react';

class Search extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			search: ""
		}

		this.getSearch = this.getSearch.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	getSearch(event) {
		this.setState({search:event.target.value})
	}

	handleClick(){
		console.log(this.state.search);
		// this.props.setSearch(this.state.search);
	}

	render() {

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">search</h3>
				</div>
				<div className="panel-body text-center">
						<form>
							<div className="form-group">
								<h4 className=""><strong>News</strong></h4>
								{/* Comments			*/}
								<input type="text" className="form-control text-center" onChange= {this.getSearch} required/>
								<br />
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
				</div>
			</div>

		)
	}
}

export default Search;

