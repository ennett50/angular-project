import 'bootstrap/dist/css/bootstrap.css';

const angular = require('angular');
const ngModule = angular.module('app',[]);

require('./directives')(ngModule);
require('./components')(ngModule);
require('./services')(ngModule);
