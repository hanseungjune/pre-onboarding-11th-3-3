export interface IRepository {
  name: string;
  owner: { login: string };
  open_issues: number;
}

export interface IIssue {
  number: number;
  title: string;
  comments: number;
  updated_at: string;
  state: string;
  user: IUser;
}

export interface IIssueDetail extends IIssue {
  body: string;
}

export interface IUser {
  avatar_url: string;
  login: string;
}
