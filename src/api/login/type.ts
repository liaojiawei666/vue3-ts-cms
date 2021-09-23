export interface IAccount {
  name: string;
  password: string;
}

export interface ILoginResult {
  id: number;
  name: string;
  token: string;
}

export interface IRole {
  id: number;
  name: string;
  intro: string;
  createAt: Date;
  updateAt: Date;
}

export interface IDepartment {
  id: number;
  name: string;
  parentId: number | null;
  createAt: Date;
  updateAt: Date;
  leader: string;
}

export interface IUserInfo {
  id: number;
  name: string;
  realname: string;
  cellphone: number;
  enable: number;
  createAt: Date;
  updateAt: Date;
  role: IRole;
  department: IDepartment;
}

export interface Child {
  id: number;
  url: string;
  name: string;
  sort: number;
  type: number;
  children?: Child[];
  parentId: number;
}

export interface IUserMenus {
  id: number;
  name: string;
  type: number;
  url: string;
  icon: string;
  sort: number;
  children?: Child[];
}
