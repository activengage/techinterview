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
            if (that.form.FirstName() != undefined && that.form.LastName() != undefined && that.form.EmailAddress() != undefined && that.form.Comments() != undefined)
            {
                return formHub.addForm(ko.toJS(that.form)).then(function () {
                    that.form.FirstName(null);
                    that.form.LastName(null);
                    that.form.EmailAddress(null);
                    that.form.Comments(null);
                });
            }
            else
            {
                return app.showMessage('You must complete the form', 'Oops!', ['Ok']);
            }
        }

    };
});