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
      const paths = this.location.pathname.split('/');
      console.warn('GET CSS PREFIX', paths)
      return paths.length > 3 ? 'post' : paths[1] || prefix;
    }
    return prefix;
  };
}

export default LocationService.getInstance();
