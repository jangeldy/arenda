import React from 'react';
import { Divider } from '@material-ui/core';
import { DDM } from '../../_helpers/constants';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ParkingIcon } from './icons/parking.svg';

const Item = ({ code, ru_name }) => {
  return (
    <div className="flex items-center mb1" style={{ width: '50%' }}>
      <ParkingIcon />
      <span className="ml1 fs-16">{ru_name}</span>
    </div>
  );
};

function AdvertDescription({ data }) {
  const { t } = useTranslation();
  return (
    <div>
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
      <p className="fs-16">
        Пластиковые окна, неугловая, комнаты изолированы, встроенная кухня, кладовка,
        счётчики, тихий двор, кондиционер, чистая, уютная, стиральная машина-автомат,
        кабельное ТВ, + квартплата, на длительный срок, телевизор, вся бытовая техника.
        Сдам на длительный срок, 2х комнатную квартиру, в ЖК EXPO RESIDENCE. Имеется
        паркинг. Паркинга входит в общую стоимость. Депозит в размере одной месячной
        оплаты, обязательно.
      </p>

      {/*** ОСОБЕННОСТИ ***/}
      <Divider style={{ margin: '20px 0' }} />
      <h2 children={t('filter_features')} />
      <div className="flex flex-wrap">
        {DDM.features.map((item) => (
          <Item key={item.code} {...item} />
        ))}
      </div>

      {/*** УДОБСТВА ***/}
      <Divider style={{ margin: '20px 0' }} />
      <h2 children={t('filter_facilities')} />
      <div className="flex flex-wrap">
        {DDM.facilities.map((item) => (
          <Item key={item.code} {...item} />
        ))}
      </div>

      {/*** ПРАВИЛА ДОМА ***/}
      <Divider style={{ margin: '20px 0' }} />
      <h2 children={t('filter_houseRules')} />
      <div className="flex flex-wrap">
        {DDM.houseRules.map((item) => (
          <Item key={item.code} {...item} />
        ))}
      </div>
    </div>
  );
}

export default AdvertDescription;
