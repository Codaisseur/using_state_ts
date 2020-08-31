// src/components/ArticleList.tsx
import React, { useState, useEffect } from "react";
import Timeout from "await-timeout";
import axios from "axios";

import ArticleCard, { Article } from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>();

  const clear = () => {
    setArticles([]);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // fake waiting..
      await Timeout.set(2000);

      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    
      console.log("Got back:", res);
      setArticles(res.data.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          content: item.body,
        };
      }));
    }
    doSomeDataFetching();
  }, [setArticles]);

  return (
    <div>
      <p><button onClick={clear}>Clear articles</button></p>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles ? (
        articles.map(article => {
          return <ArticleCard key={article.id} article={article} />
        })
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
}
