import MakeMeArtClient from './MakeMeArtClient';

import { TMakeMeArtToken } from './types';
// get user language
const CURRENT_LANGUAGE = localStorage.getItem(
  import.meta.env.VITE_LOCAL_STORAGE_LANGUAGE_KEY
);

// use this value from the local storage to replace the base api url on the stage
// This is necessary so that you can launch (locally) another environment for requests in the deployed project
const LOCAL_BASE_URL = localStorage.getItem('api_url');

// detect local storage url
const isLocalStorageURL = LOCAL_BASE_URL && LOCAL_BASE_URL !== '';

// config base url (from local or from env)
export const BASE_URL = isLocalStorageURL
  ? LOCAL_BASE_URL
  : String(import.meta.env.VITE_DEFAULT_API_URL);

export const EMAIL_BASE_URL = String(
  import.meta.env.VITE_EMAILJS_API_URL || BASE_URL
);

// Init Rest Clients
export const makeMeArtClient = new MakeMeArtClient({
  BASE_URL,
  defaultLanguage: CURRENT_LANGUAGE || import.meta.env.VITE_DEFAULT_LANGUAGE,
});

export const api = {
  art: makeMeArtClient.api.art,
};

// Init WS Client

// methods
export function login(newToken: TMakeMeArtToken) {
  makeMeArtClient.localAuthManager.login(newToken);
}

export function logout() {
  makeMeArtClient.localAuthManager.logout();
}
