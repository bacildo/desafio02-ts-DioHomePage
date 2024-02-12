import { api } from "../api";
import { IConta } from "../interfaces/Conta";


export const Login = async (email: string, senha:string): Promise<boolean> => {
  const data: any = await api;

  if (email !== data.email || senha !== data.senha) {
    return false;
  } else {
    return true;
  }
};
export const LoggedData = async (): Promise<IConta> => {
  const data: any = await api;
  if(data){
    return data
  } else{
    throw new Error('Dados de usuário não encontrados')
  }
};



