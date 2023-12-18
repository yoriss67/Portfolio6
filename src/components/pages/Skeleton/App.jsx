import React, { useState, useEffect } from "react";
import "./App.css";
import dummyData from "./data";
import CardList from "./CardList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {
        videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <CardList list={list} />
              <hr />
            </section>
          );
        })}
    </div>
  );
};
export default App;
