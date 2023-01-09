// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_API_URI: {
    BASE_SERVICE_SP10_API: 'https://tungsnk.tech:8082/',
    BASE_SERVICE_SP05_M03_API: 'https://sp-05-backend.onrender.com/',
    MOCK_API:'https://6385e9a5beaa6458266ce8e3.mockapi.io/'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
