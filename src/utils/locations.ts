class LocationService {
  private static instance: LocationService;
  public location: any;

  private constructor() {}

  public static getInstance = () => {
    if (!LocationService.instance) {
      LocationService.instance = new LocationService();
    }
    return LocationService.instance;
  };

  public getCssPrefix = () => {
    let prefix = 'index';
    if (this.location?.pathname) {
      return this.location.pathname.split('/')[1] || prefix;
    }
    return prefix;
  };
}

export default LocationService.getInstance();
