import React from 'react';
import DefaultLayout from '../templates/default';
import LocationService from '../utils/locations';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { graphql } from 'gatsby';
import Adres from './../components/Adress';
const style = require('./styles/contacts.scss')

const Contacts = ({ location, data: {datoCmsHome: home} }: any) => {
  LocationService.location = location;
  return (
    <DefaultLayout>
      <div className={style.map}>
        <Adres {...home}/>
        <YMaps>
          <Map
            width='100%'
            height='100%'
            defaultState={{
              center: home.coords,
              zoom: 9,
              controls: ['zoomControl', 'fullscreenControl'],
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
          >
            <Placemark
              modules={['geoObject.addon.balloon']}
              defaultGeometry={home.coords}
              properties={{
                balloonContentTitle: home.adres,
                balloonContentBody:
                home.adres,
              }}
            />
          </Map>
        </YMaps>
      </div>
    </DefaultLayout>
  );
};

export default Contacts;

export const query = graphql`
  query ContactsQuery {
    datoCmsHome {
      adres
      phone
      email
      coords
    }
  }
`;