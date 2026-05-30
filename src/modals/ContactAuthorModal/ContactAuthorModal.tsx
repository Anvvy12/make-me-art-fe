import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
} from '@mui/material';

import CloseIcon from 'svg/close-icon.svg?react';
import s from './ContactAuthorModal.module.scss';
import { useContactAuthorForm } from './hooks/useContactAuthorForm';
import { useTranslation } from 'react-i18next';

type TProps = {
  artworkTitle: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactAuthorModal({
  artworkTitle,
  isOpen,
  onClose,
}: TProps) {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'common.contact_modal',
  });

  const formik = useContactAuthorForm({
    artworkTitle,
    onClose,
  });

  const handleClose = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='contact-author-title'
      maxWidth='sm'
      fullWidth
    >
      <IconButton
        className={s.closeBtn}
        type='button'
        aria-label={t('close_label')}
        onClick={handleClose}
      >
        <CloseIcon className={s.closeIcon} />
      </IconButton>

      <DialogContent className={s.dialogContent}>
        <div className={s.header}>
          <p>{t('title')}</p>
          <h2 id='contact-author-title'>{artworkTitle}</h2>
        </div>

        <form className={s.form} noValidate onSubmit={formik.handleSubmit}>
          <TextField
            className={s.field}
            name='name'
            label={t('name_label')}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            fullWidth
          />

          <TextField
            className={s.field}
            name='email'
            label={t('email_label')}
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
          />

          <TextField
            className={s.field}
            name='message'
            label={t('message_label')}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            fullWidth
            multiline
            placeholder={t('message_placeholder')}
            minRows={5}
          />

          <Button
            className={s.submitBtn}
            type='submit'
            disabled={!formik.dirty && formik.isValid}
            loading={formik.isSubmitting}
          >
            {t('submit_btn')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
