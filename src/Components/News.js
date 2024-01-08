import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            arti: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=84b89a18cf6d46538af09184afd9d729";
        let data = await fetch(url);
        let parsedArtical = await data.json();
        // console.log("artical", parsedArtical);
        this.setState({arti: parsedArtical.articles})
    }

    render() {
        return (
        <div className='py-3'>
            <h2>Top ABP News</h2>
            <div className='row'>
                {this.state.arti.map((item)=>{
                    return <div className='col-md-4 my-2' key={item.url}>
                    <NewsItem title={item.title ? item.title.slice(0, 45) : ""} description={item.description ? item.description.slice(0, 80): ""} imgUrl={item.urlToImage} newsUrl={item.url}/>
                </div>
                })}
                
            </div>
        </div>
        )
    }
}

export default News
