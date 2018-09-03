'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};


// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

$(function() {
// placeholder
//-----------------------------------------------------------------------------
    $('input[placeholder], textarea[placeholder]').placeholder();

    setInterval(function(){
      $('.mouse').toggleClass('hover');
    }, 1000);


    $('.js-video-header').click(function(event){
      event.preventDefault();
      var h = $('#ytplayer').height(),
          w = $('#ytplayer').width(),
          h = $(this).attr('href'),
          lv = $(this).data('video');
      $('.header__central').addClass('hide');
      $('.js-block-'+h).removeClass('hide');

      $('#ytplayer').remove();
      $(".header").prepend('<div id="ytplayer" class="header__video"></div>');

      var player = new YT.Player('ytplayer', {
        height: h,
        width: w,
        videoId: lv,
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          autohide: 1,
          modestbranding: 1,
          vq: 'hd1080'},        
      });
      return false;
    });

    // $('#accordionExample').on('hide.bs.collapse', function (event) {
    //   // $(event.target).parent('.card').removeClass('show');
    // })    

    $('#accordionExample').on('show.bs.collapse', function (event) {
      $('#accordionExample .show').removeClass('show');
      $(event.target).parents('.card').addClass('show');
    })    

    $('.recomend_slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,      
      adaptiveHeight: true
    });

    $('.js-read-mo').click(function(event){
      event.preventDefault();
      $(this).parents('.recomend_slider_item').toggleClass('full');
      return false;
    });

    $('.js_products_one').click(function(event){
      event.preventDefault();
      console.log('js_products_one');

      return false;
    });
    
    $('.js-bt-menu').click(function(event){
      event.preventDefault();
      console.log('full_menu');
      $('.full_menu').toggle();
      return false;
    });      

    $('.js-bt-order').click(function(event){
      event.preventDefault();
      console.log('form_callback');
      $('.form_callback').toggle();
      return false;
    });     
});

var map;
function initMap() {
    var myLatLng = {lat: 55.7991476, lng: 37.5275427};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        scrollwheel: false,
        center:  {lat: 55.7991476, lng: 37.5275427},  // Brooklyn.
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        }
    });

    var image = '../images/map-icon.png';
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        title: 'Точка на карте'
    });
}

