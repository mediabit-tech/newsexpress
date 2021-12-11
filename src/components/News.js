// import all libraries and components here for use in Indian News Express
import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// We are replace all class based component into functional based component
// Create a News name arrow function for define all the methods for displaying articles in DOM with return statement
const News = (props) => {

    // Declare useState method for all valid variables for articles
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    // Create a capitalizer arrow function for convert only first letter of string into Uppercase with return statement
    const capitalizeFirstLetter = (string) => {

        // Return statement output
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Create a updateNews async/await arrow function for update the news while scrolling
    const updateNews = async () => {

        // This setProgress is only for displaying progress result on the top of the page at 10%
        props.setProgress(10);

        // Declare the URL variable
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        // setLoading for spinner while page is initiating
        setLoading(true);

        // Fetch the data from URL variable
        let data = await fetch(url);

        // This setProgress is only for displaying progress result on the top of the page at 30%
        props.setProgress(30);

        // Parse the fetching URL data into JSON
        let parseData = await data.json();

        // This setProgress is only for displaying progress result on the top of the page at 70%
        props.setProgress(70);

        // Set the data of articles into DOM
        setArticles(parseData.articles);

        // setTotalResults line is load all the data while scrolling
        setTotalResults(parseData.totalResults);

        // setLoading for spinner while page is completing
        setLoading(false);

        // This setProgress is only for displaying progress result on the top of the page at 100%
        props.setProgress(100);
    }

    // useEffect() method is replace to componentDidMoount() method and its run only one time
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - Indian News Express`;

        // Callback function
        updateNews();
        // eslint-disable-next-line
    }, [])

    // Create a fetchMoreData async/await arrow function for loading more data while scrolling the page with reurn statement
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
    }

    return (

        // Insert the fetches data into DOM
        <>
            <h3 className="text-center" style={{ margin: '35px 0px', marginTop: '100px' }}>Indian News Express - Top <span className="badge rounded-pill bg-primary">{capitalizeFirstLetter(props.category)}</span> headlines</h3>
            
            {/* Loading statement with spinner while page is initiating */}
            {loading && <Spinner />}

            {/* InfiniteScroll Tag for holding the all data with scolling feature */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container" style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url}>
                                <Newsitem title={element.title} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

// Declare the defaultProps value of function with function name
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}

// Declare the propTypes of function with function name
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

//  Export this page for another pages
export default News
