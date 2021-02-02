import React from 'react';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import useWidthStyle from '../../components/_hooks/useWidthStyle';
import { useTranslation } from 'react-i18next';
import testData from '../SearchPage/TestData';
import Carousel from '../../components/Carousel/Carousel';
import { Wrapper } from './AdvertStyle';
import ImageContainer from './ImageContainer';

function AdvertPage({ match }) {
  const { t } = useTranslation();
  const widthStyle = useWidthStyle();
  const data = testData.find((item) => item.id === parseInt(match.params.id));
  const images = data.images.map((url) => url.replace('thumb', 'full').replace('thumb', 'full'));
  const thumbImages = data.images || [];

  return (
    <Wrapper className="pt3 pb3" style={widthStyle}>
      <div className="flex justify-between items-center">
        <div className="grow1">
          <div className="fs-24 fw-6">3-комнатная квартира, помесячно, Нур-Султан</div>
          <div className="text-secondary">Казахстан, Нур-Султан (Астана), Есильский район, улица Е-10, 17В</div>
        </div>
        <div>
          <Button variant="outlined" className="mr1" startIcon={<ShareIcon />} children="Поделиться" />
          <Button variant="outlined" startIcon={<SaveIcon />} children="Сохранить" />
        </div>
      </div>

      <div className="flex mt3">
        <div className="flex3 mr1">
          <Carousel className="border-radius" images={images} buttonSize="large" />
        </div>
        <div className="thumb-images">
          {thumbImages.length > 3 && (
            <>
              <ImageContainer className="mb1" src={thumbImages[1]} />
              <ImageContainer className="mb1" src={thumbImages[2]} />
              <ImageContainer className="mb1" src={thumbImages[3]} />
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default AdvertPage;
