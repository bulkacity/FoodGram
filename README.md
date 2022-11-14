## Foodstagram:
# Description
An application built using googles geolocation API and their search API. The application will display a grid of photos sourced from local restaurants nearby. The user will then have the option to click on one of the photos and the app will return information on the restaurant such as their address, and contact information.

# User story:
As a user, I want to see photos of food sourced locally from restaurants based on my location.

# Acceptance criteria:
It is done when the user is presented with a text box to enter a zip code
Then the user is given a feed of photos of food from nearby restaurants 
Then if a user likes a photo of the food, they can double click, and the location, and contact info of the restaurant will populate.

# Usage
Upon opening the webpage, the user is greeted with a prompt to allow the browser to access their location. After allowing it, the application will use googles geolocation and places APIs to load 9 random restaurants within a 2500 meter radius of the user, displaying an image from their page. Upon hovering over one of the boxes, the restaurants name, number, and address will appear as well as the "Bussin?" button. If the user clicks within the box, they will be taken to the webpage for that restaurant (if one exists). If the user likes what they see and would like to save the restaurant for another time, they can click the Bussin button to save the location to the sidebar of the website.

## WebPage

![WebPage in use](./assets/FoodGram.gif)


## Technologies Used

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://jquery.com/)
* [Font Awesome](https://fontawesome.com/)
* [Bulma](https://bulma.io)
* [Google Fonts](https://fonts.google.com/)
* [Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview)
* [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)