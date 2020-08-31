// src/components/ArticleList.tsx
import React, { useState, useEffect } from "react";
import Timeout from "await-timeout";

import ArticleCard, { Article } from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "What is React all about?",
      content:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      content: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      content:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ]);

  const clear = () => {
    setArticles([]);
  };

  useEffect(() => {
    async function waitForATimer() {
      console.log("A");
      await Timeout.set(2000); // time in milliseconds!
      console.log("B");
    }
    waitForATimer();
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
