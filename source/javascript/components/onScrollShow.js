// On Scroll Show Element

// Global Variables
var tiles = $("ul#scroll-in-items li"),
    text = $(".page__reveal-text");

// Loop To Add Class
tiles.each(function(i) {
  if ($(this).isOnScreen() == true) {
    $(this).addClass('scroll-in');
    $(this).attr('aria-hidden', 'false'); // NOTE: Not using at the moment.
  }
});

text.each(function(i) {
  if ($(this).isOnScreen() == true) {
    $(this).addClass('is-visible');
  }
});

// Check Window For Element's Presence
$(window).scroll(function(d,h) {
  tiles.each(function(i) {
    a = $(this).offset().top + $(this).height();
    b = $(window).scrollTop() + $(window).height() + 400;
    if (a < b) $(this).addClass('scroll-in');
    if (a < b) $(this).attr('aria-hidden', 'false');
  });
});

$(window).scroll(function (d,h) {
  text.each(function (i) {
    a = $(this).offset().top + $(this).height();
    b = $(window).scrollTop() + $(window).height();
    if (a < b) $(this).addClass('is-visible');
  });
});