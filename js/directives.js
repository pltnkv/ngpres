app.directive('emailsPreview', function () {
    return {
        restrict: 'E',
        scope: {
            email: '='
        },
        templateUrl: 'views/email-preview.html'
    };
});