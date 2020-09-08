import React from 'react';
import { Wrapper } from './FilterStyle';
import Card from '@material-ui/core/Card';
import ListOrMap from './FilterItems/ListOrMap';
import RoomOrFlat from './FilterItems/RoomOrFlat';
import PriceFromTo from './FilterItems/PriceFromTo';
import AreaAndFloor from './FilterItems/AreaAndFloor';
import Facilities from './FilterItems/Facilities';
import Features from './FilterItems/Features';
import './FilterTranslate';

export default function Filter() {
  return (
    <Wrapper>
      <ListOrMap />
      <Card>
        <div className="p2 mb1">
          <RoomOrFlat />
          <PriceFromTo />
        </div>
        <AreaAndFloor />
        <Facilities />
        <Features />
      </Card>
    </Wrapper>
  );
}
