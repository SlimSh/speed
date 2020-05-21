import React from 'react';
import DefaultLayout from '../templates/default';
import LocationService from '../utils/locations';

const Master = ({location}: any) => {
  LocationService.location = location;
  return (
    <DefaultLayout>
      <div>
        <h1>Мастерская</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </DefaultLayout>
  );
};

export default Master;
