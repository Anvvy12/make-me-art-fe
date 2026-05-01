import MakeMeArtClient from './MakeMeArtClient';

import { TMakeMeArtToken } from './types';
import { LOCAL_STORAGE_LANGUAGE_KEY } from 'constants/LANGUAGES_CONSTANTS';

// get user language
const CURRENT_LANGUAGE = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY);

// use this value from the local storage to replace the base api url on the stage
// This is necessary so that you can launch (locally) another environment for requests in the deployed project
const LOCAL_BASE_URL = localStorage.getItem('api_url');

// detect local storage url
const isLocalStorageURL = LOCAL_BASE_URL && LOCAL_BASE_URL !== '';

// config base url (from local or from env)
export const BASE_URL = isLocalStorageURL
  ? LOCAL_BASE_URL
  : String(process.env.REACT_APP_API_URL);

// Init Rest Client
export const altrisRESTClient = new MakeMeArtClient({
  BASE_URL,
  defaultLanguage: CURRENT_LANGUAGE || process.env.REACT_APP_DEFAULT_LANGUAGE,
});

export const api = altrisRESTClient.api;

// Init WS Client
export const altrisWSClient = new MakeMeArtClient({
  BASE_URL: String(process.env.REACT_APP_WS_URL),
});

export const ws = altrisWSClient;

// methods
export function login(newToken: TMakeMeArtToken) {
  altrisRESTClient.localAuthManager.login(newToken);
  altrisWSClient.localAuthManager.login(newToken);
}

export function logout() {
  altrisRESTClient.localAuthManager.logout();
  altrisWSClient.localAuthManager.logout();
}
