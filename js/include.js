/**
 * Returns an object on the format {distance: value} 
 * 
 * If a callback function is supplied, the return value will instead be sent to 
 * that function.
 */


function clearLocalStorage() {
    window.localStorage.clear();
    location.reload();
}

function clearContainers() {
    var container_times = document.getElementById("times").innerHTML="";
    var container_medium = document.getElementById("medium").innerHTML="";
    var container_latest = document.getElementById("latest").innerHTML="";    
}

function noStatistics() {
    document.getElementById("times").innerHTML="No previous record";
    document.getElementById("medium").innerHTML="No previous record";
    document.getElementById("latest").innerHTML="No previous record";
}

function showStatistics(shape) {

    var container_times = document.getElementById("times");
    var container_medium = document.getElementById("medium");
    var container_latest = document.getElementById("latest");
    switch(shape)
    {
    case "Rectangle":
      container_latest.innerHTML=get_local_element_latest_val(shape);
      container_times.innerHTML=get_no_of_time_area_calculated(shape)+" time(s)";
      container_medium.innerHTML=get_medium_item_area(shape);
      break;
    case "Circle":
      container_latest.innerHTML=get_local_element_latest_val(shape);
      container_times.innerHTML=get_no_of_time_area_calculated(shape)+" time(s)";
      container_medium.innerHTML=get_medium_item_area(shape);
      break;
    case "Square":
      container_latest.innerHTML=get_local_element_latest_val(shape);
      container_times.innerHTML=get_no_of_time_area_calculated(shape)+" time(s)";
      container_medium.innerHTML=get_medium_item_area(shape);
      break;
    case "Ellipse":
      container_latest.innerHTML=get_local_element_latest_val(shape);
      container_times.innerHTML=get_no_of_time_area_calculated(shape)+" time(s)";
      container_medium.innerHTML=get_medium_item_area(shape);
      break;
    default:
      alert("Undefined shape");
    }    

}

function areaOfRect(){
    // area of a rectangle is = A = width x height;
    var side1 = create_Obj();
    var side2 = create_Obj();
    var area = side1 * side2;
    set_local_element_val("Rectangle",area);
    showStatistics("Rectangle");
}

function areaOfCircle(){
    
    var radius = create_Obj();
    var total = radius*radius*3.14159;
    total = total.toFixed(3)-0;
    set_local_element_val("Circle",total);
    showStatistics("Circle");
}

function areaOfSquare(){

    var side = create_Obj();
    var area = side*side;
    set_local_element_val("Square",area);
    showStatistics("Square");
}

function areaOfEllipse(){
    // area of a rectangle is = A = π * (long axis width/2) x (short axis width/2); 
    var axis1 = create_Obj();
    var axis2 = create_Obj();
    var area = (axis1/2)*(axis2/2) * 3.14159;
    area = area.toFixed(3)-0;
    set_local_element_val("Ellipse",area);
    showStatistics("Ellipse");
}

function get_local_element_latest_val(shape){
    var all_values = get_local_element_val(shape);
    var out = all_values.split(",").pop();
    return out; 
}

function get_no_of_time_area_calculated(shape){
    var all_values = get_local_element_val(shape);
    var times = all_values.split(",").length;
    return times;
}

/*
 * 
 */    
function create_Obj(){
    var tempString = JSON.stringify(getDistance());
    var tempObj=JSON.parse(tempString);
    var object_val = tempObj.distance;    
    return object_val;
}

function get_medium_item_area(shape){
    var all_values = get_local_element_val(shape);
    var times = all_values.split(",");

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
function set_local_element_val(shape,area) {
    if (typeof(Storage) != "undefined") {
            // if area of a shape already axist add to the list like(4,10,8)
          if (window.localStorage.getItem(shape)) {
            window.localStorage.setItem(shape, get_local_element_val(shape) +","+ area);
          }
          else {
            window.localStorage.setItem(shape,area);
          }
    }    
}

/*
 * Get local storage item
 */
function get_local_element_val(shape) {
    if (typeof(Storage) != "undefined") {
        return window.localStorage.getItem(shape);
    }    
}


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
    if (window.localStorage.getItem("Rectangle")) {
        showStatistics("Rectangle");
    }
    else {
        noStatistics();
    }    
}

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
/*    document.getElementById('jumbotron').className="hide";
    document.getElementById('homeDetails').className="hide";

    document.getElementById('statistics').className="show";
    document.getElementById('getRectangleArea').className="show";    
    document.getElementById('getSquareArea').className="hide";
    document.getElementById('getCircleArea').className="hide";
    document.getElementById('getEllipseArea').className="hide";
*/
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
/*    document.getElementById('jumbotron').className="hide";
    document.getElementById('homeDetails').className="hide";    

    document.getElementById('statistics').className="show";
    document.getElementById('getSquareArea').className="show";
    document.getElementById('getRectangleArea').className="hide";
    document.getElementById('getCircleArea').className="hide";
    document.getElementById('getEllipseArea').className="hide"; */
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
/*    document.getElementById('jumbotron').className="hide";
    document.getElementById('homeDetails').className="hide";    
    document.getElementById('statistics').className="show";
    document.getElementById('getCircleArea').className="show";
    document.getElementById('getRectangleArea').className="hide";
    document.getElementById('getSquareArea').className="hide";
    document.getElementById('getEllipseArea').className="hide"; */
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

/*    document.getElementById('jumbotron').className="hide";
    document.getElementById('homeDetails').className="hide";    
    document.getElementById('statistics').className="show";
    document.getElementById('getEllipseArea').className="show";
    document.getElementById('getRectangleArea').className="hide";
    document.getElementById('getSquareArea').className="hide";
    document.getElementById('getCircleArea').className="hide"; */
    if (window.localStorage.getItem("Ellipse")) {
        showStatistics("Ellipse");
    }
    else {
        noStatistics();
    }
}


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

