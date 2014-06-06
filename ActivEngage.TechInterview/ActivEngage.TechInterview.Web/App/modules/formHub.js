define(['durandal/app', 'durandal/system', 'jquery', 'jquery.signalr'],
    function (app, system, $, signalr) {
        var module = {
            requestId: 0,
            connect: function () {
                this.conn = $.hubConnection("./signalr", { useDefaultPath: false });
                this.conn.error(function (error) {
                    system.log(error);

                    //>>excludeStart("build", true);
                    alert(error);
                    //>>excludeEnd("build");
                });

                this.hub = this.conn.createHubProxy('formHub');

                // subscribe to chat lifecycle events coming from the hub
                this.hub.on('formAdded', this.formAdded);

                return this.conn.start().done(function () {
                });
            },
            callHub: function (methodName) {
                var hub = this.hub;
                var requestId = this.requestId++;
                var args = Array.prototype.slice.call(arguments, 1);

                system.log(hub.hubName + ":" + requestId + " - " + methodName + " invoking ", args);
                return hub.invoke.apply(hub, $.merge([methodName], args))
                    .done(function () {
                        system.log(hub.hubName + ":" + requestId + " - " + methodName + " invoke completed");
                    })
                    .fail(function (reason) {
                        system.error(hub.hubName + ":" + requestId + " - " + methodName + " failed - ", reason);
                    });
            },

            // hub methods
            GetForms: function () {
                return this.callHub("GetForms");
            },
            AddPerson: function (firstName, lastName, email, comments) {
                return this.callHub("AddPerson", firstName, lastName, email, comments);
            },

            // hub event handlers
            addNewPersonToGrid: function (form) {
                app.trigger('addNewPersonToGrid', form);
            },
        };

        return module;
    });
