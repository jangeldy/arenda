import React, { useEffect, useState } from 'react';
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
  // const [scrolled, setScrolled] = useState(false);

  /*
  <ListOrMap />
      <Card className="p3">
        <div className="flex">
          <RoomOrFlat />
          <AreaAndFloor />
        </div>
        <div className="flex">
          <PriceFromTo />
        </div>

        <Facilities />
        <Features />
      </Card>
  */

  return (
    <Wrapper>
      <Card className="p2">
        <div className="flex">
          <RoomOrFlat />
          <PriceFromTo />
        </div>
      </Card>
    </Wrapper>
  );
}
