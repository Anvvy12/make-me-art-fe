import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import { api } from 'api';
import { TSuccess } from 'api/MakeMeArtClient/routes/art/getAllArtTypes';

export type TArtType = UseQueryResult<TSuccess>;

export type TArtTypeOpts = Omit<
  DefinedInitialDataOptions<TSuccess>,
  'queryKey' | 'initialData'
>;

export const getArtTypeKey = () => ['art', 'getAllArtTypes'];

export default function useArtTypeQry(options?: TArtTypeOpts) {
  const opts = getArtTypeOpts(options);
  return useQuery<TSuccess>(opts);
}

export function getArtTypeOpts(
  options?: TArtTypeOpts
): UndefinedInitialDataOptions<TSuccess> {
  return {
    ...options,
    queryKey: getArtTypeKey(),
    queryFn: () => api.art.getArtType(),
  };
}
