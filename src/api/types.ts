export type TMakeMeArtToken = string;

export interface TResponseError {
  message: string;
  status: 'Error';
  data?: null;
  errors?: {
    [k: string]: string;
  };
}
