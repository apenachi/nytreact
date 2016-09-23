import React, { Component } from 'react';
import ArticleList from '../Components/ArticleList';
import History from '../Components/History';

class SavedPage extends Component {
	
	constructor(props){
		super(props);
	}

	render() {
		console.log('Saved Page', this.props)
		const { articles, saveArticle } = this.props;

		return (
			<div className="SavedPage text-center">
				<div className="row">
					<h1>These articles were found ....</h1>
					<ArticleList articles={articles} saveArticle={saveArticle}/>
				</div>
				<div className="row">
					<History savedArticles={savedArticles}/>
				</div>
			</div>
		);

	}
}

export default SavedPage;
