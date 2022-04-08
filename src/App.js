import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import NewsContent from './Components/NewsContent';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

 
    return (
      <>
        <Router>
          <div>
            <NavBar />
            <LoadingBar
              color='#006400'
              height={4}
              progress={progress}
            />
            <Routes>
              <Route exact path="/" element={<NewsContent setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />} />
              <Route exact path="/business" element={<NewsContent setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='in' category='business' />} />
              <Route exact path="/sports" element={<NewsContent setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='sports' />} />
              <Route exact path="/science" element={<NewsContent setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='science' />} />
              <Route exact path="/technology" element={<NewsContent setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='technology' />} />
              <Route exact path="/health" element={<NewsContent setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='in' category='health' />} />
              <Route exact path="/general" element={<NewsContent setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />} />
              <Route exact path="/entertainment" element={<NewsContent setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />} />
            </Routes>
          </div>
        </Router>
      </>
    )
}

export default App;
