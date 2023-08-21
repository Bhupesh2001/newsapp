import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://t4.ftcdn.net/jpg/04/70/29/87/360_F_470298738_1eHqTZ0B5AvB3emaESPpvQ93227y7P0l.jpg" } className="card-img-top" style={{height:"14rem"}} alt="img"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
