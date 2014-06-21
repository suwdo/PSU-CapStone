/**
 * Primary app module for Predictly
 *
 * @author Su Wang <sxw323@psu.edu>
 */

'use strict';

var predictlyApp = angular.module('predictlyApp', [
    'ngRoute',
    'FrontPageControllers'
]);

predictlyApp.config([
    '$routeProvider',
    '$locationProvider',
    function (
        $routeProvider,
        $locationProvider
    ) {
        $locationProvider
            .html5Mode(false)
            .hashPrefix('!');
        $routeProvider
        .when('/',
        {
            controller: 'ViewFrontPageController',
            templateUrl: 'app/view/frontpage.html'
        })
        .when('/dashboard/',
        {
            controller: 'DashboardController',
            templateUrl: 'app/view/dashboard.html'
        })

        .otherwise(
            { redirectTo: '/' }
        );
    }
]);