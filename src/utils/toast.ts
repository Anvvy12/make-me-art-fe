import { Slide, toast, ToastOptions } from 'react-toastify';

const notify = (
  type: 'success' | 'error' | 'info',
  message: string,
  autoCloseTimeout = 5000
) => {
  const generalProps: ToastOptions = {
    position: 'top-left',
    autoClose: autoCloseTimeout,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    icon: false,
    theme: 'colored',
  };

  switch (type) {
    case 'success':
      return toast.success(message, {
        ...generalProps,
      });
    case 'error':
      return toast.error(message, {
        ...generalProps,
      });
    case 'info':
      return toast.info(message, {
        ...generalProps,
      });
    default:
      break;
  }
};

export default notify;
