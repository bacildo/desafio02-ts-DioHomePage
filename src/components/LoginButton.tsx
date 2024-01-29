import { Button } from "@chakra-ui/react";
import { IButton } from "../interfaces/Button";


export const LoginButton = ({ click,message }: IButton) => {

  return (
    <Button
      onClick={click}
      size="sm"
      width="20%"
      borderInline="Background"
      borderRadius="15px" 
    >
      {message}
    </Button>
  );
};
