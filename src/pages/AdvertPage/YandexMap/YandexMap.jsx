import React, { useState } from 'react';
import {
  FullscreenControl,
  GeolocationControl,
  GeoObject,
  Map,
  TypeSelector,
  YMaps,
  ZoomControl,
} from 'react-yandex-maps';

export default function YandexMap({ lat, lon }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  if (error) return <div>Error</div>;
  return (
    <YMaps query={{ apikey: 'e61e02aa-edac-471e-b1a6-a92a71fe9b68' }}>
      {loading && <div>Loading</div>}
      <Map
        defaultState={{ center: [lat, lon], zoom: 15 }}
        width="100%"
        height="500px"
        onLoad={() => setLoading(false)}
        onError={(error) => setError(error)}
      >
        <GeoObject geometry={{ type: 'Point', coordinates: [lat, lon] }} />
        <FullscreenControl />
        <GeolocationControl />
        <ZoomControl />
        <TypeSelector defaultState={{ expanded: false }} />
      </Map>
    </YMaps>
  );
}
