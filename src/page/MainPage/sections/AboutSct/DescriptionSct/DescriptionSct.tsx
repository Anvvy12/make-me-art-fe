import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import s from './DescriptionSct.module.scss';
import Button from 'ui/Button';

export default function DescriptionSct() {
  const { t } = useTranslation(undefined, { keyPrefix: 'page.main.hero_sct' });

  return (
    <section className={cn(s.DescriptionSct)}>
      <p className={s.subTitle}>{t('subtitle')}</p>
      <h1 className={s.title}>{t('title')}</h1>
      <p className={s.description}>{t('description')}</p>
      <div className={s.actions}>
        <Button>{t('works_btn')}</Button>
        <Button variant={'outline'}>{t('about_btn')}</Button>
      </div>
    </section>
  );
}
