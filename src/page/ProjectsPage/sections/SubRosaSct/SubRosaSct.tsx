import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import subRosaVideo from 'assets/lowImg/projects/sub-rosa/IMG_3468.MP4';
import heroImg from 'assets/lowImg/projects/sub-rosa/IMG_3772.webp';
import processImg from 'assets/lowImg/projects/sub-rosa/IMG_3786.webp';
import residencyImg from 'assets/lowImg/projects/sub-rosa/sub-rosa-3.webp';
import cn from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowIcon from 'svg/arrow.svg?react';
import s from './SubRosaSct.module.scss';

export default function SubRosaSct() {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'page.projects.sub_rosa',
  });

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={cn(s.SubRosaSct)} aria-labelledby='sub-rosa-title'>
      <div className={s.panel}>
        <span className={s.glow} aria-hidden='true' />

        <div className={s.header}>
          <p className={s.eyebrow}>{t('eyebrow')}</p>
          <h2 id='sub-rosa-title'>{t('title')}</h2>
          <p className={s.subtitle}>{t('subtitle')}</p>
        </div>

        {/* MUI styles are emitted outside CSS layers, so properties MUI owns
            (background, padding, margins) are reset through `sx` — module
            classes in `@layer section` would lose to them. */}
        <Accordion
          className={s.accordion}
          expanded={isExpanded}
          disableGutters
          square
          elevation={0}
          slotProps={{ heading: { component: 'div' } }}
          sx={{
            backgroundColor: 'transparent',
            color: 'inherit',
            boxShadow: 'none',
            '&::before': { display: 'none' },
          }}
          onChange={(_, expanded) => setIsExpanded(expanded)}
        >
          <AccordionSummary
            className={s.summary}
            id='sub-rosa-summary'
            aria-controls='sub-rosa-details'
            sx={{
              padding: 0,
              minHeight: 0,
              '& .MuiAccordionSummary-content': {
                margin: 0,
                display: 'block',
              },
            }}
          >
            <span className={s.summaryGrid}>
              <span className={cn(s.media, s.heroMedia)}>
                <img src={heroImg} alt={t('hero_alt')} loading='lazy' />
              </span>

              <span className={s.summaryText}>
                <span className={s.intro}>{t('intro')}</span>

                <span className={s.toggle}>
                  <span className={s.toggleLabel}>
                    {isExpanded ? t('less') : t('more')}
                  </span>
                  <span className={s.toggleIcon}>
                    <ArrowIcon
                      className={cn(s.expandIcon, {
                        [s.expanded]: isExpanded,
                      })}
                    />
                  </span>
                </span>
              </span>
            </span>
          </AccordionSummary>

          <AccordionDetails
            className={s.details}
            id='sub-rosa-details'
            sx={{ padding: 0, paddingTop: 'clamp(36px, 5vw, 72px)' }}
          >
            <article className={s.chapter}>
              <div className={s.chapterHead}>
                <span className={s.chapterNum}>01</span>
                <h3>{t('concept_title')}</h3>
              </div>

              <div className={s.chapterBody}>
                <p>{t('concept_1')}</p>
                <p>{t('concept_2')}</p>
                <p className={s.lead}>{t('concept_3')}</p>
              </div>
            </article>

            <figure className={cn(s.media, s.bleed)}>
              <img src={processImg} alt={t('process_alt')} loading='lazy' />
            </figure>

            <article className={s.chapter}>
              <div className={s.chapterHead}>
                <span className={s.chapterNum}>02</span>
                <h3>{t('story_title')}</h3>

                <figure className={cn(s.media, s.asideMedia)}>
                  <img
                    src={residencyImg}
                    alt={t('residency_alt')}
                    loading='lazy'
                  />
                </figure>
              </div>

              <div className={s.chapterBody}>
                <p>{t('story_1')}</p>
                <blockquote className={s.quote}>{t('story_quote')}</blockquote>
                <p>{t('story_2')}</p>
              </div>
            </article>

            <figure className={cn(s.media, s.bleed, s.videoFigure)}>
              {/* biome-ignore lint/a11y/useMediaCaption: the process footage has no speech, the figcaption below describes it. */}
              <video
                className={s.video}
                src={subRosaVideo}
                poster={processImg}
                controls
                playsInline
                preload='none'
              />
              <figcaption>{t('video_caption')}</figcaption>
            </figure>

            <dl className={s.meta}>
              <div>
                <dt>{t('location_label')}</dt>
                <dd>{t('location_value')}</dd>
              </div>
              <div>
                <dt>{t('artist_label')}</dt>
                <dd>{t('artist_value')}</dd>
              </div>
            </dl>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
