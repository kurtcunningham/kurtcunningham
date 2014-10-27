//DRIBBLE PLUGGIN 

$(document).ready(function () {

// API Ref: http://api.dribbble/players/:id/shots
  $.jribbble.getShotsByPlayerId('cunninghamkurt', function (playerShots) {
      var html = [];
      $.each(playerShots.shots, function (i, shot) {
          html.push('<li><h6>' + shot.title + '</h6>');
          html.push('<img src="' + shot.image_teaser_url + '" ');
          html.push('alt="' + shot.title + '"></a></li>');
      });

      $('#shotsByPlayerId').html(html.join(''));
  }, {page: 1, per_page: 4});
	
});

//Active homepage browser
$( "li" ).on( "click", function() {
  event.preventDefault();
  $(this).toggleClass('selected');
});