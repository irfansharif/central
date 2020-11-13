// Grafted from https://github.com/remy/permalink
(function () {
  'use strict';

  function permalink(){
    var $ = document.querySelectorAll.bind(document);

    var anchor = document.createElement('a');
    anchor.className = 'anchor'; // Matches the tag defined in css/style.css
    anchor.innerHTML = '<span></span>';

    [].forEach.call($('h2,h3'), function (el) {
      var clone = anchor.cloneNode(true);
      clone.href = '#' + el.id; // Element ID is assumed to always exist (generated by Hugo)
      el.insertBefore(clone, el.firstChild);
    });
  }

  if (document.querySelector && Function.prototype.bind) {
    permalink();
    if (window.location.hash && window.scrollY === 0) {
      // Touching the location will cause the window to scroll.
      window.location = window.location;
    }
  }
})();
