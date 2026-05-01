import cn from 'classnames';

import s from './TypeGalleryPage.module.scss';
import { useLocation, useParams } from 'react-router-dom';

export default function TypeGalleryPage() {
  const { typeName } = useParams();
  const { state } = useLocation();
  return (
    <section className={cn(s.TypeGalleryPage)}>
      <h1>{state?.title || typeName}</h1>
      <p>{state?.description}</p>
    </section>
  );
}
