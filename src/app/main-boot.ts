/*
 * Providers provided by Angular
 */
import {provide, enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {PROVIDERS} from './providers/providers';

// Import the root component
import {AppComponent} from './app';

/**
 * Import angularfire
 */
import {defaultFirebase} from 'angularfire2';

/**
 * Basic configuration like Endpoint URL's, API version..
 */
const options = require('./config.json');

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */

export function bootStrapCall() {
  return bootstrap(AppComponent, [
    ...PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    // Initialize Firebase app  
    /*defaultFirebase({
      apiKey: options.firebase.apiKey,
      authDomain: options.firebase.authDomain,
      databaseURL: options.firebase.databaseURL,
      storageBucket: options.firebase.cstorageBucket,
    })*/
  ]);
};
