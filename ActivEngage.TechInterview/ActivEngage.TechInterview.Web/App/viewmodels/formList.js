define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'modules/formhub', 'knockout'],
    function (system, app, viewLocator, formHub, ko) {

    return {
        displayName: 'Form List',
        forms: ko.observableArray([]),
        activate: function () {
            var that = this;
            return formHub.getAllForms().then(function (results) {
                that.forms(results);
            });
        }
    };
});