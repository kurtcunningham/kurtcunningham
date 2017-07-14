var $darkenTrigger = $('#darken-text');

$darkenTrigger.on('click', function (e) {
  e.preventDefault();
  $('p, li').toggleClass('text--dark');
});