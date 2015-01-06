var app = angular.module('emailsApp', ['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/settings', {
                templateUrl: 'views/settings.html',
                controller: 'SettingsCtrl'
            }).
            when('/emails', {
                templateUrl: 'views/emails.html',
                controller: 'EmailsCtrl'
            }).
            otherwise({
                redirectTo: '/emails'
            });
    }]);

