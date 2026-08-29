import axios, { type AxiosInstance } from 'axios';

export default class BaseClient {
  public client: AxiosInstance;
  protected BASE_URL: string;

  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
    this.client = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
    });
  }
}
