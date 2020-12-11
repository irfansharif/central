// Show an alert if this js file has been loaded twice.
if (window.loaded) {
  window.alert("You've loaded load-photoswipe.js twice.")
}
var loaded = 1

$( document ).ready(function() {
  // Initialise Photoswipe.
  var items = []; // Array of slide objects that will be passed to PhotoSwipe()
  // For every figure element on the page..
  $('figure').each( function() {
    // Ignore any figures where class="no-photoswipe".
    if ($(this).attr('class') == 'no-photoswipe') return true;
    // Get properties from child a/img/figcaption elements.
    var $figure = $(this),
        $a      = $figure.find('a'),
        $img    = $figure.find('img'),
        $src    = $a.attr('href'),
        $title  = $img.attr('alt'),
        $msrc   = $img.attr('src'),
        $div    = $figure.find('div');

    if ($div.attr('data-size')) {
      // If data-size on <figure> tag is set, read it and create an item.
      var $size   = $div.attr('data-size').split('x');
      var item = {
        src   : $src,
        w     : $size[0],
        h     : $size[1],
        title : $title,
        msrc  : $msrc
      };
    } else {
      // If not, set temp default size then load the image to check actual size.
      var item = {
        src   : $src,
        w     : 800, // Temp default size
        h     : 600, // Temp default size
        title : $title,
        msrc  : $msrc
      };

      // Load the image to check its dimensions. Update the item as soon as w
      // and h are known (check every 30ms).
      var img = new Image();
      img.src = $src;
      var wait = setInterval(function() {
        var w = img.naturalWidth,
            h = img.naturalHeight;
        if (w && h) {
          clearInterval(wait);
          item.w = w;
          item.h = h;
        }
      }, 30);
    }

    // Save the index of this image then add it to the array
    var index = items.length;
    items.push(item);

    // Event handler for click on a figure.
    $figure.on('click', function(event) {
      event.preventDefault(); // Prevent the normal behaviour i.e. load the <a> hyperlink.
      // Get the PSWP element and initialise it with the desired options.
      var $pswp = $('.pswp')[0];
      // Ref: https://photoswipe.com/documentation/options.html.
      var options = {
        index: index,
        bgOpacity: 0.95,
        showHideOpacity: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0,
        // Gallery options
        maxSpreadZoom: 1,
        getDoubleTapZoom: function (isMouseClick, item) {
            return item.initialZoomLevel;
        },
        zoomEl: false,
        counterEl: false,
        preloaderEl: false,
        shareEl: false,
        fullscreenEl: false,
        addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
            if(!item.title) {
                captionEl.children[0].innerHTML = '';
                return false;
            }
            captionEl.children[0].innerHTML = item.title;
            // captionEl.children[0].style.width = (item.w * item.fitRatio) + 'px';
            return true;
        },
      }
      new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options).init();
    });
  });
});
