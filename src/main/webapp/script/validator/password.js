(function () {
    angular.module("App")
        .directive("password", password);

    function password() {

        var lastTrueRegex = {};

        var regexes = {
            week: /(?=^.{8,}$).*$/,
            pettyWeek: /(?=^.{8,}$)(?=.*\d).*$/,
            normal: /(?=^.{8,}$)(?=.*\d)(?=.*[a-z]).*$/,
            prettyStrong: /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
            strong: /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?![.\n]).*$/,
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

                    //alert("in parsers !");
                    //forEach(regexes, function (key, regex) {
                    //    $('input[password]').removeClass('ng-valid-'+key);
                    //});
                    forEach(regexes, function (key, regex) {
                        if (regex.test(textValue)){
                            lastTrueRegex.name = key;
                            lastTrueRegex.value = true;
                        }
                    });

                    if (lastTrueRegex.name){
                        ngModel.$setValidity(lastTrueRegex.name, lastTrueRegex.value);
                        return textValue;
                    }else{
                        ngModel.$setValidity(lastTrueRegex.name, lastTrueRegex.value);
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