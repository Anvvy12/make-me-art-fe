import { art } from './routes';
import MakeMeArtClient from './MakeMeArtClient';

export const BindAllApis = (thisArg: MakeMeArtClient) => {
  return {
    art: { getArtType: art.getAllArtTypes.bind(thisArg) },
  };
};
