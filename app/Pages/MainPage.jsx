import React, { Component } from 'react';

class MainPage extends Component {
	
	constructor(props){
		super(props);
	}

	render() {
		console.log('Main Page', this.props);
		// const {articles, search, saveArticle} = this.props;
		return (
			<div className="MainPage">
				<div className="row">
					<h2 className="text-center">News Finder! - MainPage</h2>
					<p className="text-center"><em>Welcome to the news search engine .. </em></p>
				</div>
			</div>
		);

	}
}
export default MainPage;