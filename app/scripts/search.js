
$("#search").change(function(){
  var term = $( "#search" ).val();
  $.getJSON("http://caption-search.dx.artsmia.org/tag/" + term, function(data) {
    console.log(data);
    $.each(data, function(key, val){
      var imgsrc = val.id.replace(/objects/, 'images');
      var objectID = val.id.replace('http://api.artsmia.org/objects/', '');
      $(".horizontal_list").append("<div class='horizontal_list_item'><div class='result_image'><img src='" + imgsrc + "/medium.jpg' ><div class='action_bar'><div class='result_basic_info'><p>" + val.title + "<br>" + val.room + "</p></div><ul class='action_list'><li class='action_item'><a href='#' title='download'><i class='fa fa-download'></i></a></li><li class='action_item'><a href='#' title='location'><i class='fa fa-map-marker'></i></a></li><li class='action_item'><a href='#' title='love it!'><i class='fa fa-heart-o'></i></a></li><li class='action_item'><a onClick='javascript:void(0)' id='" + objectID + "' class='details' title='more info'><i class='fa fa-navicon'></i></a></li></ul></div></div></div>");
      $(".action_bar").hide();
    });
 //do something there
 $(".result_image").on("mouseenter mouseleave", function(){
   $(this).children(".action_bar").slideToggle(500);
 });
   $(".dynamic_content").slideDown(500);
   $(".header").removeClass("landing");
   $(".search_results").fadeIn(1500);
   $(".special_features, .search_color, .search_artist, .search_highlights, .search_new").fadeOut(200);
   var results = $(".horizontal_list").width();
   if ($(window).width() > results){
     $(".next, .prev").hide();
   }
   else{
     $(".next, .prev").show();
   }
   $(".details").click(function() {
     $(".selected_result").slideDown(500);
     var id = $(this).attr('id');
     $.getJSON("http://api.artsmia.org/objects/" + id, function(record){
       console.log(record);
     });
   });
});
});
