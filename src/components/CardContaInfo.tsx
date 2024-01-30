import { Box, Text } from "@chakra-ui/react";
import { ICardContaInfo } from "../interfaces/CardContaInfo";

export const CardContaInfo = ({ mainText, text }: ICardContaInfo) => {
  return (
    <Box
      backgroundColor="white"
      minHeight="130px"
      padding={8}
      borderRadius="25px"
    >
      <Text fontSize="2xl" fontWeight="bold">
        {mainText}
      </Text>

      <Text fontSize="xl">{text}</Text>
    </Box>
  );
};
