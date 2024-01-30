import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardContaInfo } from "../components/CardContaInfo";
import { IUserData } from "../interfaces/UserData";
import { useEffect, useState } from "react";
import { api } from "../api";

export const Conta = () => {
  const [userData, setUserdata] = useState<null | IUserData>();

  useEffect(() => {
    const apiGet = async () => {
      const data: any | IUserData = await api;
      setUserdata(data);
    };
    apiGet();
  }, []);

  const getActualData = new Date().toLocaleDateString("pt-BR");
  const getActualHour = new Date().getHours();
  const getActualMinutes = new Date().getMinutes();

  return (
    <Center>
      <SimpleGrid columns={2} spacing={10} paddingTop={15}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner color="white" />
          </Center>
        ) : (
          <>
            <CardContaInfo
              mainText={`Bem vindo,${userData?.nome}!`}
              text={`${getActualData} ${getActualHour}:${getActualMinutes}`}
            />
            <CardContaInfo mainText="Saldo" text={`R$ ${userData.saldo}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};
