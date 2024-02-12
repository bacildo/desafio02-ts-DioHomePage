import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CardContaInfoUser } from "../components/CardContaInfoUser";
import { IUserData } from "../interfaces/UserData";
import { useEffect, useState } from "react";
import { api } from "../api";

export const ContaInfo = () => {
  const [userData, setUserdata] = useState<null | IUserData>();

  useEffect(() => {
    const apiGet = async () => {
      const data: any | IUserData = await api;
      setUserdata(data);
    };
    apiGet();
  }, []);

  return (
    <>
      <SimpleGrid columns={2} spacing={10} paddingTop={15}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner color="white" />
          </Center>
        ) : (
          <>
            <CardContaInfoUser mainText="Nome" text={`${userData.nome}`} />
            <CardContaInfoUser mainText="Email" text={`${userData.email}`} />
          </>
        )}
      </SimpleGrid>
      <Link to="/conta/1"></Link>
    </>
  );
};
