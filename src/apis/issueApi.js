const url = '/repos/facebook/react';

export class IssueApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async repository() {
    const response = await this.httpClient.fetch(url, {
      method: 'GET',
    });
    return response.json();
  }

  async issueList(page) {
    const response = await this.httpClient.fetch(
      `${url}/issues?sort=comments&per_page=15&page=${page}`,
      {
        method: 'GET',
      }
    );
    return response.json();
  }

  async issueDetail(issueNum) {
    const response = await this.httpClient.fetch(`${url}/issues${issueNum}`, {
      method: 'GET',
    });
    return response.json();
  }
}
