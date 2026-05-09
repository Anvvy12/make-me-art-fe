import cn from 'classnames';

import studioFloorColor from 'img/exhibition/studio-floor-color.jpg';
import galleryInstallation from 'img/exhibition/gallery-installation.jpg';
import studioFloorMono from 'img/exhibition/studio-floor-mono.jpg';

import s from './ExhibitionSct.module.scss';

const statements = [
  {
    title: 'Людський ресурс',
    text: 'Творчість авторки - це візуальне дослідження людського ресурсу, його невичерпності та недостатньо поміченої сили. Будучи уважним спостерігачем, вона фіксує буденність, перетворюючи щоденну рутину на глибокі соціальні та емоційні маніфести.',
  },
  {
    title: 'Офісні планктони',
    text: 'Центральна частина експозиції - серія «Офісні планктони». Роботи народилися з тривалого спостереження за мешканцями апарт-готелю та відвідувачами коворкінгу. Живучи в епіцентрі ділового ритму, художниця документувала життя людей, чий побут обмежений стінами офісів.',
  },
  {
    title: 'Жінки з вікна майстерні',
    text: 'Окремий блок присвячено образу жінки, який Софі бачила з вікна майстерні: жінки в сарафанах, що підіймаються на гору з важкими пакунками; матері в халатах, що в ранковому тумані перуть речі руками; бабуся, яка шукає арахіс у кишені для дитини.',
  },
];

export default function ExhibitionSct() {
  return (
    <section className={cn(s.ExhibitionSct)} aria-labelledby='exhibition-title'>
      <div className={s.header}>
        <p className={s.eyebrow}>Експозиція / 2025-2026</p>
        <h2 id='exhibition-title'>Візуальне дослідження сили буденності</h2>
      </div>

      <div className={s.introGrid}>
        <div className={s.lead}>
          <p>
            Навіть у новорічну ніч, під супровід живої музики в холі готелю, ці
            «планктони» не полишали думок про роботу. Серія стала особистою
            рефлексією на страх втратити себе у нескінченному циклі, будучи
            такою наближеною до корпоративного життя.
          </p>
        </div>

        <div className={s.photoStack} aria-label='Фотографії процесу монтажу'>
          <figure className={cn(s.photo, s.photoLarge)}>
            <img src={galleryInstallation} alt='Софі монтує роботи в галереї' />
          </figure>
          <figure className={cn(s.photo, s.photoSmall)}>
            <img
              src={studioFloorColor}
              alt='Роботи Софі на підлозі майстерні'
            />
          </figure>
        </div>
      </div>

      <div className={s.statementGrid}>
        {statements.map((item) => (
          <article className={s.statement} key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className={s.finalBlock}>
        <figure className={s.monoPhoto}>
          <img
            src={studioFloorMono}
            alt='Чорно-біла фотографія Софі під час оформлення робіт'
          />
        </figure>

        <div className={s.finalText}>
          <span>Найінтимніша робота</span>
          <h3>Портрет жінки, що втратила все</h3>
          <p>
            Щоб передати глибину чужого болю, який художниця відчула як свій
            власний, вона використала власну кров. Через брак інструментів, що
            зламалися під час роботи над масштабним скляним проєктом, кров була
            здобута за допомогою булавки від годинника.
          </p>
          <p>
            Цей акт став найвищою точкою співпереживання - моментом, коли межа
            між творцем і об'єктом зникає.
          </p>
        </div>
      </div>
    </section>
  );
}
