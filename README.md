This document will provide instructions for creating your first Node and Angular application.


The first step is to install node.js.

go to node.js.org and install the version of Node that is recommened for most users.

As of 10/20/2017, that is 6.11.4.

Don't change any of the settings when you install it.

Go to https://github.com/rebeccajkahn/techlady/

Download and unzip the files included.


Open Command Prompt (on windows, this is accessible by typing cmd in your search bar)
Access the files downloaded and unzipped from Github.

Command line tips:
Use cd and the name of a folder to move into a folder below the one you are in - e.g. cd downloads 
.. to move up a folder
dir to view the contents of a folder


First, access the contents of the Express folder.

This folder contains within it two very important folders: index.js and package.json.

Index.js contains within it the code for our application.
Package.json contains a list of packages necessary to run the application.

To run an application, first type "node index.js". You'll see that this fails because the express module, which is necessary for our application, has not yet been installed.

So your first step when installing and running an application is to run npm install, which installs the packages noted in the package.json file.

Now we can run our Node.JS application by typing "node index.js"

And now you'll see that there is a message appearing in the command prompt, which reads that "The server is now running at port 3002. Check out http://localhost:3002/books.json to take a peak at it."

So go ahead and take a look at this page, which will be what provides information to the front end of your app when it is created.

Take a look at the code within index.js and if you like, make some changes to it, for example, add something to the book list to see that it does update.

If you make changes, be sure to stop the server using ctrl-C and then enter "node index.js" to run it again. In a real development environment, you would use something called nodemon to restart the server whenever changes are made.

Walk through the node.js code together and turn off cors. Ask people to explain how the get and post requests work.

Angular.

Open up another instance of your command line, using cmd if necessary. Be sure to leave the other command line running.

Navigate to the Angular folder within the folder you downloaded from github.

As before, run the command npm install.

After it finishes successfully, run npm start.

Take a look at localhost:3000. You have a list of books - this is displayed from the original data from the Node.JS rest api. Sending a name, after pressing the submit button, that generates a post request, which updates the list of content. The response received is then subsequently displayed.

Let's take a look at some of the underlying code that underlies this application. First, go into the Angular folder. It's worth noting that there is a package.json folder here too that tells the application which dependencies to install, which was referenced when we ran the install npm command in this folder earlier.

Look within the src folder, and now within app. 

You'll notice that some files are .ts files and some are javascript and some are linked. We are going to focus on the ts files - Angular is written in a easy to learn variant of JavaScript called TypeScript. 

The major files to point out here are app.module.ts, book.ts and app.component.ts.

App.module.ts contains links to all other module code referred to during the application, so it would need to be updated if additional pages or dependencies are added. You will see that it mentions both app.component and book.ts.

Book provides a data model, describing the number of fields required for the data our forms will be submitting.

The next step is to open app.component.ts, which is where the bulk of the code that creates our main front end page that we've seen is displayed. At the top - it calls the dependencies used, including book.

It has a section at the top which includes all dependencies, including the data model for book and also a number of other component dependencies that we're not going to go into too much detail on.

The basic building in angular is called a component. Aside from the dependencies, it consists of a template, which displayed content, and a component class which controls interactivity and data for the application. 

So there are a few really important features within each of these sections I want to point out. 

The very first thing this application does is it loads data via an http-get request. How does it know to do this first? It has a section here called ngOnInit, which implements what's within it before it does anything else. And here what it does it populates the book object with the results of books.json. 

How does angular display this data? If you have a list of data, you use something called an ngFor to display it. You'll see it says li *ngFor="let book of books>followed by {{book.name}} in curly brackets. That tells angular to create an li element for each item in the  book list and display within it the book's name. Curly bracket are what we use to access variable content from the component class. Another example is how the name is displayed. As you can see, the name is defined in the component class delay and then is displayed in the H1 using curly brackets.

The other really important thing on this page is the form. There is some code that ties it into the Book object model, but I'm not doing to delve into that in much detail. But it is an important topic, and worth exploring on your own using the angular and other documentation. 

For now, I want to point out how at the top, the form connects its submit button the function onSubmit(bookForm). If you scroll down, onSubmit(bookForm) calls the http.post function and passes in bookForm.value. (https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular)

If you visit the back-end again, you'll see this content becomes req.body, which is then added to the content.

Here's a couple of possible activities, which we can work together to figure out:

Add and display another variable.
Break the application and fix it. This is a super important  skill.
