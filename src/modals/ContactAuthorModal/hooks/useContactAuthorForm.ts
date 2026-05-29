import { useFormik } from 'formik';

export type TContactAuthorFormValues = {
  name: string;
  email: string;
  message: string;
};

const initialValues: TContactAuthorFormValues = {
  name: '',
  email: '',
  message: '',
};

function validate(values: TContactAuthorFormValues) {
  const errors: Partial<TContactAuthorFormValues> = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
}

type TArgs = {
  artworkTitle: string;
  onSuccess: () => void;
};

export function useContactAuthorForm({ artworkTitle, onSuccess }: TArgs) {
  return useFormik<TContactAuthorFormValues>({
    initialValues,
    validate,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.info('Contact with author form submitted', {
        artworkTitle,
        ...values,
      });

      setSubmitting(false);
      resetForm();
      onSuccess();
    },
  });
}
