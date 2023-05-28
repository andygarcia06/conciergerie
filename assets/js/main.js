﻿
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector(".sidebar");
  const closeButton = document.querySelector(".close-button");
  const siteHeader = document.querySelector(".conciergerie-main-nav");




  menuIcon.addEventListener("click", function() {
    sidebar.classList.toggle("open");
  });

  closeButton.addEventListener("click", function() {
    sidebar.classList.remove("open");
  });
});

document.getElementById("phone-icon").addEventListener("click", function() {
  var sidebar = document.getElementById("second-sidebar");
  
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";

    // Ajouter un gestionnaire d'événement pour le clic sur l'icône de fermeture
var closeIcon = document.querySelector('.close-icon-second')
closeIcon.addEventListener('click', function() {
// Cacher la deuxième sidebar
secondSidebar.style.display = 'none';
});
  }
});



// GSAP

TweenMax.from(".conciergerie-logo", 1, {
  opacity: 0,
  x: -40,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1, {
  opacity: 0,
  x: -20,
  ease: Power3.easeInOut
}, 0.08)


TweenMax.from(".menu", 1, {
  opacity: 0,
  delay: .6,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.from(".conciergerie-main-title", 1, {
  opacity: 0,
  delay: 1,
  y: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".next-section", 1, {
  opacity: 0,
  delay: 1.6,
  y: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".line-one", 1, {
  opacity: 0,
  delay: 0.8,
  y: -1000,
  ease: Expo.easeInOut
})
TweenMax.from(".line-two", 1, {
  opacity: 0,
  delay: 1.5,
  y: -800,
  ease: Expo.easeInOut
})


TweenMax.from(".conciergerie-year", 1, {
  opacity: 0,
  delay: 1.4,
  y: -20,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom(".conciergerie-media ul li", 2, {
  opacity: 0,
  delay: 3.2,
  y: 40,
  ease: Expo.easeInOut
}, 0.2)


  jQuery.noConflict()(function ($) {

  'use strict';

  let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iPhone: function () {
    return navigator.userAgent.match(/iPhone/i);
  },
  iPad: function () {
    return navigator.userAgent.match(/iPad/i);
  },
  iPod: function () {
    return navigator.userAgent.match(/iPod/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
  };


  /* ================================= */
  /* :::::::::: 1. Loading ::::::::::: */
  /* ================================= */


  $(document).ready(function () {

    mt_minimal_loading();
    mt_mobile_menu();
    mt_texteffect();
    mt_shop();
    mt_blog();
    mt_portfolio();
    mt_lightCase();
    mt_wow();
    mt_parallax();
    mt_flexslider();
    mt_ajax_contact_form();
    mt_skillbars_shortcode();
    mt_counter_shortcode();
    mt_google_map();

  });
 

  function mt_minimal_loading() {
  $(".minimal-page-loader").fadeOut("slow");
  }

  function mt_image_loading() {
  $(".loader-icon").delay(500).fadeOut();
  $(".image-page-loader").delay(700).fadeOut("slow");
  }

  /* ================================= */
  /* ::::::: 2. Mobile Menu :::::::::: */
  /* ================================= */

  function mt_mobile_menu() {

  $("#glacier_menu").slicknav({
    prependTo: 'header .col-md-12',
    allowParentLinks: false
  });
  }

  /* ================================= */
  /* :::::: 3. Text animation :::::::: */
  /* ================================= */

  function mt_texteffect() {

  $(function () {
    $('.info h2').textillate();
  });
  }


  /* ================================= */
  /* ::::::::: 5. Skillbars :::::::::: */
  /* ================================= */

  function mt_skillbars_shortcode() {

  $('.skillbar').appear(function () {
    let skillbar = $(this).html();
    $(this).skillBars({
      from: 0,
      speed: 3000,
      interval: 100,
      decimals: 0,
    });
  });
  }

  /* ================================= */
  /* :::::::::: 6. Counter ::::::::::: */
  /* ================================= */

  function mt_counter_shortcode() {

  $('.timer .number').appear(function () {
    let counter = $(this).html();
    $(this).countTo({
      from: 0,
      to: counter,
      speed: 3000,
      refreshInterval: 70
    });
  });
  }

  /* ================================= */
  /* :::::::: 7. LightCase ::::::::::: */
  /* ================================= */

  function mt_lightCase() {

  $('a.showcase').lightcase({
    transition: 'scrollVertical',
    speedIn: 400,
    speedOut: 300,
  });
  }

  /* ================================= */
  /* :::::::::::: 8. Blog :::::::::::: */
  /* ================================= */

  function mt_blog() {

  $('#grid-blog-column-1').cubeportfolio({
    filters: '',
    layoutMode: 'masonry',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 1,
    }, {
      width: 1100,
      cols: 1,
    }, {
      width: 800,
      cols: 1,
    }, {
      width: 480,
      cols: 1,
      options: {
        caption: '',
        gapHorizontal: 30,
        gapVertical: 30,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  $('#grid-blog-column-2').cubeportfolio({
    filters: '',
    layoutMode: 'masonry',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 2,
    }, {
      width: 1100,
      cols: 2,
    }, {
      width: 800,
      cols: 2,
    }, {
      width: 480,
      cols: 2,
      options: {
        caption: '',
        gapHorizontal: 30,
        gapVertical: 30,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });


}

  /* ================================= */
  /* ::::::::: 9. Portfolio :::::::::: */
  /* ================================= */

  function mt_portfolio() {

  $('#grid-mosaic').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'mosaic',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 5,
    }, {
      width: 1100,
      cols: 4,
    }, {
      width: 800,
      cols: 3,
    }, {
      width: 480,
      cols: 2,
      options: {
        caption: '',
        gapHorizontal: 15,
        gapVertical: 15,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 5,
    gapVertical: 5,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  $('#grid-masonry').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'masonry',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 5,
    }, {
      width: 1100,
      cols: 4,
    }, {
      width: 800,
      cols: 3,
    }, {
      width: 480,
      cols: 2,
      options: {
        caption: '',
        gapHorizontal: 15,
        gapVertical: 15,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 15,
    gapVertical: 15,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  $('#grid-masonry-2').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'mosaic',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 5,
    }, {
      width: 1100,
      cols: 4,
    }, {
      width: 800,
      cols: 3,
    }, {
      width: 480,
      cols: 2,
      options: {
        caption: '',
        gapHorizontal: 15,
        gapVertical: 15,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  }


  /* ================================= */
  /* :::::::::::: 10. Wow :::::::::::: */
  /* ================================= */

  function mt_wow() {
  new WOW().init();
  }

  /* ================================= */
  /* :::::::: 11. Parallax ::::::::::: */
  /* ================================= */

  function mt_parallax() {
  $('.parallax').jarallax({
    speed: 0.5,
    noAndroid: true
  });
  }


  /* ================================= */
  /* ::::::: 12. Flex Slider ::::::::: */
  /* ================================= */

  function mt_flexslider() {
  $('.flexslider').flexslider({
    controlNav: false,
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
    slideshowSpeed: '3000',
    pauseOnHover: true
  });
  }

  /* ================================= */
  /* :::::: 13. Contact Form ::::::::: */
  /* ================================= */

  function mt_ajax_contact_form() {

      $('#submit').on("click", function() {  
           // validate and process form here 
           $("#ajax-contact-form").validate({
             
                  rules:{

                        name:{
                            required: true,
                        },

                        email:{
                            required: true,
                            email: true,
                        },

                        phone:{
                            required: true,
                        },

                        msg:{
                            required: true,
                        },
                   },

                   messages:{

                          name:{
                            required: "The field is required.",
                        },

                        email:{
                            required: "The field is required.",
                            email: "The e-mail address entered is invalid.",
                        },

                        phone:{
                            required: "The field is required.",
                        },

                          msg:{
                            required: "The field is required.",
                        },

                   },

                // JQuery's awesome submit handler.
                submitHandler: function(form) {

                     // Create letiables from the form
                     let name = $('input#name').val(); 
                     let email = $('input#email').val();  
                     let phone = $('input#phone').val(); 
                     let msg = $('textarea#msg').val();

                     // Create letiables that will be sent in a URL string to contact.php
                     let dataString = '&name='+ name + '&email=' + email + '&phone=' + phone + '&msg=' + msg;
        
                        $.ajax({
                            type: "POST",
                            url: "php/contact.php",
                            data: dataString,
                            success: function(data) {
                                  if(data == 'OK') {
                                    let result = '<div class="notification_ok"><i class="fa fa-check"></i> Your email was sent. Thanks!</div>';
                                    $("#ajax-contact-form").find('input[type=text], input[type=email], textarea').val("");
                                   
                                  } else {
                                  result = data;
                                 }
                                 $('#note').html(result).fadeIn();
                                 setTimeout(function () {
                                   $('#note').html(result).fadeOut();
                                 }, 4000);
           
                          }
                         
                      });
                     return false;
               }
          });
    });

  }

  /* ================================= */
  /* :::::::: 14. Google Map ::::::::: */
  /* ================================= */

  function mt_google_map() {

  if ($('#google-container').length) {

    //set your google maps parameters
    let latitude = -37.8602828,
      longitude = 145.079616,
      map_zoom = 10;

    //google map custom marker icon - .png fallback for IE11
    let is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    let marker_url = (is_internetExplorer11) ? 'assets/images/icon-location.png' : 'assets/images/icon-location.png';

    //define the basic color of your map, plus a value for saturation and brightness
    let main_color = '#2d313f',
      saturation_value = -70,
      brightness_value = 5;

    //we define here the style of the map
    let style = [{
        //set saturation for the labels on the map
        elementType: 'labels',
        stylers: [{
          saturation: saturation_value
        }, ]
      },
      { //poi stands for point of interest - don't show these lables on the map 
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show highways lables on the map
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show local road lables on the map
        featureType: 'road.local',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show arterial road lables on the map
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show road lables on the map
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      //style different elements on the map
      {
        featureType: 'transit',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi.government',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi.business',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'transit',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'landscape',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]

      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      }
    ];


    //set google map options
    let map_options = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: map_zoom,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      styles: style,
    }

    //inizialize the map
    let map = new google.maps.Map(document.getElementById('google-container'), map_options);
    //add a custom marker to the map      


    let contentString = '<div class="contact-info-box left">' +
      '<h3>CONTACT INFORMATION.</h3>' +
      '<ul>' +
      '<li><i class="fa-solid fa-location-dot"></i>Melbourne, Australia</li>' +
      '<li><i class="fas fa-phone"></i>765-302-2878</li>' +
      '<li><i class="fas fa-paper-plane"></i><a href="mailto:">name@domain.com</a></li>' +
      '<li><i class="fas fa-globe"></i><a href="">mycompanyname.com</a></li>' +
      '</ul>' +
      '</div>';

    let infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300,

    });

    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: map,
      title: 'Melbourne, Australia',
      visible: true,
      icon: marker_url,
    });

    infowindow.open(map, marker);

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, "resize", function () {
      let center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);

    });


    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
      //grap the zoom elements from the DOM and insert them in the map 
      let controlUIzoomIn = document.getElementById('zoom-in'),
        controlUIzoomOut = document.getElementById('zoom-out');
      controlDiv.appendChild(controlUIzoomIn);
      controlDiv.appendChild(controlUIzoomOut);

      // Setup the click event listeners and zoom-in or out according to the clicked element
      google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
        map.setZoom(map.getZoom() + 1)
      });
      google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
        map.setZoom(map.getZoom() - 1)
      });
    }

    let zoomControlDiv = document.createElement('div');
    let zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
  }
  }

  });

  
  

  // Conciergerie contact block fade in and fade out













 

