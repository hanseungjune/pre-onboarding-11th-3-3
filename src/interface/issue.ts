export interface IRepository {
  full_name: string;
  open_issues: number;
}

export interface IIssue {
  id: number;
  number: number;
  title: string;
  comments: number;
  updated_at: string;
  state: string;
  user: IUser;
}

export interface IIssueDetail extends IIssue {
  body: string;
  user: IUser;
}

export interface IUser {
  avatar_url: string;
  login: string;
  type: 'User' | 'Bot';
}
