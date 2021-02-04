import React from 'react';
import { Button, Divider } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import useWidthStyle from '../../components/_hooks/useWidthStyle';
import testData from '../SearchPage/TestData';
import Carousel from '../../components/Carousel/Carousel';
import { Wrapper } from './AdvertStyle';
import ImageContainer from './ImageContainer';
import ImageSlider from './ImageSlider/ImageSlider';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Row from '../../components/Row';
import './AdvertTranslate';

function AdvertPage({ match }) {
  const { t } = useTranslation();
  const widthStyle = useWidthStyle();
  const data = testData.find((item) => item.id === parseInt(match.params.id));
  const thumbImages = data.images || [];
  const images = data.images.map((url) =>
    url.replace('thumb', 'full').replace('thumb', 'full')
  );

  return (
    <Wrapper className="pt3 pb3" style={widthStyle}>
      <div className="flex justify-between items-center">
        <div className="grow1">
          <div className="fs-24 fw-6">3-комнатная квартира, помесячно, Нур-Султан</div>
          <div className="text-secondary">
            Казахстан, Нур-Султан (Астана), Есильский район, улица Е-10, 17В
          </div>
        </div>
        <div>
          <Button
            variant="outlined"
            className="mr1"
            startIcon={<ShareIcon />}
            children="Поделиться"
          />
          <Button variant="outlined" startIcon={<SaveIcon />} children="Сохранить" />
        </div>
      </div>

      <div className="flex mt2">
        <div className="flex3" style={{ marginRight: '0.8%' }}>
          <Carousel
            className="border-radius"
            images={images}
            buttonSize="large"
            SlideComponent={({ index, ...rest }) => (
              <Link to={`?slider=${index}`} {...rest} />
            )}
          />
        </div>
        {thumbImages.length > 3 && (
          <div className="flex1">
            <Link to={`?slider=1`}>
              <ImageContainer src={thumbImages[1]} />
            </Link>
            <Link to={`?slider=2`}>
              <ImageContainer src={thumbImages[2]} />
            </Link>
            <Link to={`?slider=3`}>
              <ImageContainer src={thumbImages[3]} />
            </Link>
          </div>
        )}
      </div>

      <ImageSlider images={images} />

      <div className="mt1 flex">
        <div className="flex4">
          <h2 className="fs-23" children={t('advert_apartment')} />
          <div className="flex fw-5 fs-16">
            <div className="flex4">{t('advert_area')}</div>
            <div className="flex2">
              {data.area} м <sup>2</sup>
            </div>
          </div>
          <Divider style={{ marginTop: 15, marginBottom: 15 }} />
          <div className="flex fw-5 fs-16">
            <div className="flex4">{t('advert_floor')}</div>
            <div className="flex2">
              {data.floor}/{data.houseFloor}
            </div>
          </div>
          <Divider style={{ marginTop: 15, marginBottom: 15 }} />
          <div className="flex fw-5 fs-16">
            <div className="flex4">{t('advert_yearBuild')}</div>
            <div className="flex2">{data.yearBuild}</div>
          </div>
          <Divider style={{ marginTop: 15, marginBottom: 15 }} />
          <div className="flex fw-5 fs-16">
            <div className="flex4">{t('advert_complex')}</div>
            <div className="flex2">{data.complex}</div>
          </div>
          <Divider style={{ marginTop: 15, marginBottom: 15 }} />
        </div>
        <div className="flex2">контакты</div>
      </div>
    </Wrapper>
  );
}

export default AdvertPage;
