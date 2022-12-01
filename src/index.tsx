import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./app";
import { HomePage } from "./pages/home-page/home-page";

import { GoBack } from "./components/go-back/go-back";
import { Container } from "./components/containers/container/container";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/faq",
        element: (
          <Container>
            <GoBack />
          </Container>
        ),
      },
      {
        path: "/payment",
        element: (
          <Container>
            <GoBack />
          </Container>
        ),
      },
      {
        path: "/return",
        element: (
          <Container>
            <GoBack />
          </Container>
        ),
      },
      {
        path: "/research",
        element: (
          <Container>
            <GoBack />
          </Container>
        ),
      },
      {
        path: "/owner-room",
        element: (
          <Container>
            <GoBack />
          </Container>
        ),
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
