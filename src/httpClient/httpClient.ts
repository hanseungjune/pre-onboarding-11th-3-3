export class HttpClient {
  private baseURL;

  constructor(baseURL: string | undefined) {
    this.baseURL = baseURL;
  }

  fetch(url: string, options: any = {}) {
    return fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`,
        ...options.headers,
      },
    });
  }
}
