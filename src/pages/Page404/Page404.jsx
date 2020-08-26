import React from 'react';
import { CssBox } from './Page404Style';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import paths from '../../_helpers/paths';
import './Page404Translate';
import { useTranslation } from 'react-i18next';

export default function Page404() {
  const { t } = useTranslation();
  return (
    <CssBox>
      <div className="container">
        <div className="error">404</div>
        <div className="oops">{t('page404_oops')}</div>
        <div className="not-found">{t('page404_notFound')}</div>
        <Link to={paths.homePage}>
          <Button variant="contained" color="secondary" children={t('page404_toHome')} />
        </Link>
      </div>
    </CssBox>
  );
}
