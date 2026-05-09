import cn from 'classnames';
import DescCart from './components/DescCart';
import s from './ArtSct.module.scss';
import SHodunnukImg from 'img/title-art/shodennuk.jpg';
import ShpaleruImg from 'img/title-art/shpaleru.jpg';
import { useTranslation } from 'react-i18next';

export default function ArtSct() {
  const { t } = useTranslation(undefined, { keyPrefix: 'page.main.art_sct' });

  return (
    <section className={cn(s.ArtSct)} id='DescriptionSct'>
      <DescCart.Wrapper>
        <DescCart.Title>
          <h2>{t('comedy.header')}</h2>
        </DescCart.Title>
        <DescCart.ImgWrapper src={ShpaleruImg} desc={t('comedy.img_desc')} />
        <DescCart.Desc>{t('comedy.desc')}</DescCart.Desc>
      </DescCart.Wrapper>
      <DescCart.Wrapper descTemplate={'art-right'}>
        <DescCart.Title>
          <h2>{t('sense.header')}</h2>
        </DescCart.Title>
        <DescCart.ImgWrapper
          src={'/src/assets/img/title-art/ovul_osmynoga.jpg'}
          desc={t('sense.img_desc')}
        />
        <DescCart.Desc>{t('sense.desc')}</DescCart.Desc>
      </DescCart.Wrapper>
      <DescCart.Wrapper>
        <DescCart.Title>
          <h2>{t('transformation.header')}</h2>
        </DescCart.Title>
        <DescCart.ImgWrapper
          src={SHodunnukImg}
          desc={'Підпис під фото «фото роботи «щоденник»'}
        />
        <DescCart.Desc>{t('transformation.desc')}</DescCart.Desc>
      </DescCart.Wrapper>
    </section>
  );
}
