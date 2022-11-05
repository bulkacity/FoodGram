/*

Open application 

Upon opening webpage, function() of google geolocation API is ran automatically.

After document load, run function(findLocalRestaurants) to search through Google Maps for restaurants.(function will search for max of 9 restaurants(limit the query) with in a 2500 meter radius)
    
    findLocalRestaurants function loops for a total of 9 iterations. This will return an array of objects.
    
    return Array of objects containing name,address,number,photos 

    function loadPhotos() this function will load photos
        Create attributes of images utilizing JQUERY to set attributes to divs in the main HTML document
        --> Module 5 ex. 07 Module 4 ex 06

        create HTML src attribute with JQUERY to add an HTML and link to the photo
            Requires function to have an event handler
            
    add function for API 2 , currently options are play random sound upon picture clicks 
        --> Module 5 ex 03 and module 04 ex 12 and module 4 ex 19

add local storage for places visited and liked

add popout form for user input, this is going for radius input and keyword



*/
let pos;
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;
var placeIdExtracted=[];
var imgLinks = document.querySelectorAll('img');
console.log (imgLinks.length);
counterPic=0;
function initMap(){

    
    bounds = new google.maps.LatLngBounds();
    infoWindow = new google.maps.InfoWindow;
    currentInfoWindow = infoWindow;

    // Geolocation
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };   
               
            // Call Places Nearby Search on user's location
            LocalSearch((pos.lat),(pos.lng))

        },() => {
            // Browser supports geolocation, but user has denied permission
            handleLocationError(true, infoWindow);
          });
        } else {
          // Browser doesn't support geolocation
          handleLocationError(false, infoWindow);
    
        }
    
        
}

function LocalSearch(latInput,lngInput) {
    var pyrmont = new google.maps.LatLng(latInput,lngInput);
  
    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
      });
  
    var request = {
      location: pyrmont,
      radius: '2500', // make this an input field
      keyword: 'Restaurant' // make this an input field
    };
  
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
   
    
  }
  
  function callback(results, status) {
    console.log(results[1].place_id)
    console.log(results)
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        placeIdExtracted[i] = results[i].place_id;
        
      }
      
    }
    console.log("The IDs are here" + placeIdExtracted + "the")
    

        for( var i=0;i<=placeIdExtracted.length;i++) {
            searchPicWithID(placeIdExtracted[i])
            console.log("testing"+[i]);

  }
}

  function searchPicWithID(arrayPlaceID){
    //defining the return of picture elements
    
    var requestPic = {
        placeId: arrayPlaceID,
        fields: ['photos','name', 'rating', 'formatted_phone_number']
      };
      service = new google.maps.places.PlacesService(map);
     service.getDetails(requestPic, callback);
      // goal here is to input a function that will take the (place[i].photo[1].getUrl and add), which is the result of the photo attributes and then generate a class object into the html 
      
function callback(place, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    
    console.log(place);
    let firstPhoto = place.photos[1];
    let photo=document.createElement('img');
    photo.classList.add('hero');
    photo.src = firstPhoto.getUrl();
    console.log("Selecting image source"+ photo.src);
    if(!counterPic<imgLinks.length){
    imgLinks[counterPic].setAttribute("src",photo.src)
    counterPic++;
  }
}
   
               
}
  }
//   service.getDetails(request, callback);
