# javascript-challenge
A webpage for UFO sightings that uses JavaScript, HTML, and CSS, and D3.js. 
Website Link : https://tejalkotkar.github.io/javascript-challenge/UFO-level-1

This project demonstrates the use of Javascript to create an interactive website, specifically using D3.js to collect HTML form elements and adding event triggers to elements on the page to filter the given dataset based on filter criteria(user input). The dataset is a sample set of UFO sightings in the US & CA(the first two weeks of January 2010 only).

### Dataset
* [UFO Sightings Data](Instructions/StarterCode/static/js/data.js)

### Details
These are two pages on the site: Basic and Advanced.

The Basic site allows the user to enter a date in the date field and filter the table according to that date and display it once the "Filter Table" button is pressed.

The Advanced site allows more filters for the user including Date, City, State, Country, and Shape. The user can enter one or any number of these filters to return the filtered data to be displayed on the page as table.

Additionally, extra events were added just for fun! There is a Reset button which resets the table to its unfiltered state.

#### Error Handling:
An Error message will be displayed in two scenarios below:
1) There is no data filtered for given filter criteria.
Basic - No sighting found for date entered. Enter another date or click on Reset to load all sightings.
Advanced - No sighting found for searched criteria entered. Enter another criteria or click on Reset to load all sightings.

2) No filter criteria is entered and clicked on Filter Table buuton.
Basic - Date to be searched for is not entered. Please click on Reset to load all sightings.
Advanced - Search criteria is not entered. Please click on Reset to load all sightings.

### Previews

#### Basic Site:
![1_Basic_Search.png](Images/1_Basic_Search.png)

#### Error Message 1:
![2_Basic_Error_Message1.png](Images/2_Basic_Error_Message1.png)

#### Error Message 2:
![3_Basic_Error_Message2.png](Images/3_Basic_Error_Message2.png)

#### Advanced Site:
![4_Advanced_Search.png](Images/4_Advanced_Search.png)

#### Error Message 1:
![5_Advanced_Error_Message1.png](Images/5_Advanced_Error_Message1.png)

#### Error Message 2:
![6_Advanced_Error_Message2.png](Images/6_Advanced_Error_Message2.png)
