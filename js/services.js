app.factory('EmailsGetter', ['$http',
    function ($http) {
        return $http.get('data/emails.json');
    }]);

app.service('SettingsStorage', function () {
    var settings = {
        message: 'Please, select email',
        fontSize: 14,
        buttonColor: 'btn-primary'
    };
    this.getSettings = function () {
        var clone = {
            message: settings.message,
            fontSize: settings.fontSize,
            buttonColor: settings.buttonColor
        };
        return clone;
    };
    this.setSettings = function (value) {
        settings = value;
    };
});