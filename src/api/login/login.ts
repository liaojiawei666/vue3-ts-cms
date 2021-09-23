import cmsRequest from "@/api";
import {
  IAccount,
  ILoginResult,
  IUserMenus,
  IUserInfo,
} from "@/api/login/type";
import { IDataType } from "@/api/request/type";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus = "/role/", //用法 /role/1/
}

export function accountLoginRequest(account: IAccount) {
  return cmsRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  });
}

export function requestUserInfoById<T>(id: number) {
  return cmsRequest.get<IDataType<IUserInfo>>({
    url: LoginAPI.LoginUserInfo + id,
  });
}

export function requestUserMenusByRoleId(id: number) {
  return cmsRequest.get<IDataType<IUserMenus[]>>({
    url: LoginAPI.UserMenus + id + "/menu",
  });
}
