import React, { Component } from 'react';

class ArticleItem extends Component {
	
	render() {
		console.log(this.props);
		const { article } = this.props;

		return (
			<li>
				{article.title}
				{article.date}
				{article.url}
			</li>
		);
	}
}

	// click(event) {
	// 	this.props.save(event.target.id);
	// 	// save article where id = id in db
	// }

//<button className='btn btn-info' id={article.id} onClick={this.click.bind(this)}> Save </button>
export default ArticleItem;