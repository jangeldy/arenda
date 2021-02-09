import React from 'react';
import { Button, Divider, IconButton, useTheme } from '@material-ui/core';
import { ReactComponent as FlagIcon } from './icons/flags.svg';
import ShareIcon from '@material-ui/icons/Share';
import SaveIcon from '@material-ui/icons/FavoriteBorder';
import { ReactComponent as TelegramIcon } from './icons/telegram.svg';
import { ReactComponent as WhatsappIcon } from './icons/whatsapp.svg';
import Avatar from '@material-ui/core/Avatar';
import { CardStyled, Owner } from './AdvertStyle';

function OwnerCard({ data }) {
  const { palette } = useTheme();
  return (
    <Owner>
      <CardStyled className="owner-card">
        <div className="flex items-center justify-between">
          <div>
            <span className="fw-6 fs-22">{data.price} ₸ </span>
            <span className="fs-16">/ в месяц</span>
          </div>
          <div>
            <IconButton style={{ padding: 8 }}>
              <ShareIcon fontSize="small" />
            </IconButton>
            <IconButton style={{ padding: 8 }}>
              <SaveIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="flex mt2">
          <Button
            variant="outlined"
            startIcon={<WhatsappIcon style={{ fill: palette.text.secondary }} />}
            fullWidth
            className="mr1"
            children="whatsapp"
          />
          <Button
            variant="outlined"
            startIcon={<TelegramIcon style={{ fill: palette.text.secondary }} />}
            fullWidth
            children="telegram"
          />
        </div>
        <Button
          fullWidth
          variant="contained"
          className="mt2"
          color="primary"
          size="large"
          children="Показать телефон"
        />
        <Divider style={{ margin: '25px 0 20px 0' }} />
        <div className="flex items-center">
          <Avatar
            style={{ width: 48, height: 48 }}
            src="https://lh3.googleusercontent.com/ogw/ADGmqu_FnvSxxHAfP3gg_Pe3gk9pRUuK930F0dLStiX8fg=s83-c-mo"
          />
          <div className="grow1 ml2">
            <div className="fw-6 fs-16">Жангельды</div>
            <div>Хозяин жилья</div>
          </div>
        </div>
      </CardStyled>

      <div className="complain mt2">
        <div className="link flex items-center">
          <FlagIcon /> Пожаловаться на объявление
        </div>
      </div>
    </Owner>
  );
}

export default OwnerCard;
