import React from 'react';
import { Button, Divider, useTheme } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import useWidthStyle from '../../components/_hooks/useWidthStyle';
import testData from '../SearchPage/TestData';
import Carousel from '../../components/Carousel/Carousel';
import { Wrapper } from './AdvertStyle';
import ImageContainer from './ImageContainer';
import ImageSlider from './ImageSlider/ImageSlider';
import { Link } from 'react-router-dom';
import './AdvertTranslate';
import OwnerCard from './OwnerCard';
import AdvertDescription from './AdvertDescription';
import YandexMap from './YandexMap/YandexMap';

function AdvertPage({ match }) {
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
            className="radius-large-tl radius-large-bl"
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
              <ImageContainer className="radius-large-tr" src={thumbImages[1]} />
            </Link>
            <Link to={`?slider=2`}>
              <ImageContainer src={thumbImages[2]} />
            </Link>
            <Link to={`?slider=3`}>
              <ImageContainer className="radius-large-br" src={thumbImages[3]} />
            </Link>
          </div>
        )}
      </div>
      <ImageSlider images={images} />
      <div className="mt1 flex">
        <div className="flex5">
          <AdvertDescription data={data} />
        </div>
        <div className="flex3 ml4">
          <OwnerCard data={data} />
        </div>
      </div>
      <Divider style={{ margin: '40px 0' }} />
      <h2 children="Местоположение" />
      <div className="mb1">Нур-Султан, Казахстан</div>
      <div className="mt3">
        <YandexMap lat={data.latitude} lon={data.longitude} />
        <div className="fence" />
      </div>
      <h2 children="Цена за кв.метр в похожих квартирах" />
      <div className="mt3 flex">
        <div className="border flex1 center mr1 p3">
          <div className="fs-21" style={{ color: '#72a727' }}>
            358 667 ₸
          </div>
          <div>Цена в этом объявлении</div>
        </div>
        <div className="border flex1 center mr1 p3">
          <div className="fs-21" style={{ color: '#0066d5' }}>
            358 667 ₸
          </div>
          <div>Цена в этом районе</div>
        </div>
        <div className="border flex1 center p3">
          <div className="fs-21" style={{ color: '#0066d5' }}>
            352 980 ₸
          </div>
          <div>Цена по городу Нур-Султан</div>
        </div>
      </div>
      <div className="mt2">
        На 7% дешевле, чем в других похожих предложениях в этом районе.
      </div>
    </Wrapper>
  );
}

export default AdvertPage;
