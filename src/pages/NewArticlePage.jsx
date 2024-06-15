import React from "react";
import { Form, redirect } from "react-router-dom";

function NewArticlePage() {
  return (
    <div>
      <p>New Article Page</p>
      <Form method="post">
        <span>Title</span>
        <input type="text" name="title" />
        <span>Body</span>
        <input type="text" name="body" />
        <button>New</button>
      </Form>
    </div>
  );
}

export default NewArticlePage;

export async function action({ request, params }) {
  const data = await request.formData();

  const articleData = {
    title: data.get("title"),
    body: data.get("body"),
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });

  if (!response.ok) {
    return new Response({ message: "Article 생성 오류" }, { status: 500 });
  }

  return redirect("/articles");
}