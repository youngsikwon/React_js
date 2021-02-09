import React, { useState, useEffect, useCallback } from "react";
import dotenv from "dotenv";
import Loading from "../components/Loading/Loading";
import "./MainNewsContainer.scss";
import MainNews from "../components/News/MainNews";
import Error from "../components/Error/Error";
dotenv.config();

const MainNewsContainer = () => {
  const [data, setData] = useState(null);

  const fetchNewsAPI = useCallback(async () => {
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetchNewsAPI();
  }, []);

  return (
    <div className="main">
      {data === null ? (
        <Loading />
      ) : data === undefined ? (
        <Error />
      ) : (
        <MainNews newsData={data.articles} />
      )}
    </div>
  );
};

export default MainNewsContainer;
