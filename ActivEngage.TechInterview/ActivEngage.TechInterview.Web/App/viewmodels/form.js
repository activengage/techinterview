define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'modules/formhub', 'knockout'],
    function (system, app, viewLocator, formHub, ko) {

    return {
        displayName: 'Form',
        form: {
                FirstName: ko.observable(),
                LastName: ko.observable(),
                EmailAddress: ko.observable(),
                Comments: ko.observable()
        },
        activate: function () { },
        submit: function () {
            var that = this;
            return formHub.formAdded(ko.toJS(that.form));//.then(function (results) {
                //console.log(results);
                //that.forms(results);
            //});
        }

    };
});