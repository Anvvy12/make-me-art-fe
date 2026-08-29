import { useFormik } from 'formik';
import useEmailSendMut from 'queries/email/useEmailSendMut';
import { useTranslation } from 'react-i18next';
import { trackEvent } from 'services/analytics';
import notify from 'utils/toast';
import * as yup from 'yup';

type TContactAuthorFormValues = {
  name: string;
  email: string;
  message: string;
  title: string;
};

type TArgs = {
  initMessage: string | undefined;
  title: string | undefined;
  onClose: () => void;
};

export function useInitForm({ title = '', initMessage, onClose }: TArgs) {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'common.contact_modal',
  });

  const { t: tNotify } = useTranslation(undefined, {
    keyPrefix: 'common.notify',
  });

  const { mutate } = useEmailSendMut();

  return useFormik<TContactAuthorFormValues>({
    initialValues: {
      title: title,
      name: '',
      email: '',
      message: initMessage ?? '',
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      name: yup.string().trim().required(t('name_required')),
      email: yup
        .string()
        .trim()
        .email(t('email_invalid'))
        .required(t('email_required')),

      message: yup.string().trim().required(t('message_required')),
    }),

    onSubmit: (values, formikHelpers) => {
      mutate(values, {
        onSuccess: () => {
          trackEvent('generate_lead', {
            lead_source: 'contact_form',
            artwork_name: values.title || undefined,
            form_name: 'contact_author',
          });
          notify('success', tNotify('success'));
        },
        onError: () => {
          notify('error', tNotify('error'));
        },
        onSettled: () => {
          formikHelpers.resetForm();
          onClose();
        },
      });
    },
  });
}
