import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./app";
import { HomePage } from "./pages/home-page/home-page";

import { GoBack } from "./components/go-back/go-back";
import { Container } from "./components/containers/container/container";

import "burger-menu/lib/index.css";
import "./index.css";
import { ErrorPage } from "./pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/faq",
        element: (
          <Container>
            <GoBack />
          </Container>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/payment",
        element: (
          <Container>
            <GoBack />
          </Container>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/return",
        element: (
          <Container>
            <GoBack />
          </Container>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/research",
        element: (
          <Container>
            <GoBack />
          </Container>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/owner-room",
        element: (
          <Container>
            <GoBack />
          </Container>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

