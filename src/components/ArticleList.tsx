// src/components/ArticleList.tsx
import React, { useState } from "react";
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

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles.map(article => {
        return <ArticleCard key={article.id} article={article} />
      })}
    </div>
  );
}
