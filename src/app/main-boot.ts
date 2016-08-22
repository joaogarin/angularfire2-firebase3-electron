/*
 * Providers provided by Angular
 */
import {provide, enableProdMode, PLATFORM_DIRECTIVES} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {PROVIDERS} from './providers/providers';

// Import the root component
import {AppComponent} from './app';

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
  ]);
};
