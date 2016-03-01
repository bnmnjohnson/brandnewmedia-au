import angular from 'angular';

// angular modules
import constants from './constants';
import onConfig from './on_config';
import onRun from './on_run';
import 'foundation-sites';
import 'angular-route';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';
import 'angular-contentful';

// create and bootstrap application
const requires = [
    'ngRoute',
    'templates',
    'contentful',
    'app.filters',
    'app.controllers',
    'app.services',
    'app.directives',
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
