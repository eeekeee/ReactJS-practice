import { Suspense } from "react";
import { Link, Await, useLoaderData, json, defer } from "react-router-dom";

function ArticlesPage() {
  const { articles } = useLoaderData();

  return (
    <div>
      <Link to={"new"}>New</Link>
      <p>ArticlesPage</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={articles}>
          {(loadedPost) => (
            <ol>
              {loadedPost.map((post) => (
                <li key={post.id}>
                  <Link to={`${post.id}`}>{post.title}</Link>
                </li>
              ))}
            </ol>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default ArticlesPage;

async function loadArticles() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(response);

  if (response.status !== 200) {
    // throw new Response(JSON.stringify({ message: "POST 불러오기 실패" }), {
    //   status: 500,
    // });
    return json({ message: "POST 불러오기 실패" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function loader() {
  return defer({
    articles: loadArticles(),
  });
}