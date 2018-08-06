// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dialogflow: {
    clientAccessKey: "f56ec0c98e3b446c9299f2534b094f22"//'c0e1af0c13274f40ba8a0639a40ce819'
    ////https://github.com/dialogflow/dialogflow-javascript-client/issues/80
  }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
