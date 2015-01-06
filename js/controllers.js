app.controller('EmailsCtrl', function ($scope, EmailsGetter, SettingsStorage) {
    EmailsGetter.success(function(data) {
        $scope.emails = data;
    });

    $scope.settings = SettingsStorage.getSettings();
    $scope.selectedEmail = undefined;
    $scope.selectEmail = function(email) {
        $scope.selectedEmail = email;
    };
});

app.controller('EmailBarCtrl', function ($scope) {
    $scope.sendEmail = function() {
        alert('Sent');
    };
});

app.controller('SettingsCtrl', function ($scope, SettingsStorage) {
    $scope.settings = SettingsStorage.getSettings();

    $scope.saveSettings = function() {
        SettingsStorage.setSettings($scope.settings);
        console.log('saveSettings');
    }
});