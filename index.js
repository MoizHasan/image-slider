
$(document).ready(function() {
  var n = 1;
  var imgCount = $('#images img').length;
  showSlide(n);

$('#right').click(function() {
  if (n < imgCount) {n++;}
  showSlide(n);
});

$('#left').click(function() {
  if (n > 1) {n--;}
  showSlide(n);
}); 

});



function showSlide(n) {
  $('#images img').hide(); // hide previous slide.
  $('#images img:nth-of-type(' + n + ')').show();
}