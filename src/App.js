import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import ArticlesPage, { loader as ArticlesLoader } from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import NewArticlePage from "./pages/NewArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import ArticlesRootLayout from "./pages/ArticleRootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "articles",
        element: <ArticlesRootLayout />,
        children: [
          {
            index: true,
            element: <ArticlesPage />,
            loader: ArticlesLoader,
          },
          {
            path: "new",
            element: <NewArticlePage />,
            action: (request) => {
              console.log(request.request);
              console.log(request.request.body);
            },
          },
          { path: ":articleId", element: <ArticleDetailPage /> },
          { path: ":articleId/edit", element: <EditArticlePage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
