import React, { useState } from 'react';
import { Wrapper } from './FilterStyle';
import {
  Typography,
  Card,
  ButtonGroup,
  Button,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from '@material-ui/core';
import './FilterTranslate';
import TypeButton from './TypeButton';
import { useTranslation } from 'react-i18next';
import Room from './Room';
import PriceSlider from './PriceSlider';
import Input from '@material-ui/core/OutlinedInput';

export default function Filter() {
  const { t } = useTranslation();
  const [isFlat, setIsFlat] = useState(true);
  const [rooms, setRooms] = useState(['1', '2']);
  const [price, setPrice] = useState([0, 300000]);
  const [area, setArea] = useState(['', '']);
  const [facilities, setFacilities] = useState([]);

  const CheckBox = ({ name }) => (
    <FormControlLabel
      label={t(`filter_${name}`)}
      control={<MuiCheckbox color="primary" checked={facilities.includes(name)} />}
      onChange={() => {
        facilities.includes(name)
          ? setFacilities(facilities.filter((item) => item !== name))
          : setFacilities([...facilities, name]);
      }}
    />
  );

  return (
    <Wrapper>
      <TypeButton />
      <Card className="p2">
        {/** ROOM OR FLAT */}
        <ButtonGroup fullWidth variant="contained" disableElevation>
          <Button
            onClick={() => setIsFlat(true)}
            color={isFlat ? 'primary' : 'default'}
            children={t('filter_flat')}
          />
          <Button
            onClick={() => setIsFlat(false)}
            color={isFlat ? 'default' : 'primary'}
            children={t('filter_room')}
          />
        </ButtonGroup>

        <div className="mt3">
          <Text text={t('filter_roomCount')} />
          <ButtonGroup fullWidth variant="contained" disableElevation>
            <Room room="1" rooms={rooms} setRooms={setRooms} />
            <Room room="2" rooms={rooms} setRooms={setRooms} />
            <Room room="3" rooms={rooms} setRooms={setRooms} />
            <Room room="4+" rooms={rooms} setRooms={setRooms} />
          </ButtonGroup>
        </div>

        {/** PRICE **/}
        <div className="mt3">
          <Text text={t('filter_price')} />
          <PriceSlider
            value={price}
            onChange={(event, newValue) => {
              setPrice(newValue);
            }}
            max={300000}
          />
          <div className="flex mt1 items-center">
            <Text text={t('filter_from')} mr={10} />
            <Input
              value={price[0]}
              onChange={(event) => setPrice([event.target.value, price[1]])}
            />
            <Text text={t('filter_to')} ml={10} mr={10} />
            <Input
              value={price[1] === 300000 ? price[1] + '+' : price[1]}
              onChange={(event) => setPrice([price[0], event.target.value])}
            />
          </div>
        </div>

        {/** AREA **/}
        <div className="mt2">
          <Text text={t('filter_area')} />
          <div className="flex items-center">
            <Text text={t('filter_from')} mr={10} />
            <Input
              value={area[0]}
              onChange={(event) => setArea([event.target.value, area[1]])}
            />
            <Text text={t('filter_to')} ml={10} mr={10} />
            <Input
              value={area[1]}
              onChange={(event) => setArea([area[0], event.target.value])}
            />
          </div>
        </div>

        {/** FLOOR **/}
        <div className="mt2">
          <Text text={t('filter_floor')} />
          <div className="flex items-center">
            <Text text={t('filter_from')} mr={10} />
            <Input
              value={area[0]}
              onChange={(event) => setArea([event.target.value, area[1]])}
            />
            <Text text={t('filter_to')} ml={10} mr={10} />
            <Input
              value={area[1]}
              onChange={(event) => setArea([area[0], event.target.value])}
            />
          </div>
        </div>

        {/** FACILITIES **/}
        <div className="mt2">
          <Text text={t('filter_facilities')} />
          <div>
            <CheckBox name="internet" />
            <CheckBox name="washer" />
            <CheckBox name="refrigerator" />
            <CheckBox name="dishwasher" />
            <CheckBox name="iron" />
            <CheckBox name="hairDryer" />
            <CheckBox name="furniture" />
            <CheckBox name="tv" />
            <CheckBox name="conditioning" />
            <CheckBox name="balcony" />
            <CheckBox name="closedArea" />
          </div>
        </div>
      </Card>
    </Wrapper>
  );
}

function Text({ text, mr, ml }) {
  return (
    <Typography
      style={{ marginRight: mr, marginLeft: ml }}
      variant="overline"
      color="textSecondary"
      children={text}
    />
  );
}
