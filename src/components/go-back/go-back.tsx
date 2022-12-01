import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/button";

export const GoBack: FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/");
      }}
    >
      назад к главной странице
    </Button>
  );
};
