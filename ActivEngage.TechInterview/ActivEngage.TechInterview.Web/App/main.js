requirejs.config({
    urlArgs: 'version=' + new Date().getTime(),
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions',
        'jquery.signalr': '../Scripts/jquery.signalR-2.0.2',
        },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'jquery.signalr': {
                deps: ['jquery'],
                exports: 'jQuery'
        }
    }
});

define('jquery', function() { return jQuery; });
define('knockout', ko);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'modules/formhub'],
    function (system, app, viewLocator, formHub) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'ActivEngage Tech Interview';

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    $.when(formHub.connect(), app.start()).then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');

        formHub.start();
    });
});