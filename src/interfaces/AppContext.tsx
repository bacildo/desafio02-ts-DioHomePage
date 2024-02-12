import { IUserData } from "./UserData";

export interface IAppContext{
  user: IUserData;
  setUser: React.Dispatch<React.SetStateAction<IUserData>>;

}
