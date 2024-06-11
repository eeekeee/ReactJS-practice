import React from "react";
import { Outlet } from "react-router-dom";

function ArticleRootLayout() {
  return (
    <div>
      <p>Article Root Layout</p>
      <Outlet />
    </div>
  );
}

export default ArticleRootLayout;
