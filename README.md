ActivEngage Tech Interview
=============

Welcome to the ActivEngage Tech Interview.  This portion is designed to give us an understanding of your overall aptitude and ability to grok new development approaches.  There is a lot here and you may not be able to complete it in the time you have available.  We expect you to have an understanding of how you would approach each of the tasks including where the code goes.  Good luck!

## Technologies
* ASP.NET MVC
* Durandal - http://durandaljs.com/get-started.html
  * KnockoutJS - http://knockoutjs.com/examples/
  * RequireJS - http://requirejs.org
  * Bootstrap 2 - http://getbootstrap.com/2.3.2/index.html
* SignalR - http://www.asp.net/signalr/overview/signalr-20/getting-started-with-signalr-20/tutorial-getting-started-with-signalr-20-and-mvc-5
* RavenDB - http://ravendb.net/docs/2.5/client-api/basic-operations 

## Business Requirements
1. Show a list of completed forms
2. Add a new form consisting of first name, last name, email address, and comments.
3. Validate the form fields

## Technical Requirements
1. Data must be stored in RavenDB
2. All communication should be handled over the SignalR connection

## Steps that have already been completed
1. A starter project has been created in this repository.  
2. The necessary nuget packages for Durandal, RavenDB, SignalR, and jQuery have been installed and configured
3. A starter server-side Form Hub has been created
4. The client-side Form Hub module has been created

## Steps that you must complete
1. Create a form viewmodel and view 
2. Fill in the server-side FormHub code to retrieve existing forms
3. Create an Add Form hubmethod on the server and client
4. Create an Add Form dialog
5. Show completed forms
6. Publish a signalr event when a form is added
 

