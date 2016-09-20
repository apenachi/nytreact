import React, { Component, cloneElement } from 'react';


class Application extends Component {

	constructor(props, context) {
		super(props, context);

		this.saveArticle = this.saveArticle.bind(this);

		this.state = {
			articles: [{
				id: 1,
				title: 'Ali Sells Jersey House And Moves to Chicago',
				date: '1974-07-18T00:00:00Z',
				url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE' 
			},{
				id: 2,
				title: 'Ali Sells Jersey House And Moves to Chicago',
				date: '1974-07-18T00:00:00Z',
				url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE' 
			},{
				id: 3,
				title: 'Ali Sells Jersey House And Moves to Chicago',
				date: '1974-07-18T00:00:00Z',
				url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE' 
			}]
		};
	}

	saveArticle(articleId) {
		const { articles } = this.state;
		const item = articles.find((item) => item.id === itemId);

		if (item) {
			item.isCompleted = !item.isCompleted;

			this.setState({
				articles: articles
			});
		}
	}

	render() {
		const { children } = this.props;
		const { articles } = this.state;

		return (
				<div className="Application">

					{
						cloneElement(children, {
							articles: articles,
							saveArticle: this.saveArticle
						})
					}
				</div>
		);

	}
}

export default Application;