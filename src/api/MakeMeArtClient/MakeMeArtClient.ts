import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import AuthManager from 'local-auth-manager';
import BaseClient from '../BaseClient';
import type { TMakeMeArtToken } from '../types';
import { BindAllApis } from './api';

interface TInitialConstructorProps {
  BASE_URL: string;
  redirectPath?: string;
  defaultLanguage?: string;
}

export default class MakeMeArtClient extends BaseClient {
  public localAuthManager: AuthManager<TMakeMeArtToken>;
  public readonly api = BindAllApis(this);
  private redirectPath;

  constructor({
    BASE_URL,
    redirectPath = '/',
    defaultLanguage = 'en',
  }: TInitialConstructorProps) {
    super(`${BASE_URL}`);
    this._language = defaultLanguage; // language variable for request
    this.redirectPath = redirectPath; // redirect to path on exception or token expired

    // Simple class object created for session control inside client (browser)
    this.localAuthManager = new AuthManager<TMakeMeArtToken>({
      storageType: 'localStorage',
      // WARN: AltrisWSClient have some key!!
      tokenKey: `token`, // key in local or session storage
      parse: false,
      // EXAMPLE: altrisRESTClient.localAuthManager.tokenValidator(newToken)
      tokenValidator: (token: unknown): token is TMakeMeArtToken =>
        typeof token === 'string',
    });

    // axios config
    this.client.defaults.headers['Content-Type'] = 'application/json';
    this.client.interceptors.response.use(this.onResponse);
    this.client.interceptors.request.use(
      this.onRequest,
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  private _language: string;

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }

  private onResponse = (response: AxiosResponse) => {
    /*
     additional error checking when the status is 200
     but there is an error and Error is received in the response body
    */
    if (response.data.status === 'Error') {
      const error = new Error(
        response.data.message || response.data || 'Unknown error'
      );
      // @ts-expect-error
      (error as unknown).response = { data: response.data };
      throw error;
    }
    return response;
  };

  private onRequest = (
    request: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig => {
    if (this.localAuthManager.isValidToken(this.localAuthManager.token))
      request.headers.Authorization = `Bearer ${this.localAuthManager.token}`;
    request.headers.Language = this._language;
    return request;
  };
}
