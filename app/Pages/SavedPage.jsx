import React, { Component } from 'react';
import ArticleList from '../Components/ArticleList';

class CompletedPage extends Component {

	render() {
		console.log(this.props)
		const { articles } = this.props;

		return (
			<div>
				<h1>Saved Page</h1>
				<ArticleList articles={articles}/>
			</div>
		);

	}
}

export default CompletedPage;
