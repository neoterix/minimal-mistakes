/*!
* ChickenDinner 1.0
* Copyright 2014, Stephen Scaff - http://sosweetcreative.com 
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* USEAGE 
* For img tags
* =====================
* $('.js-chickendinner').chickenDinner({
*    path: 'images/',
*    fadeInTime:2000,
*    TheImages: ['ban1.png', 'ban2.png','ban3.png','ban4.png','ban5.png','ban6.png']
* });
*
* For Background Images
* =======================
* $('.js-chickendinner-bg').chickenDinner({
*    path: 'images/',
*    fadeInTime:2000,
*    cssBG: 'true',
*    TheImages: ['banner2.png', 'banner3.png','banner4.png','banner5.png','banner1.png']
* });
*/

(function($){
  $.chickenDinner = {
    defaults: {
      altTag: ['Banner Image manssss'],
      path: '/assets/images/banners/',
      fadeInTime:1800,
      TheImages: [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
  ]
    }
  };
  
  $.fn.extend({
    chickenDinner:function(options) {
      $.extend({}, $.chickenDinner.defaults, options);
      return this.each(function() {
        var TheImages = options.TheImages;
        var RandomMath = Math.floor(Math.random()*TheImages.length);
        var SelectedImage = TheImages[RandomMath];
        var imgPath = options.path + SelectedImage;
        var altTag = options.altTag;
        // Fade in Times
        var fadeInTime = options.fadeInTime;
        //Fade In animation - hide first
        $(this).css('display', 'none').fadeIn(fadeInTime);
        if(options.cssBG == 'true'){
          $(this).css('background-image', 'url(' + imgPath + ')');
        } else{
          $(this).attr( {
            src: imgPath,
            alt: altTag
          });
        }
      });
    }
  });
})(jQuery);