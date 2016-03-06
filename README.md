# Project Description
This is a simple project that reads data from a data source (CSV file) and plots it onto a leaflet map. It is a Spring Boot project built with Gradle as the build system within a Jetty container. Spring Initializr was used to get a template app up and running fairly quickly. AngularJS is used on the front-end along with LeafletJS. 

## Build/Run Instructions
* Open the terminal and run the following command at the root of the project to fetch front-end dependencies:
```
npm install
bower install
```
* Select option 1 if you get asked about leaflet version
* Run the following command to build the project:
```
gradle clean build
```
* When the build is successful, run the following command to start the application:
```
gradle run
```
* Now, open up the browser go to http://localhost:8080/ and enjoy the application