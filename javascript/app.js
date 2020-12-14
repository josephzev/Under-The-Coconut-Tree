function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}



function nav(){
          if(document.getElementById("ul-id").style.display=="none"){
             document.getElementById("ul-id").style.display = "block";
          }
          else{
              document.getElementById("ul-id").style.display = "none";
          }
         }

function modal_open(){
    document.getElementById("body").classList.add("show-video-modal");
    document.getElementById("body").classList.add("noscroll");
}          
function close_modal(){
    document.getElementById("body").classList.remove("show-video-modal");
    document.getElementById("body").classList.remove("noscroll");
}          



/* $(document).ready(function(){


	/* Toggle Video Modal
  -----------------------------------------*/
	/* function toggle_video_modal() {
	    
	    // Click on video thumbnail or link
	    $(".js-trigger-video-modal").on("click", function(e){
          
          // prevent default behavior for a-tags, button tags, etc. 
	        e.preventDefault();
        
          // Grab the video ID from the element clicked
          var id = $(this).attr('data-youtube-id');

          // Autoplay when the modal appears
          // Note: this is intetnionally disabled on most mobile devices
          // If critical on mobile, then some alternate method is needed
          var autoplay = '?autoplay=1';

          // Don't show the 'Related Videos' view when the video ends
          var related_no = '&rel=0';

          // String the ID and param variables together
          var src = '//www.youtube.com/embed/'+id+autoplay+related_no;
          
          // Pass the YouTube video ID into the iframe template...
          // Set the source on the iframe to match the video ID
          $("#youtube").attr('src', src);
          
          // Add class to the body to visually reveal the modal
          $("body").addClass("show-video-modal noscroll");
	    
      });

	    // Close and Reset the Video Modal
      function close_video_modal() {
        
        event.preventDefault();

        // re-hide the video modal
        $("body").removeClass("show-video-modal noscroll");

        // reset the source attribute for the iframe template, kills the video
        $("#youtube").attr('src', '');
        
      }
      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
	        
          // call the close and reset function
          close_video_modal();
	        
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            
            // call the close and reset function
            close_video_modal();
            
          }
      });
	}
	toggle_video_modal();



});  */