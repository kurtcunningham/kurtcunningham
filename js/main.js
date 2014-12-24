//DRIBBLE PLUGGIN 
(function(e){"use strict";e.jribbble={};var t=function(t,s){e.ajax({type:"GET",url:"http://api.dribbble.com"+t,data:s[1]||{},dataType:"jsonp",success:function(e){e===undefined?s[0]({error:!0}):s[0](e)}})},s={getShotById:"/shots/$/",getReboundsOfShot:"/shots/$/rebounds/",getShotsByList:"/shots/$/",getShotsByPlayerId:"/players/$/shots/",getShotsThatPlayerFollows:"/players/$/shots/following/",getPlayerById:"/players/$/",getPlayerFollowers:"/players/$/followers/",getPlayerFollowing:"/players/$/following/",getPlayerDraftees:"/players/$/draftees/",getCommentsOfShot:"/shots/$/comments/",getShotsThatPlayerLikes:"/players/$/shots/likes/"},o=function(e){return function(){var s=[].slice.call(arguments),o=e.replace("$",s.shift());t(o,s)}};for(var r in s)e.jribbble[r]=o(s[r])})(jQuery,window,document);

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
$( ".clip" ).on( "click", function() {
  event.preventDefault();
  $(this).toggleClass('selected');
});