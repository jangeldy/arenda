import React from 'react';
import { Wrapper } from './FilterStyle';
import { Card, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListOrMap from './FilterItems/ListOrMap';
import RoomOrFlat from './FilterItems/RoomOrFlat';
import PriceFromTo from './FilterItems/PriceFromTo';
import AreaFromTo from './FilterItems/AreaFromTo';
import FloorFromTo from './FilterItems/FloorFromTo';
import Facilities from './FilterItems/Facilities';
import Features from './FilterItems/Features';
import './FilterTranslate';

export default function Filter() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <ListOrMap />
      <Card>
        <div className="p2">
          <RoomOrFlat />
          <PriceFromTo />
        </div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} children={t('filter_more')} />
          <AccordionDetails style={{ display: 'block' }}>
            <AreaFromTo />
            <FloorFromTo />
            <Facilities />
            <Features />
          </AccordionDetails>
        </Accordion>
      </Card>
    </Wrapper>
  );
}
