import React from 'react';
import { Wrapper, FlatGroup } from './FilterStyle';
import { Typography, Card, ButtonGroup, Button } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { useTheme } from '@material-ui/core';
import './FilterTranslate';
import TypeButton from './TypeButton';
import { useTranslation } from 'react-i18next';

export default function Filter() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Wrapper>
      <TypeButton />
      <Card className="p2">
        <ButtonGroup fullWidth variant="contained">
          <Button color="primary">{t('filter_flat')}</Button>
          <Button>{t('filter_room')}</Button>
        </ButtonGroup>

        <div className="mt3">
          <Typography>{t}</Typography>
          <FlatGroup value={['1', '2']} size="small">
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="4+">4+</ToggleButton>
          </FlatGroup>
        </div>
      </Card>
    </Wrapper>
  );
}
