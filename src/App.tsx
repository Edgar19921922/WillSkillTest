import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "./components/containers/container/container";
import { GoBack } from "./components/go-back/go-back";
import { Header } from "./components/layout/header/header";
import { HomePage } from "./pages/home-page/home-page";

const goBack = (
  <Container>
    <GoBack />
  </Container>
);

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <main>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route path="faq" element={goBack} />
          <Route path="payment" element={goBack} />
          <Route path="return" element={goBack} />
          <Route path="research" element={goBack} />
          <Route path="owner-room" element={goBack} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
