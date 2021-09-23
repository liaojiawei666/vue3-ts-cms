import { IUserInfo, IUserMenus } from "@/api/login/type";

export interface ILoginState {
  token?: string;
  userInfo?: IUserInfo;
  userMenus?: IUserMenus[];
}
