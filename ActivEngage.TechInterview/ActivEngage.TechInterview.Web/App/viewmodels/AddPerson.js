define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.


    return {
        displayName: 'AE Add person',
        activate: function () {
            // Reference the auto-generated proxy for the hub.  
            var form = $.connection.formHub;
            $('#save').click(function () {
                alert("save");
                // Call the Send method on the hub. 
                form.server.AddPerson($('#firstName').val(), $('#lastName').val(), $('#email').val(), $('#comments').val());
                // Clear text box and reset focus for next comment. 
                $('#firstName').val('').focus();
                $('#lastName').val('');
                $('#email').val('');
                $('#comments').val('');
            });
        },
    };
});