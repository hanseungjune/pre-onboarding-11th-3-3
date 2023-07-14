import { HttpClient } from "httpClient/httpClient";

const url = '/repos/facebook/react';

export class IssueApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async repository() {
    const response = await this.httpClient.fetch(url, {
      method: 'GET',
    });
    return response.json();
  }

  async issueList(page: number) {
    const response = await this.httpClient.fetch(
      `${url}/issues?sort=comments&per_page=15&page=${page}`,
      {
        method: 'GET',
      }
    );
    return response.json();
  }

  async issueDetail(issueNum: number) {
    const response = await this.httpClient.fetch(`${url}/issues/${issueNum}`, {
      method: 'GET',
    });
    if (response.status === 200) {
      return response.json();
    }
  }
}
