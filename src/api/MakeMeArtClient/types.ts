export interface TResponseSuccess<T = null> {
  message: string;
  status: 'OK';
  data: T;
}
export interface TResponseQueue {
  message: string;
  status: 'queued';
}

export interface TResponseError {
  message: string;
  status: 'Error';
  data?: null;
  errors?: {
    [k: string]: string;
  };
}

export type TResponse<T = undefined> = TResponseSuccess<T> | TResponseError;
