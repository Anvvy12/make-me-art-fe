import {
  type DefinedInitialDataOptions,
  type UndefinedInitialDataOptions,
  useQuery,
} from '@tanstack/react-query';

import { api } from 'api';
import type { TArtTypesResponse } from 'api/MakeMeArtClient/routes/art/getAllArtTypes';

type TArtTypeOpts = Omit<
  DefinedInitialDataOptions<TArtTypesResponse>,
  'queryKey' | 'initialData'
>;

export const getArtTypeKey = () => ['art', 'getAllArtTypes'];

export default function useArtTypeQry(options?: TArtTypeOpts) {
  const opts = getArtTypeOpts(options);
  return useQuery<TArtTypesResponse>(opts);
}

export function getArtTypeOpts(
  options?: TArtTypeOpts
): UndefinedInitialDataOptions<TArtTypesResponse> {
  return {
    ...options,
    queryKey: getArtTypeKey(),
    queryFn: () => api.art.getArtType(),
  };
}
