import React from "react";

const Newsitem = (props) => {
    let {title,desc,imgUrl,newsUrl,author,date,source} = props;
    return (
      <div>
        <div className="card my-3" >
              <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
                <span className="badge rounded-pill bg-success" >
                {source}
                </span>
              </div>
          <img className="card-img-top" src={imgUrl?imgUrl:"https://images.pexels.com/photos/6000154/pexels-photo-6000154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              {title}... 
            </h5>
            <p className="card-text">
             {desc}...
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-success">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;
