// On Scroll Show Element

// Global Variables
var tiles = $("ul#scroll-in-items li");

// Loop To Add Class
tiles.each(function(i) {
  if ($(this).isOnScreen() == true) {
    $(this).addClass('scroll-in');
    $(this).attr('aria-hidden', 'false'); // NOTE: Not using at the moment.
  }
})

// Check Window For Element's Presence
$(window).scroll(function(d,h) {
  tiles.each(function(i) {
    a = $(this).offset().top + $(this).height();
    b = $(window).scrollTop() + $(window).height();
    if (a < b) $(this).addClass('scroll-in');
    if (a < b) $(this).attr('aria-hidden', 'false');
  });
});