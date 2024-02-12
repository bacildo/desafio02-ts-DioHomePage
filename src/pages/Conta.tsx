import { Button, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { CardContaInfoUser } from "../components/CardContaInfoUser";
import { IUserData } from "../interfaces/UserData";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

export const Conta = () => {
  const [userData, setUserdata] = useState<null | IUserData>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AppContext);
  const getActualData = new Date().toLocaleDateString("pt-BR");
  const getActualHour = new Date().getHours();
  const getActualMinutes = new Date().getMinutes();

  if (userData && id !== userData.id) {
    navigate("/");
  }

  !user && navigate("/");

  useEffect(() => {
    const apiGet = async () => {
      const data: any | IUserData = await api;
      setUserdata(data);
    };
    apiGet();
  }, []);

  const nextPage = () => {
    navigate("/containfo");
  };

  return (
    <Center>
      <SimpleGrid columns={2} spacing={10} paddingTop={15}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner color="white" />
          </Center>
        ) : (
          <>
            <CardContaInfoUser
              mainText={`Bem vindo,${userData?.nome}!`}
              text={`${getActualData} ${getActualHour}:${getActualMinutes}`}
            />
            <CardContaInfoUser mainText="Saldo" text={`R$ ${userData.saldo}`} />
          </>
        )}

        <Button onClick={() => nextPage()} color="#000000" padding="2px">
          Info Conta
        </Button>
      </SimpleGrid>
    </Center>
  );
};
