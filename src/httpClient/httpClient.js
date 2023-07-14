export class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  fetch(url, options = {}) {
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
