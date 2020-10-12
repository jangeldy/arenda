import React, { useState } from 'react';
import Dialog from '../../../components/Dialog';
import {
  AccordionDetails,
  Button,
  Checkbox as MuiCheckbox,
  FormControlLabel,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Text from '../../../components/Text';
import Input from '@material-ui/core/TextField/TextField';

function OtherFilters(props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [areaFrom, setAreaFrom] = useState();
  const [areaTo, setAreaTo] = useState();
  const [floorFrom, setFloorFrom] = useState();
  const [floorTo, setFloorTo] = useState();
  const [houseFloorTo, setHouseFloorTo] = useState();
  const [facilities, setFacilities] = useState([]);
  const [features, setFeatures] = useState([]);
  const [residentialComplex, setResidentialComplex] = useState();
  const [yearBuiltFrom, setYearBuiltFrom] = useState();
  const [yearBuiltTo, setYearBuiltTo] = useState();

  const FacilityItem = ({ name }) => (
    <div style={{ width: '50%' }}>
      <FormControlLabel
        label={<span style={{ fontSize: '15px' }}>{t(`filter_${name}`)}</span>}
        control={<MuiCheckbox color="primary" checked={facilities.includes(name)} />}
        onChange={() => {
          facilities.includes(name)
            ? setFacilities(facilities.filter((item) => item !== name))
            : setFacilities([...facilities, name]);
        }}
      />
    </div>
  );

  const FeatureItem = ({ name }) => (
    <div style={{ width: '50%' }}>
      <FormControlLabel
        label={<span style={{ fontSize: '15px' }}>{t(`filter_${name}`)}</span>}
        control={<MuiCheckbox color="primary" checked={features.includes(name)} />}
        onChange={() => {
          features.includes(name)
            ? setFeatures(features.filter((item) => item !== name))
            : setFeatures([...features, name]);
        }}
      />
    </div>
  );

  return (
    <>
      <Button
        variant="outlined"
        style={{ marginLeft: 10 }}
        children={t('filter_other')}
        onClick={() => setOpen(true)}
      />
      <Dialog
        open={open}
        handleClose={() => setOpen(false)}
        title={t('filter_other')}
        fullWidth
        maxWidth="sm"
        content={
          <div className="px3 py2">
            {/* ПЛОЩАДЬ */}
            <div>
              <Typography children={t('filter_area')} />
              <div className="flex items-center mt1">
                <Input
                  fullWidth
                  label={t('filter_from')}
                  inputProps={{ className: 'number-font' }}
                  value={areaFrom}
                  onChange={(event, value) => setAreaFrom(value)}
                />
                <Input
                  fullWidth
                  label={t('filter_to')}
                  inputProps={{ className: 'number-font' }}
                  style={{ marginLeft: 10 }}
                  value={areaTo}
                  onChange={(event, value) => setAreaTo(value)}
                />
              </div>
            </div>

            {/* ЭТАЖ */}
            <div className="mt2">
              <Typography children={t('filter_floor')} />
              <div className="flex items-center mt1">
                <Input
                  fullWidth
                  label={t('filter_from')}
                  inputProps={{ className: 'number-font' }}
                  value={floorFrom}
                  onChange={(event, value) => setFloorFrom(value)}
                />
                <Input
                  fullWidth
                  label={t('filter_to')}
                  inputProps={{ className: 'number-font' }}
                  style={{ marginLeft: 10 }}
                  value={floorTo}
                  onChange={(event, value) => setFloorTo(value)}
                />
              </div>
            </div>

            {/* ГОД ПОСТРОЙКИ */}
            <div className="mt2">
              <Typography children={t('filter_yearBuilt')} />
              <div className="flex items-center mt1">
                <Input
                  fullWidth
                  label={t('filter_from')}
                  inputProps={{ className: 'number-font' }}
                  value={yearBuiltFrom}
                  onChange={(event, value) => setYearBuiltFrom(value)}
                />
                <Input
                  fullWidth
                  label={t('filter_to')}
                  inputProps={{ className: 'number-font' }}
                  style={{ marginLeft: 10 }}
                  value={yearBuiltTo}
                  onChange={(event, value) => setYearBuiltTo(value)}
                />
              </div>
            </div>

            {/* ЭТАЖЕЙ В ДОМЕ */}
            <div className="mt2">
              <Typography children={t('filter_houseFloor')} />
              <Input
                fullWidth
                label={t('filter_to')}
                inputProps={{ className: 'number-font' }}
                value={houseFloorTo}
                onChange={(event, value) => setHouseFloorTo(value)}
              />
            </div>

            {/* ЖИЛОЙ КОМПЛЕКС */}
            <div className="mt2">
              <Typography children={t('filter_residentialComplex')} />
              <Input
                fullWidth
                label={t('filter_from')}
                inputProps={{ className: 'number-font' }}
                value={residentialComplex}
                onChange={(event, value) => setResidentialComplex(value)}
              />
            </div>

            <div className="mt2">
              <Typography children={t('filter_facilities')} />
              <div className="flex flex-wrap">
                <FacilityItem name="designerRenovation" />
                <FacilityItem name="wifi" />
                <FacilityItem name="internet" />
                <FacilityItem name="washer" />
                <FacilityItem name="drying" />
                <FacilityItem name="refrigerator" />
                <FacilityItem name="dishwasher" />
                <FacilityItem name="iron" />
                <FacilityItem name="hairDryer" />
                <FacilityItem name="furniture" />
                <FacilityItem name="feedingChair" />
                <FacilityItem name="tv" />
                <FacilityItem name="conditioning" />
                <FacilityItem name="balcony" />
                <FacilityItem name="safeYard" />
                <FacilityItem name="parking" />
                <FacilityItem name="closedArea" />
              </div>
            </div>

            <div className="mt2">
              <Typography children={t('filter_features')} />
              <div className="flex flex-wrap">
                <FeatureItem name="canSmoke" />
                <FeatureItem name="forEvents" />
                <FeatureItem name="animalsAllowed" />
                <FeatureItem name="forChildren" />
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}

export default OtherFilters;
