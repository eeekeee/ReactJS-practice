import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

function ArticlesPage() {
  const posts = useLoaderData();

  if (posts.isError) {
    return <p>{posts.message}</p>;
  }

  return (
    <div>
      <p>ArticlesPage</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={posts}>
          {(loadedPost) => (
            <ol>
              {loadedPost.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ol>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default ArticlesPage;

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(response);

  if (response.status !== 200) {
    throw new Response(JSON.stringify({ message: "POST 불러오기 실패" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData;
  }
}
