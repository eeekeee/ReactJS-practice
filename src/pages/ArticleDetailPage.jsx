import { useParams, json, useLoaderData } from "react-router-dom";

function ArticleDetailPage() {
  const data = useLoaderData();
  const params = useParams();

  console.log(data);
  return (
    <>
      <p>Article Detail Page</p>
      <p>{params.articleId}</p>
      <p>title : {data.title}</p>
      <p>body : {data.body}</p>
    </>
  );
}

export default ArticleDetailPage;

export async function loader({ request, params }) {
  const id = params.articleId;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  if (response.status !== 200) {
    return json({ message: "Detail Page 불러오기 실패" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}
