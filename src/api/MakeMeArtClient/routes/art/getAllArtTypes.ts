import type BaseClient from 'api/BaseClient';
import { type AxiosRequestConfig, isAxiosError } from 'axios';
import type { TResponseError } from '../../../types';

/**
 * @function getAllArtTypes
 * @alias getAllArtTypes
 * @see https://github.com/axios/axios
 */

export type TArtTypesResponse = {
  data: object;
};

export async function getAllArtTypes(
  this: BaseClient,
  config?: AxiosRequestConfig
): Promise<TArtTypesResponse> {
  try {
    const { data } = await this.client.get<TArtTypesResponse>(
      `/art/art-type/`,
      config
    );
    return data;
  } catch (error: unknown) {
    if (isAxiosError<TResponseError>(error)) {
      if (error.response?.data?.status === 'Error') throw error.response.data;

      throw {
        message: error.message,
        status: error.response?.status,
      };
    }

    throw error;
  }
}
