// src/components/ArticleCard.tsx
import React from "react";

export type Article = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <div className="Article">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}