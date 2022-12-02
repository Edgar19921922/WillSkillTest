import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/home-page/home-page";

import { GoBack } from "./components/go-back/go-back";
import { Container } from "./components/containers/container/container";

import "burger-menu/lib/index.css";
import "./index.css";
import { App } from "./App";

const goBack = (
  <Container>
    <GoBack />
  </Container>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<HomePage />} index={true} />
          <Route path="faq" element={goBack} />
          <Route path="payment" element={goBack} />
          <Route path="return" element={goBack} />
          <Route path="research" element={goBack} />
          <Route path="owner-room" element={goBack} />
        </Route>
      </Routes>
    </BrowserRouter>
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: "black",
      }}
    >
      12345
    </div>
  </React.StrictMode>
);
