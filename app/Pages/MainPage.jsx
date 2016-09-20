import React, { Component, cloneElement } from 'react';
import { Link } from 'react-router';
// import Search from '../Components/Search';

class IndexPage extends Component {

	constructor(props){

		super(props);

		this.state = {search: ''}

		this.setSearch = this.setSearch.bind(this);
	}

	setSearch(search){
		this.setState({search:search})
	}

	render() {
		const { children, articles } = this.props;
		return (
			<div>
				<h1>Main Page</h1>
				<Link to="/search"> Search </Link>
				<Link to="/saved"> Saved </Link>
				<div className="container">
					<div className="row">
						<div className="jumbotron">
							<h2 className="text-center">News Finder!</h2>
							<p className="text-center"><em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em></p>
						</div>
						<div className="col-md-12">
							{/*<Search setSearch={this.setSearch}/>*/}
						</div>
					</div>
				</div>				
				{
					cloneElement(children, {
						articles: articles,
					})
				}
			</div>
		);

	}
}

export default IndexPage;