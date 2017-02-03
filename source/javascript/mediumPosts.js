// Fetch Medium Posts

$.ajax({
  url:'https://extraction.import.io/query/extractor/75e0aa14-f206-4005-8128-ff2677957079?_apikey=789b35a235ec48e6823005570fa8f5896e68ecd50d7a9fb56f4e1f5b4d1189604720370ea198ddd8aaa9e738439c8220840c87080fdf24388a506ea8142954afa0e613f90a03cc850b401fb8aeac3b82&url=https%3A%2F%2Fmedium.com%2F%40kurtcunningham',
  crossDomain: true,
  dataType: 'json',
  success: function(response) {

    var posts = response.extractorData.data[0].group;

    $.each(posts, function(index, value) {
      var newPost = $("#postTemplate").clone();

      newPost.appendTo('.homepage__medium-posts');
      newPost.find('.post-title a').attr('href', value.post_title[0].href.split('?')[0]).text(value.post_title[0].text);
      newPost.find('.post-title a').attr('data-hover', value.post_title[0].text);
      newPost.find('.post-date').text(value.created_on[0].text);
      newPost.show();
      return index < 2;
    });

  },
  error: function(jqXHR, textStatus, errorThrown) {
    $('.posts').html('<article class="post-error">Ooops, something went wrong and posts could not be fetched.</article>');
  }
});