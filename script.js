// JavaScript Document

jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 10;
    mouseY = e.pageY - 10; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/1);
    yp += ((mouseY - yp)/1);
    $(".circle").css({left: xp +'px', top: yp +'px'});
  }, 0);

});


// MUDAR CURSOR ON HOVER
$('.column, .column-overlay, nav, #close, #close2').hover(function() {
    $(this).css('cursor','pointer');
	$(".circle").toggleClass("circle-hover");
});

$("span").hover(function() {
	$(this).css('cursor','default');
	$(".magic").toggleClass("me");
	
	$(document).ready(function() {
  var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function(e) {
    $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
  });
});

	
});





// ESTRELAS
var OFFSET_X = 50,
  OFFSET_Y = 50,
  ANCHOR_RADIUS = 50,

  element1 = document.getElementById('draggable1'),
  element2 = document.getElementById('draggable2'),
  element3 = document.getElementById('draggable3'),
  element4 = document.getElementById('draggable4'),
	
	line = new LeaderLine(element1, element2,{
	color: '#000',
	size: 4,
	path: 'straight',
	startPlug: 'disc',
	endPlug: 'disc',
	startPlugSize: 0.4,
	endPlugSize: 0.4,}),
  draggable1, draggable2,
	
	line2 = new LeaderLine(element2, element3,{
	color: '#000',
	size: 4,
	path: 'straight',
	startPlug: 'disc',
	endPlug: 'disc',
	startPlugSize: 0.4,
	endPlugSize: 0.4,}),
  draggable2, draggable3,
	
	line3 = new LeaderLine(element3, element4,{
	color: '#000',
	size: 4,
	path: 'straight',
	startPlug: 'disc',
	endPlug: 'disc',
	startPlugSize: 0.4,
	endPlugSize: 0.4,}),
  draggable3, draggable4;
	
  

function update() {
  function offsetPoint(point, angle, len, basePoint) {
    return {
      x: point.x + Math.cos(angle) * len - basePoint.x,
      y: point.y + Math.sin(angle) * len * -1 - basePoint.y
    };
  }

  var xy1 = {x: draggable1.left, y: draggable1.top},
    xy2 = {x: draggable2.left, y: draggable2.top},
	xy3 = {x: draggable3.left, y: draggable3.top}, 
	xy4 = {x: draggable4.left, y: draggable4.top},
    point1 = {x: xy1.x + OFFSET_X, y: xy1.y + OFFSET_Y},
    point2 = {x: xy2.x + OFFSET_X, y: xy2.y + OFFSET_Y},
	point3 = {x: xy3.x + OFFSET_X, y: xy3.y + OFFSET_Y},
	point4 = {x: xy4.x + OFFSET_X, y: xy4.y + OFFSET_Y},
    angle12 = Math.atan2(point1.y - point2.y, point2.x - point1.x),
	angle23 = Math.atan2(point2.y - point3.y, point3.x - point2.x),  
	angle34 = Math.atan2(point3.y - point4.y, point4.x - point3.x),
	  
    offsetPoint1 = offsetPoint(point1, angle12, ANCHOR_RADIUS, xy1),
    offsetPoint2 = offsetPoint(point2, angle12 + Math.PI, ANCHOR_RADIUS, xy2),
	offsetPoint23 = offsetPoint(point2, angle23, ANCHOR_RADIUS, xy2),
	offsetPoint3 = offsetPoint(point3, angle23 + Math.PI, ANCHOR_RADIUS, xy3),
	offsetPoint34 = offsetPoint(point3, angle34, ANCHOR_RADIUS, xy3),
	offsetPoint4 = offsetPoint(point4, angle34 + Math.PI, ANCHOR_RADIUS, xy4);

  line.setOptions({
    start: LeaderLine.pointAnchor(element1, offsetPoint1),
    end: LeaderLine.pointAnchor(element2, offsetPoint2)
  });
	
	line2.setOptions({
    start: LeaderLine.pointAnchor(element2, offsetPoint23),
    end: LeaderLine.pointAnchor(element3, offsetPoint3)
  });
	
	line3.setOptions({
    start: LeaderLine.pointAnchor(element3, offsetPoint34),
    end: LeaderLine.pointAnchor(element4, offsetPoint4)
  });
	
}



draggable1 = new PlainDraggable(element1, {onMove: update});
draggable2 = new PlainDraggable(element2, {onMove: update});
draggable3 = new PlainDraggable(element3, {onMove: update});
draggable4 = new PlainDraggable(element4, {onMove: update});
update();





// CHANGE STAR COLOR
$(".star").mouseover(function () {
	let pic = $(this).attr("src").slice(0,-4);
    $(this).attr("src", pic + "-c.png");
}).mouseout(function () {
	let pic = $(this).attr("src").slice(0,-6);
    $(this).attr("src", pic + ".png");
});









// 	PICTURE BREAK
function bindButton() {
$('.picture').one('click', function() {
	var overlay = $("#overlay-picture");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
		
});
}
bindButton();







// 2024
function bindButton2() {
$('.2024').one('click', function() {
	var overlay = $("#overlay-2024");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
		
});
}
bindButton2();






// MOB
function bindButton6() {
$('.mob').one('click', function() {
	var overlay = $("#overlay-mob");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
		
});
}

bindButton6();







// MA VONTADE
function bindButton4() {
$('.vontade').one('click', function() {
	var overlay = $("#overlay-vontade");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
		
});
}
bindButton4();








// ARC
function bindButton3() {
$('.arc').one('click', function() {
    var overlay = $("#overlay-arc");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
});
}
bindButton3();








// 2023
function bindButton5() {
$('.2023').one('click', function() {
	var overlay = $("#overlay-2023");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
});
}
bindButton5();






// KASA
function bindButton7() {
$('.kasa').one('click', function() {
	var overlay = $("#overlay-kasa");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
});
}
bindButton7();






// SUPER
function bindButton8() {
$('.super').one('click', function() {
	var overlay = $("#overlay-super");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
});
}
bindButton8();








// 2022
function bindButton9() {
$('.2022').one('click', function() {
	var overlay = $("#overlay-2022");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
});
}
bindButton9();







// DANCE
function bindButton10() {
$('.dance').one('click', function() {
	var overlay = $("#overlay-dance");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
});
}
bindButton10();







// AGE
function bindButton11() {
$('.age').one('click', function() {
	var overlay = $("#overlay-age");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
});
}
bindButton11();






// LGBT
function bindButton12() {
$('.lgbt').one('click', function() {
	var overlay = $("#overlay-lgbt");
	
	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
});
}
bindButton12();






