/*
 * Providers provided by Angular
 */
import { provide, enableProdMode, PLATFORM_DIRECTIVES } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideForms, disableDeprecatedForms } from '@angular/forms';

import { ROUTER_DIRECTIVES, provideRouter } from '@angular/router';
import { routes } from './../app.routes';

/**
 * Basic configuration like Endpoint URL's, API version..
 */
const options = require('./../config.json');

let PROVIDERS = [
    ...HTTP_PROVIDERS,
    provideRouter(routes),
    provide(PLATFORM_DIRECTIVES, { useValue: [ROUTER_DIRECTIVES], multi: true }),
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    disableDeprecatedForms(),
    provideForms()
];

export {PROVIDERS};
