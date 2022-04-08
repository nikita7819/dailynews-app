import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const NewsContent = (props) => {

  const capitalizeLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async() => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40)
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${capitalizeLetter(props.category)} - DailyNews`;
    updateNews();
  }, [])
  


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };


  return (
    <>
      <h2 className="text-center" style={{margin:'35px 0px', marginTop:'90px'}}>DailyNews - Top {capitalizeLetter(props.category)} Headlines</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
      <div className="container">
        <div className="row">
          {articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <Newsitem
                    title={ele.title ? ele.title.slice(0, 35) : ""}
                    desc={ele.description ? ele.description.slice(0, 80) : ""}
                    imgUrl={ele.urlToImage}
                    newsUrl={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                    source={ele.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
    </>
  );
}


NewsContent.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

NewsContent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsContent;
