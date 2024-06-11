import React from "react";
import { useParams } from "react-router-dom";

function ArticleDetailPage() {
  const params = useParams();

  return (
    <>
      <p>Article Detail Page</p>
      <p>{params.articleId}</p>
    </>
  );
}

export default ArticleDetailPage;
