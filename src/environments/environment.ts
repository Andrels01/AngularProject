// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI:"http://localhost:3000/",
   firebaseConfig: {
    apiKey: "AIzaSyBLaXHzv-GHbgOGwiNAbC4BQBJ2IQQ1BcQ",
    authDomain: "lojaangularals.firebaseapp.com",
    databaseURL: "https://lojaangularals.firebaseio.com",
    projectId: "lojaangularals",
    storageBucket: "",
    messagingSenderId: "944349530489",
    appId: "1:944349530489:web:9922353858d6e0eb3f07a8"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
