import { Button } from "@chakra-ui/react";
import { IButton } from "../interfaces/Button";
import { login } from "../services/login";

export const LoginButton = ({ data }: IButton) => {
  const button = () => {
    login();
  };
  return (
    <Button
      onClick={() => {
        button();
      }}
      size="sm"
      width="15%"
      borderInline="Background"
      borderRadius="15px"
    >
      {" "}
      {data}{" "}
    </Button>
  );
};
