import React, { Component, cloneElement } from 'react';

import Search from '../Components/Search';


class SearchPage extends Component {

	constructor(props){
		super(props);
	}

	render() {
		console.log('Search Page', this.props);

		return (
			<div className="SearchPage text-center">
				<div className="row">
					<h4>News Finder! SearchPage</h4>
				</div>
				<div className="row">
					<Search setSearch={this.props.setSearch}/>
				</div>
				<div className="row">
					<ArticleList articles={articles} saveArticle={saveArticle}/>
				</div>
			</div>
		);

	}
}

export default SearchPage;
