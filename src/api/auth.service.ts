import { IUser } from "../Interfaces";
import instance from "./api.service";

type LoginType = {
  accessToken: string,
  user: { email: string, id: number }
}

export const login = (data: IUser): Promise<LoginType> => {
  return instance.post("login", data)
}