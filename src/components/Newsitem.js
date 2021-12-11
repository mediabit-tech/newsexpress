// import all libraries and components here for use in Indian News Express
import React from 'react'

// Create a Newsitem name arrow function for holding the all information related to the news with return statement
const Newsitem = (props) => {

    // Declare all props here
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    // return the statement
    return (

        // Create a layout of title, author, date and description for display the news in DOM
        <div>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '-5px', top: '-5px' }}>
                    <span className="badge rounded-pill bg-danger"> {source}</span>
                </div>
                <img src={!imageUrl ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <p className="card-text">{description}...</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
}

//  Export this page for another pages
export default Newsitem
