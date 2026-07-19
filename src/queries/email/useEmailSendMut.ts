import { MutationOptions, useMutation } from '@tanstack/react-query';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import type { TResponseError } from 'api/types';

type TPayload = {
  title: string;
  name: string;
  email: string;
  message: string;
};
type TSuccess = EmailJSResponseStatus;
type TEmailSendMutOpts = Omit<
  MutationOptions<TSuccess, TResponseError, TPayload>,
  'mutationKey' | 'mutationFn'
>;

export const getEmailSendKey = () => ['Email', 'EmailSend'];

export default function useEmailSendMut(options?: TEmailSendMutOpts) {
  return useMutation<TSuccess, TResponseError, TPayload>({
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
