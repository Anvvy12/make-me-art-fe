import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export type TContactAuthorFormValues = {
  name: string;
  email: string;
  message: string;
};

type TArgs = {
  artworkTitle: string;
  onSuccess: () => void;
};

export function useContactAuthorForm({ artworkTitle, onSuccess }: TArgs) {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'common.contact_modal',
  });

  return useFormik<TContactAuthorFormValues>({
    initialValues: {
      name: '',
      email: '',
      message: t('message_default', { artworkTitle }),
    },
    validationSchema: yup.object({
      name: yup.string().trim().required(t('name_required')),
      email: yup
        .string()
        .trim()
        .email(t('email_invalid'))
        .required(t('email_required')),

      message: yup.string().trim().required(t('message_required')),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            artworkTitle,
            name: values.name,
            email: values.email,
            message: values.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        resetForm();
        onSuccess();
      } catch (error) {
        console.error('Failed to send email', error);
      } finally {
        setSubmitting(false);
      }
    },
  });
}
