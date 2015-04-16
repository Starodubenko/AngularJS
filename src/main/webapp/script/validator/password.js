(function () {
    angular.module("App")
        .directive("password", password);

    function password($rootScope) {

        var lastTrueRegex = {};

        var regexes = {
            week: /(?=^.{8,}$)|(?=.*\d)|(?=.*[a-z])|(?=.*[A-Z])|(?![.\n])|(?=.*[!@#$%^&*]+).*$/,
            prettyWeek: /(?=.*\d)((?=^.{8,}$)|(?=.*[a-z])|(?=.*[A-Z])|(?![.\n])|(?=.*[!@#$%^&*]+)).*$/,
            normal: /(?=.*\d)(?=.*[a-z])((?=^.{8,}$)|(?=.*[A-Z])|(?![.\n])|(?=.*[!@#$%^&*]+)).*$/,
            prettyStrong: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=^.{8,}$)|(?![.\n])|(?=.*[!@#$%^&*]+)).*$/,
            strong: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?![.\n])((?=^.{8,}$)|(?=.*[!@#$%^&*]+)).*$/,
            veryStrong: /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?![.\n])(?=.*[!@#$%^&*]+).*$/
        };

        function forEach(data, callback) {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    callback(key, data[key]);
                }
            }
        }

        return {
            require: "ngModel",
            restrict: 'EA',
            link: function (scope, element, attributes, ngModel) {

                ngModel.$parsers.unshift(function (textValue) {
                    //ngModel.$setPristine();

                    forEach(regexes, function (key, regex) {
                        if (regex.test(textValue)){
                            lastTrueRegex.name = key;
                            lastTrueRegex.value = true;
                        }
                    });
                    forEach(regexes, function (key, regex) {
                        if (lastTrueRegex.name != key){
                            ngModel.$setValidity(key, null);
                        }
                    });

                    if (lastTrueRegex.name){
                        ngModel.$setValidity(lastTrueRegex.name, lastTrueRegex.value);
                        $rootScope.$emit("isLevel",lastTrueRegex);
                        return textValue;
                    }
                });

                ngModel.$formatters.unshift(function (modelValue) {
                    //ngModel.$setValidity('strongPass', isValid(modelValue));
                    return modelValue;
                });
            }
        };
    }


})();