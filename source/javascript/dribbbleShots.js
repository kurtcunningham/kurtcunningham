// Dribbble Shots - Jribbble Plugin Settings
$.jribbble.setToken('6b272ce9df85d391beab4d772876693d8962e47a25c4d1aa03ce6c5c042d8abe');

$.jribbble.users('cunninghamkurt').shots({per_page: 9}).then(function(shots) {
  var html = [];

  shots.forEach(function(shot) {
    html.push('<li class="homepage__dribbble-item">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.hidpi + '" class="homepage__dribbble-item__link">');
    html.push('<figure class="homepage__dribbble-item__text"> '+ shot.description +' </figure>');
    html.push('</a></li>');
  });

  $('.homepage__dribbble-list').html(html.join(''));
});