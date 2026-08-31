import cn from 'classnames';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import s from './ProjectsPage.module.scss';
import SubRosaSct from './sections/SubRosaSct';

export default function ProjectsPage() {
  const { t } = useTranslation(undefined, { keyPrefix: 'page.projects' });

  return (
    <>
      <Helmet>
        <title>Projects | Roman Sophie</title>

        <meta
          name='description'
          content='Art projects by Roman Sophie, including the monumental stained-glass work made from guests bottles for the Sub Rosa bar.'
        />
      </Helmet>
      <section className={cn(s.ProjectsPage)}>
        <div className={s.header}>
          <h1>{t('title')}</h1>
          <p className={s.description}>{t('description')}</p>
        </div>

        <SubRosaSct />
      </section>
    </>
  );
}
