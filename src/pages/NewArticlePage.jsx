import React from "react";
import { Form } from "react-router-dom";

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
