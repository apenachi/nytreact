import React, { Component } from 'react';
import ArticleList from '../Components/ArticleList';

class SavedPage extends Component {
	
	constructor(props){
		super(props);
	}

	render() {
		console.log('Saved Page', this.props)
		const { articles, saveArticle } = this.props;

		return (
			<div className="SavedPage">
					<div className="row">
					<h1>Saved Page</h1>
					<ArticleList articles={articles} saveArticle={saveArticle}/>
				</div>
			</div>
		);

	}
}

export default SavedPage;