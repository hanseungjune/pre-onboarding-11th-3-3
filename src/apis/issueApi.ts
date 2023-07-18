import { HttpClient } from 'httpClient/httpClient';

export class IssueApi {
  private httpClient: HttpClient;
  private readonly URL = '/repos/facebook/react';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async repository() {
    const response = await this.httpClient.fetch(this.URL, {
      method: 'GET',
    });
    return response.json();
  }

  async issueList(page: number) {
    const response = await this.httpClient.fetch(
      `${this.URL}/issues?sort=comments&per_page=15&page=${page}`,
      {
        method: 'GET',
      }
    );
    return response.json();
  }

  async issueDetail(issueNum: number) {
    const response = await this.httpClient.fetch(
      `${this.URL}/issues/${issueNum}`,
      {
        method: 'GET',
      }
    );
    if (response.status === 200) {
      return response.json();
    }
  }
}
