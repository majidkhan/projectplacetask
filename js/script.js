$(document).ready(function () {

  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });

  $('#sidebar a').click(function(e) {
    e.preventDefault();
    $('#sidebar a').removeClass('active');
    $(this).addClass('active');
  });

  $('a.rectangle').click(function(e) {
//    e.preventDefault();
    $('#jumbotron').removeClass('');
    $('#jumbotron').addClass('hide');
    $('#homeDetails').removeClass('');
    $('#homeDetails').addClass('hide');
  });

});

/*
    document.getElementById('jumbotron').className="hide";
    document.getElementById('homeDetails').className="hide";
    document.getElementById('page-header').innerHTML="<h1>Rectangle</h1>";
    document.getElementById('statistics').className="show";
    document.getElementById('getRectangleArea').className="show";    
    document.getElementById('getSquareArea').className="hide";
    document.getElementById('getCircleArea').className="hide";
    document.getElementById('getEllipseArea').className="hide";
    */
    
