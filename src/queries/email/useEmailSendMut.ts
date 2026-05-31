import { MutationOptions, useMutation } from '@tanstack/react-query';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { TError } from 'api/MakeMeArtClient/routes/art/getAllArtTypes';

export type TPayload = {
  title: string;
  name: string;
  email: string;
  message: string;
};
export type TSuccess = EmailJSResponseStatus;
export type TEmailSendMutOpts = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey' | 'mutationFn'
>;

export const getEmailSendKey = () => ['Email', 'EmailSend'];

export default function useEmailSendMut(options?: TEmailSendMutOpts) {
  return useMutation<TSuccess, TError, TPayload>({
    ...options,
    mutationKey: getEmailSendKey(),
    mutationFn: async ({ title, name, email, message }: TPayload) => {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title,
          name,
          email,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      return response as TSuccess;
    },
  });
}
