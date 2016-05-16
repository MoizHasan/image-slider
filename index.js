
$(document).ready(function() {
  var n = 1;
  var imgCount = $('#images img').length;
  showSlide(n);

  var activityTimeout = setTimeout(inActive, 4000);

  function inActive(){
    nextSlide();
    resetActive();
  }

      function resetActive(){
        clearTimeout(activityTimeout);
        activityTimeout = setTimeout(inActive, 4000);
    }

  //insert round icons under slideshow.
  for (var i = 0; i < imgCount; i++) {
    var circle = "<div class = 'circles' id = toggle-" + (i+1) +"></div>";
    $(".img-container").append(circle);
  }

  $(".circles").on('click', function() {
    var id = $(this).attr('id');
    id = id.match(/[0-9]/);
    showSlide(id);
  });

  function nextSlide() {
    resetActive();
    if (n < imgCount) {
      n++;
    } 
    else {
      n = 1;
    } 
    showSlide(n);
  }

  function prevSlide() {
    resetActive();
    if (n > 1) {
      n--;
    }
    else {
      n = imgCount;
    }
    showSlide(n);
  }


  $('#right').click(function() {
    nextSlide();
  });

  $('#left').click(function() {
    prevSlide();
  });

  $('#toggle-' + n).css('background-color', 'black');
});



function showSlide(n) {
  $('#images img').hide(); // hide previous slide.
  $('#images img:nth-of-type(' + n + ')').show();
  $('.circles').css('background-color', 'white');
  $('#toggle-' + n).css('background-color', 'black');
}



