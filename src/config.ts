const ENV = {
  modulePrefix: 'app-template-minimal',
  environment: import.meta.env.DEV ? 'development' : 'production',
  rootURL: '/',
  locationType: 'history',
  APP: {
    // Here you can pass flags/options to your application instance
    // when it is created
    autoboot: true,
    rootElement: undefined as string | undefined,
  },
};

export default ENV;

export function enterTestMode() {
  ENV.locationType = 'none';
  ENV.APP.rootElement = '#ember-testing';
  ENV.APP.autoboot = false;
}
