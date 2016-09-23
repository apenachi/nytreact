import React, { Component, cloneElement } from 'react';
import helpers from '../helpers';
import {Link} from 'react-router';
import History from './History';

class Application extends Component {

	constructor(props){
		super(props);

		this.saveArticle = this.saveArticle.bind(this);
		this.setSearch = this.setSearch.bind(this);

		this.state = {
			search: '',

			article: '',

			savedArticles: [],

			articles: []
			// [{
			// 	id: 1,
			// 	title: 'Ali Sells Jersey House And Moves to Chicago',
			// 	date: '1974-07-18T00:00:00Z',
			// 	url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE' 
			// },{
			// 	id: 2,
			// 	title: 'Ali Sells Jersey House And Moves to Chicago',
			// 	date: '1974-07-18T00:00:00Z',
			// 	url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE' 
			// },{
			// 	id: 3,
			// 	title: 'Ali Sells Jersey House And Moves to Chicago',
			// 	date: '1974-07-18T00:00:00Z',
			// 	url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE' 
			// }]
		}
	}

	setSearch(search){
		this.setState({search:search})
	}

	saveArticle(article) {
		console.log('saveArticle', article);
		console.log('saveArticle - Application');
		helpers.postArticle(article)
			.then(function(data){
				// this.setState({	articles: data })
				console.log('after mongodb')
				helpers.getArticle()
					.then(function(response){
						if (response !== this.state.savedArticles){
							console.log ("saveArticle-getArticle", response.data);
							this.setState({	savedArticles: response.data })
						}
					}.bind(this))
			}.bind(this))
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate - Application');
		if(prevState.search != this.state.search){
			helpers.fetchArticles(this.state.search)
				.then(function(data){
					if (data !== this.state.articles){
						console.log(data);
						this.setState({ articles: data })		
					}
				}.bind(this))
		}
	}

	componentDidMount() {
		//Get the saved articles
		console.log('componentDidMount');
		helpers.getArticle()
			.then(function(response){
			//	if (response != this.state.savedArticles){
					console.log ("savedArticles - componentDidMount", response.data);
					this.setState({ savedArticles: response.data })
			//	}
		}.bind(this))
	}

	render() {
		const { children } = this.props;
		const { articles, search, savedArticles } = this.state;

		return (
				<div className="Application">
					<br/>
					<div className="menu well text-center">
							<h1 className="text-center">N Y T React</h1>
							<Link to="/" activeClassName="active"> Home </Link>
							<Link to="/search" activeClassName="active"> Search </Link>
							<Link to="/saved" activeClassName="active"> Saved </Link>
					</div>
					<div className="content well">
						{
							cloneElement(children, {
								articles: articles,
								search: search,
								setSearch: this.setSearch,
								saveArticle: this.saveArticle
							})
						}
					</div>
					<div className="content well">
						<History savedArticles={savedArticles}/>
					</div>
				</div>
		);

	}
}

export default Application;
