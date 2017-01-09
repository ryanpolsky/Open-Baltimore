# Open-Baltimore

This is a single page web application made using the AngularJs framework. The purpose of this application is to pull data regarding 
the public libraries and museums of Baltimore, MD from the Open Baltimore site and allow the user to visualize, search and filter
the data.


# Getting Started


All necessary angular.js and chart.js libraries are included in the node_modules folder in this project, other libraries, such
as jQuery have a CDN linked in the index.html, so just the git clone is necessary.


To run this application you will need a local server, either through npm or XXAMP or an alternative.

To use npm, first go to https://nodejs.org to download npm. After that is installed, cd into the OpenBaltimore folder 
from wherever the git clone was performed. Run the command:
```npm install -g```

*Note, mac users may need to run*
```sudo npm install -g```

Now to install the local server run:

```npm install http-server -g```

*Again, Mac users may need to preface the command with 'sudo' and enter their credentails*

After that installs, enter the command ```http-server```to start up to local server on port 8080.
Open up a browser (Application was best tested on Chrome and Safari but should work fine with Mozilla or IE)
and navigate to localhost:8080 and the index.html file (The home page of the application) will display.

# Using the App

The app has three subviews: Home, Near Me, and Visualize. To display the navigation sidebar click on the Menu button.
Follow the instructions within the app to search, filter and visualize the Libraries and Musuems of Baltimore.

For example, in the 'Home' view, choose 'Central' from the first drop down menu and 'A-Z' from the second drop down.
Leave the text field blank and click on the button labeled 'Search'. This will display all of the libraries and museums
in Baltimore's Central district, sorted in alphabetical order. You can then change up the drop down selections, or 
start typing in the text field to narrow the search results down. 

To visualize data, simply navigate to the 'Visualize' view via the sidebar menu and choose which of visualiztion you prefer.
Each graph displays the number of museums and libraries by district. 

# Built With

-AngularJS: The framework used

-chart.js: Used to generate graphs 

-jQuery: Used to pull data from Open Baltimore



