import React from 'react';
import DefaultLayout from '../templates/default';
import LocationService from '../utils/locations';

const Contacts = ({location}: any) => {
  LocationService.location = location;
  return (
    <DefaultLayout>
      <div>
        <h1>Contacts</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </DefaultLayout>
  );
};

export default Contacts;
