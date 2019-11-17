# rocket-launch

#Start the application

- git clone
- cd launcher

- npm install
- npm run start - to start the application
- npm run test - to run the unit testing

#Description:
- Rocket Launch application fetches the rockets launched by countries on the selected dates. Default value is set between 2015-08-20 and 2015-09-20.

#Libraries, tools , etc used:
- React,
- Redux,
- material-ui
- axios
- chart.js
- jscharting
- jest

#Features:
- allows the user to change the dates
- by clicking 'show' button it fetches the response using axios
- retrieved response is stored using redux
- Fetched response is plotted into a table with the selected fields
- Chart.js is used to render the bar chart on the number of launches made by the countries
- JScharting is used to mark the countries on the map, but its not working as expected.

#Redux

 Redux is used to showcase my experience in it, fetched json response can be stored in the local state and manipulated as well for smaller application. 

 #Understanding:
 - Application is built for the desktop users. Mobile responsiveness isn't mentioned in the problem statement.
 - Rendering a table with many columns on the mobile wont be giving a good user experience. So haven't tested/implemented for mobile device.
 
 #improvements:
 - Need to analyse an api which can help in marking the countries on the map. GoogleGEO API requires API key. and implement the country marking.
