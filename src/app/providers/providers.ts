/*
 * Providers provided by Angular
 */
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

// Firebase providers
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

/**
 * Basic configuration like Endpoint URL's, API version..
 */
const options = require('./../config.json');

let PROVIDERS = [
    ...ROUTER_PROVIDERS,
    ...HTTP_PROVIDERS,
    ...FIREBASE_PROVIDERS,
];

export {PROVIDERS};
