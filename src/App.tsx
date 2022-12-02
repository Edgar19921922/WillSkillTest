import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
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
    <BrowserRouter basename="/WillSkillTest">
      <Header />
      <main>
        <Routes>
          <Route element={<HomePage />} path="home" />
          <Route path="faq" element={goBack} />
          <Route path="payment" element={goBack} />
          <Route path="return" element={goBack} />
          <Route path="research" element={goBack} />
          <Route path="owner-room" element={goBack} />
          <Route path="*" element={<Navigate to={"/home"} replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
