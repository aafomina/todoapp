'use strict';

angular
  .module('todoappApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.sortable',
    //'LocalStorageModule',
    'firebase'
  ])
  //.config(['localStorageServiceProvider', function(localStorageServiceProvider){
    //localStorageServiceProvider.setPrefix('ls');
  //}])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant('FIREBASE_URL', 'https://intense-fire-8765.firebaseio.com/'); 

