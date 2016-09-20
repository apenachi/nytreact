import React, { Component } from 'react';
import ArticleItem from './ArticleItem';

class ArticleList extends Component {

	render() {
		const { articles } = this.props;

		return (
			<ul className="ArticleList">
				{
					articles.map((article) =>
						<ArticleItem article={article} />
					)
				}
			</ul>
		);
	}
}

export default ArticleList;