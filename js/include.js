
function clearLocalStorage() {
    window.localStorage.clear();
    location.reload();
}

/*
 * Clear Statistics container before populate
 */

function clearContainers() {
    var container_times = document.getElementById("times").innerHTML="";
    var container_medium = document.getElementById("medium").innerHTML="";
    var container_latest = document.getElementById("latest").innerHTML="";    
}


/*
 *  display default values for statistics container when no localstorage is available
 */

function noStatistics() {
    document.getElementById("times").innerHTML="No previous record";
    document.getElementById("medium").innerHTML="No previous record";
    document.getElementById("latest").innerHTML="No previous record";
}


/*
 *  display Statistics for each of the shape 
 */

function showStatistics(shape) {

    var container_times = document.getElementById("times");
    var container_medium = document.getElementById("medium");
    var container_latest = document.getElementById("latest");
    switch(shape)
    {
    case "Rectangle":
      container_latest.innerHTML=getLocalElementLatestVal(shape);
      container_times.innerHTML=getNoOfTimeAreaCalculated(shape)+" time(s)";
      container_medium.innerHTML=getMediumItemArea(shape);
      break;
    case "Circle":
      container_latest.innerHTML=getLocalElementLatestVal(shape);
      container_times.innerHTML=getNoOfTimeAreaCalculated(shape)+" time(s)";
      container_medium.innerHTML=getMediumItemArea(shape);
      break;
    case "Square":
      container_latest.innerHTML=getLocalElementLatestVal(shape);
      container_times.innerHTML=getNoOfTimeAreaCalculated(shape)+" time(s)";
      container_medium.innerHTML=getMediumItemArea(shape);
      break;
    case "Ellipse":
      container_latest.innerHTML=getLocalElementLatestVal(shape);
      container_times.innerHTML=getNoOfTimeAreaCalculated(shape)+" time(s)";
      container_medium.innerHTML=getMediumItemArea(shape);
      break;
    default:
      alert("Undefined shape");
    }    

}

/*
 *  Calculate are of rectangle
 */

function areaOfRect(){
    // area of a rectangle is = A = width x height;
    var side1 = getDistance().distance;
    var side2 = getDistance().distance;
    var area = side1 * side2;
    setLocalElementVal("Rectangle",area);
    showStatistics("Rectangle");
}


/*
 *  Calculate are of Circle
 */

function areaOfCircle(){
    
    var radius = getDistance().distance;
    var total = radius*radius*3.14159;
    total = total.toFixed(3)-0;
    setLocalElementVal("Circle",total);
    showStatistics("Circle");
}


/*
 *  Calculate are of square
 */

function areaOfSquare(){

    var side = getDistance().distance;
    var area = side*side;
    setLocalElementVal("Square",area);
    showStatistics("Square");
}


/*
 *  Calculate are of Ellipse
 */

function areaOfEllipse(){
    // area of a rectangle is = A = π * (long axis width/2) x (short axis width/2); 
    var axis1 = getDistance().distance;
    var axis2 = getDistance().distance;
    var area = (axis1/2)*(axis2/2) * 3.14159;
    area = area.toFixed(3)-0;
    setLocalElementVal("Ellipse",area);
    showStatistics("Ellipse");
}


/*
 *  Get latest area of a shape from localStorage 
 */

function getLocalElementLatestVal(shape){
    var all_values = getLocalElementVal(shape);
    var out = all_values.split(",").pop();
    return out; 
}


/*
 *  Get total number of times area has been calculated  
 */

function getNoOfTimeAreaCalculated(shape){
    var all_values = getLocalElementVal(shape);
    var times = all_values.split(",").length;
    return times;
}


/*
 *  Get median area of a shape :: Note sort list of all areas and get the middle one 
 */

function getMediumItemArea(shape){
    var all_values = getLocalElementVal(shape);
    var times = all_values.split(",");

    times.sort(function(a,b){return a-b});

    if((times.length % 2) === 0) {
        var middle = Math.ceil(times.length/2);
    }
    else {
        var middle = Math.floor(times.length/2);    
    }
    return times[middle];
}


/*
 * Set local storage item
 */

function setLocalElementVal(shape,area) {
    if (typeof(Storage) != "undefined") {
            // if area of a shape already exist append to the list like(4,10,8)
          if (window.localStorage.getItem(shape)) {
            window.localStorage.setItem(shape, getLocalElementVal(shape) +","+ area);
          }
          else {
            window.localStorage.setItem(shape,area);
          }
    }    
}

/*
 * Get local storage item
 */

function getLocalElementVal(shape) {
    if (typeof(Storage) != "undefined") {
        return window.localStorage.getItem(shape);
    }    
}


/*
 * Load defaults
 */

window.onload = function() {
    showDefault();
}


/*
 * Load defaults
 */

function showDefault() { 
    document.getElementById('jumbotron').className = "show";
    document.getElementById('homeDetails').className = "show";
    document.getElementById('clearStorage').className = "hide";
    document.getElementById('page-header').className = "hide";
    document.getElementById('statistics').className = "hide";
    document.getElementById('getRectangleArea').className = "hide";
    document.getElementById('getSquareArea').className = "hide";
    document.getElementById('getCircleArea').className = "hide";
    document.getElementById('getEllipseArea').className = "hide";
}

/*
 * Load defaults
 */

function showRect() { 
    clearContainers();
    document.getElementById('jumbotron').className = "hide";
    document.getElementById('homeDetails').className = "hide";
    document.getElementById('clearStorage').className = "show";
    document.getElementById('page-header').className = "show";
    document.getElementById('statistics').className = "show";
    document.getElementById('getRectangleArea').className = "show";
    document.getElementById('getSquareArea').className = "hide";
    document.getElementById('getCircleArea').className = "hide";
    document.getElementById('getEllipseArea').className = "hide";
    document.getElementById('page-header').innerHTML="<h1>Rectangle</h1>";

    if (window.localStorage.getItem("Rectangle")) {
        showStatistics("Rectangle");
    }
    else {
        noStatistics();
    }
}

function showSquare() {
    clearContainers();
    document.getElementById('jumbotron').className = "hide";
    document.getElementById('homeDetails').className = "hide";
    document.getElementById('clearStorage').className = "show";
    document.getElementById('page-header').className = "show";
    document.getElementById('statistics').className = "show";
    document.getElementById('getRectangleArea').className = "hide";
    document.getElementById('getSquareArea').className = "show";
    document.getElementById('getCircleArea').className = "hide";
    document.getElementById('getEllipseArea').className = "hide";
    document.getElementById('page-header').innerHTML="<h1>Square</h1>";

    if (window.localStorage.getItem("Square")) {
        showStatistics("Square");
    }
    else {
        noStatistics();
    }
}

function showCircle() {

    clearContainers();
    document.getElementById('jumbotron').className = "hide";
    document.getElementById('homeDetails').className = "hide";
    document.getElementById('clearStorage').className = "show";
    document.getElementById('page-header').className = "show";
    document.getElementById('statistics').className = "show";
    document.getElementById('getRectangleArea').className = "hide";
    document.getElementById('getSquareArea').className = "hide";
    document.getElementById('getCircleArea').className = "show";
    document.getElementById('getEllipseArea').className = "hide";
    document.getElementById('page-header').innerHTML="<h1>Circle</h1>"; 

    if (window.localStorage.getItem("Circle")) {
        showStatistics("Circle");
    }
    else {
        noStatistics();
    }
}

function showEllipse() {
    
    clearContainers();
    document.getElementById('jumbotron').className = "hide";
    document.getElementById('homeDetails').className = "hide";
    document.getElementById('clearStorage').className = "show";
    document.getElementById('page-header').className = "show";
    document.getElementById('statistics').className = "show";
    document.getElementById('getRectangleArea').className = "hide";
    document.getElementById('getSquareArea').className = "hide";
    document.getElementById('getCircleArea').className = "hide";
    document.getElementById('getEllipseArea').className = "show";
    document.getElementById('page-header').innerHTML="<h1>Ellipse</h1>";

    if (window.localStorage.getItem("Ellipse")) {
        showStatistics("Ellipse");
    }
    else {
        noStatistics();
    }
}

/**
 * Returns an object on the format {distance: value} 
 * 
 * If a callback function is supplied, the return value will instead be sent to 
 * that function.
 */

var getDistance = function (callback) {
    var distance = {distance: Math.floor((Math.random()*4)+1)}, 
        delay = Math.floor((Math.random()*1800)+200),
        sleep = function (delay) {
            for (var i = 0; i < delay*0.1; i++) {
                    console.log("");
                }
        };
        if (typeof callback !== 'undefined') {
            setTimeout(function () {
                callback(distance);
            }, delay);
            return false;
        }

    sleep(delay)
    return distance
};

