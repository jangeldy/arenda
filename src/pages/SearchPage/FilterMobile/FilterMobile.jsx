import React, { useState } from 'react';
import Dialog from '../../../components/Dialog';
import {
  Button,
  Checkbox as MuiCheckbox,
  FormControlLabel,
  Divider,
  TextField,
  useTheme,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Row from '../../../components/Row';
import { Dictionary } from '../../../_helpers/constants';
import { ReactComponent as FilterDarkIcon } from '../filterIconDark.svg';
import { ReactComponent as FilterIcon } from '../filterIcon.svg';
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons';
import Price from './Price';
import RoomCount from './RoomCount';
import TermType from './TermType';
import PropertyType from './PropertyType';

function FilterMobile() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const Item = ({ ru_name }) => (
    <div style={{ padding: '5px 0' }}>
      <FormControlLabel
        label={ru_name}
        control={
          <MuiCheckbox
            checkedIcon={<CheckBox style={{ fontSize: '30px' }} />}
            icon={<CheckBoxOutlineBlank style={{ fontSize: '30px' }} />}
            color="primary"
          />
        }
      />
    </div>
  );

  return (
    <>
      <Button
        color="primary"
        endIcon={theme.isDark ? <FilterDarkIcon /> : <FilterIcon />}
        style={{ marginRight: -16, fontWeight: 600 }}
        onClick={() => setOpen(true)}
        children={t('filter_filters')}
      />
      <Dialog
        open={open}
        fullScreen
        handleClose={() => setOpen(false)}
        title={
          <div>
            <Button style={{ position: 'absolute', left: 12, top: 12 }}>Очистить</Button>
            {t('filter_filters')}
          </div>
        }
        fullWidth
        maxWidth="md"
        PaperProps={{ style: { maxWidth: 780 } }}
        content={
          <div className="pt1 pb3 px1">
            {/*** ТИП ЖИЛЬЯ ***/}
            <PropertyType />

            {/*** КОЛИЧЕСТВО КОМНАТЫ ***/}
            <RoomCount />

            {/*** СРОК АРЕНДЫ ***/}
            <TermType />

            {/*** ЦЕНА ***/}
            <Price />

            {/*** КВАРТИРА ***/}
            <Divider style={{ margin: '20px 0' }} />
            <h2 children={t('filter_apartment')} />
            {/*** ПЛОЩАДЬ ***/}
            <Row label={t('filter_area')}>
              <div className="flex items-center mt1">
                <TextField fullWidth label={t('filter_from')} />
                <TextField fullWidth label={t('filter_to')} style={{ marginLeft: 10 }} />
              </div>
            </Row>
            {/*** ЭТАЖ ***/}
            <Row label={t('filter_floor')}>
              <div className="flex items-center mt1">
                <TextField fullWidth label={t('filter_from')} />
                <TextField fullWidth label={t('filter_to')} style={{ marginLeft: 10 }} />
              </div>
            </Row>
            {/*** ЭТАЖЕЙ В ДОМЕ ***/}
            <Row label={t('filter_houseFloor')}>
              <div className="flex items-center mt1">
                <TextField fullWidth label={t('filter_from')} />
                <TextField fullWidth label={t('filter_to')} style={{ marginLeft: 10 }} />
              </div>
            </Row>
            {/*** ГОД ПОСТРОЙКИ ***/}
            <Row label={t('filter_yearBuilt')}>
              <div className="flex items-center mt1">
                <TextField fullWidth label={t('filter_from')} />
                <TextField fullWidth label={t('filter_to')} style={{ marginLeft: 10 }} />
              </div>
            </Row>
            {/*** ЖИЛОЙ КОМПЛЕКС ***/}
            <Row label={t('filter_complex')}>
              <div className="flex items-center mt1">
                <TextField fullWidth placeholder={t('filter_complex')} />
              </div>
            </Row>
            {/*** ОСОБЕННОСТИ ***/}
            <Divider style={{ margin: '20px 0' }} />
            <h2 children={t('filter_features')} />
            <div>
              {Dictionary.features.map((item) => (
                <Item key={item.code} {...item} />
              ))}
            </div>
            {/*** УДОБСТВА ***/}
            <Divider style={{ margin: '20px 0' }} />
            <h2 children={t('filter_facilities')} />
            <div>
              {Dictionary.facilities.map((item) => (
                <Item key={item.code} {...item} />
              ))}
            </div>
            {/*** ПРАВИЛА ДОМА ***/}
            <Divider style={{ margin: '20px 0' }} />
            <h2 children={t('filter_houseRules')} />
            <div>
              {Dictionary.houseRules.map((item) => (
                <Item key={item.code} {...item} />
              ))}
            </div>
          </div>
        }
        actions={
          <Button
            fullWidth
            className="m1"
            variant="contained"
            color="primary"
            size="large"
          >
            Показать 11 389 объявлении
          </Button>
        }
      />
    </>
  );
}

export default FilterMobile;
