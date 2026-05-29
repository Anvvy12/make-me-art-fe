import { Button, IconButton, Modal, TextField } from '@mui/material';

import CloseIcon from 'svg/close-icon.svg?react';
import s from './ContactAuthorModal.module.scss';
import { useContactAuthorForm } from './hooks/useContactAuthorForm';

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
  const formik = useContactAuthorForm({
    artworkTitle,
    onSuccess: onClose,
  });

  const handleClose = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <Modal
      className={s.modalOverlay}
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='contact-author-title'
    >
      <div
        className={s.modal}
        role='dialog'
        aria-modal='true'
        aria-labelledby='contact-author-title'
      >
        <IconButton
          className={s.closeBtn}
          type='button'
          aria-label='Close contact form'
          onClick={handleClose}
        >
          <CloseIcon className={s.closeIcon} />
        </IconButton>

        <div className={s.header}>
          <p>Contact with author</p>
          <h2 id='contact-author-title'>{artworkTitle}</h2>
        </div>

        <form className={s.form} noValidate onSubmit={formik.handleSubmit}>
          <TextField
            className={s.field}
            name='name'
            label='Name'
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
            label='Email'
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
            label='Message'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            fullWidth
            multiline
            minRows={5}
          />

          <Button
            className={s.submitBtn}
            type='submit'
            disabled={formik.isSubmitting}
          >
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
}
