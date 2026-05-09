import { TResponseError } from '../../types';
import BaseClient from 'api/BaseClient';
import { AxiosRequestConfig, isAxiosError } from 'axios';

/**
 * @function getAllArtTypes
 * @alias getAllArtTypes
 * @see https://github.com/axios/axios
 */

export interface TAPIGetArtType {
  TError: TResponseError;
  TSuccess: {
    data: object;
  };
}

export type TError = TAPIGetArtType['TError'];
export type TSuccess = TAPIGetArtType['TSuccess'];

export async function getAllArtTypes(
  this: BaseClient,
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const { data } = await this.client.get<TSuccess>(`/art/art-type/`, config);
    return data;
  } catch (error: unknown) {
    if (isAxiosError<TError>(error)) {
      if (error.response?.data?.status === 'Error') throw error.response.data;

      throw {
        message: error.message,
        status: error.response?.status,
      };
    }

    throw error;
  }
}
