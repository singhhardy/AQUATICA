// PRODUCT ADD TO CART ANIMATION

document.addEventListener("DOMContentLoaded", function(event) {


  const cartButtons = document.querySelectorAll('.cart-button');
  
  cartButtons.forEach(button => {
  
  button.addEventListener('click',cartClick);
  
  });
  
  function cartClick(){
  let button =this;
  button.classList.add('clicked');
  }
  
  
  
  });


// Contact

jQuery(function ($) {
  function init_map1() {
      var myLocation = new google.maps.LatLng(38.885516, -77.09327200000001);
      var mapOptions = {
          center: myLocation,
          zoom: 16
      };
      var marker = new google.maps.Marker({
          position: myLocation,
          title: "Property Location"
      });
      var map = new google.maps.Map(document.getElementById("map1"),
          mapOptions);
      marker.setMap(map);
  }
  init_map1();
});

  