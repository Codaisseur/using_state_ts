// src/components/ArticleList.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";

import ArticleCard, { Article } from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);

  const clear = () => {
    setArticles([]);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
    
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    
      console.log("Got back:", res);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <p><button onClick={clear}>Clear articles</button></p>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles.map(article => {
        return <ArticleCard key={article.id} article={article} />
      })}
    </div>
  );
}
