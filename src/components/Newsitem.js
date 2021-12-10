import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card">
                    <div  style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '-5px', top: '-5px'}}>
                    <span class="badge rounded-pill bg-danger"> {source}</span>
                    </div>
                    <img src={!imageUrl ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p class="card-text"><small class="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
