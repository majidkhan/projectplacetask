$(document).ready(function () {

  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });

  $('#sidebar a').click(function(e) {
    e.preventDefault();
    $('#sidebar a').removeClass('active');
    $(this).addClass('active');
  });

});
