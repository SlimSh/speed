import React from 'react';
import LocationService from '../utils/locations';


const NotFoundPage = ({location}: any) => {
  LocationService.location = location;
  return (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)}

export default NotFoundPage
