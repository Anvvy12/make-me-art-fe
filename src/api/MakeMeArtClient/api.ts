import type MakeMeArtClient from './MakeMeArtClient';
import { art } from './routes';

export const BindAllApis = (thisArg: MakeMeArtClient) => {
  return {
    art: { getArtType: art.getAllArtTypes.bind(thisArg) },
  };
};
