$(document).ready(function(){

   //BUILD IN
   $('#container h1').css("opacity", "0");
   $('#centerwell').css("width", "0");
   $('#container h1').animate({
      'opacity': '0.01'
      }, 500, function() {
         $('#centerwell').animate({ 
      	  width: '100%'
      	  }, 700, function() {
            $('#primary_content').animate({
               'opacity': '1'
            }, 300, function() {
            $('#secondary_content').animate({
               'height': sch,
               'opacity': '1'
            }, 300, function() {
               $('#container h1').stop().animate({
                  opacity: "1"
               });
            })
         })
      })
   })
   
   // EVENTS
    $('#centerwell li').click(function() {
        window.open($(this).find('a').attr('href'));
      });
      
   $('#centerwell li').hover(function() {
      
      $('#content, h1').stop().animate({opacity: ".2"});
      $('.morph').stop().animate({'color': '#9EAEBE'}, 400);
      $('.morph_alt').stop().animate({'color': '#9EAEBE'}, 400);
            
      $(this).stop().animate({
      	width: "318px"
      	}, 300, function() {
      })
      $(this).find('h3').stop().animate({
      	backgroundPosition: "-72px"
      	}, 300, function() {
      })
   }, function() {
      $('.morph').stop().animate({'color': '#00aaf0'}, 400);
      $('.morph_alt').stop().animate({'color': '#00aaf0'}, 400);
      $('#content, h1').stop().animate({opacity: "1"});
   	$(this).stop().animate({
      	width: "72px"
      	}, 300, function() {
      })
      $(this).find('h3').stop().animate({
      	backgroundPosition: "0px"
      	}, 300, function() {
      })
   })
});
