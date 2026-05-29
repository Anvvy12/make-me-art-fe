import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

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
  return useFormik<TContactAuthorFormValues>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),

      email: yup
        .string()
        .trim()
        .email('Enter a valid email')
        .required('Email is required'),

      message: yup.string().trim().required('Message is required'),
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
