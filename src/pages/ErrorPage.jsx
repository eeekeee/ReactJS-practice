import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  let message = "오류 발생";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    message = "잘못된 주소";
  }
  return (
    <>
      <h1>Error</h1>
      <p>{message}</p>
    </>
  );
}

export default ErrorPage;
