// JavaScript Document

// ESTRELAS
var OFFSET_X = 50,
  OFFSET_Y = 50,
  ANCHOR_RADIUS = 50,

  element1 = document.getElementById('draggable1'),
  element2 = document.getElementById('draggable2'),
  element3 = document.getElementById('draggable3'),
  element4 = document.getElementById('draggable4'),
  element5 = document.getElementById('draggable5'),
  element6 = document.getElementById('draggable6'),
  element7 = document.getElementById('draggable7'),
  element8 = document.getElementById('draggable8'),
  element9 = document.getElementById('draggable9'),	

		
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
  draggable3, draggable4,

	line4 = new LeaderLine(element6, element7,{
	color: '#000',
	size: 4,
	path: 'straight',
	startPlug: 'disc',
	endPlug: 'disc',
	startPlugSize: 0.4,
	endPlugSize: 0.4,}),
  draggable6, draggable7,
	
	line5 = new LeaderLine(element7, element8,{
	color: '#000',
	size: 4,
	path: 'straight',
	startPlug: 'disc',
	endPlug: 'disc',
	startPlugSize: 0.4,
	endPlugSize: 0.4,}),
  draggable7, draggable8;
	
	
  

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
	xy6 = {x: draggable6.left, y: draggable6.top},
	xy7 = {x: draggable7.left, y: draggable7.top},
	xy8 = {x: draggable8.left, y: draggable8.top},
    point1 = {x: xy1.x + OFFSET_X, y: xy1.y + OFFSET_Y},
    point2 = {x: xy2.x + OFFSET_X, y: xy2.y + OFFSET_Y},
	point3 = {x: xy3.x + OFFSET_X, y: xy3.y + OFFSET_Y},
	point4 = {x: xy4.x + OFFSET_X, y: xy4.y + OFFSET_Y},
	point6 = {x: xy6.x + OFFSET_X, y: xy6.y + OFFSET_Y},
	point7 = {x: xy7.x + OFFSET_X, y: xy7.y + OFFSET_Y},
	point8 = {x: xy8.x + OFFSET_X, y: xy8.y + OFFSET_Y},
    angle12 = Math.atan2(point1.y - point2.y, point2.x - point1.x),
	angle23 = Math.atan2(point2.y - point3.y, point3.x - point2.x),  
	angle34 = Math.atan2(point3.y - point4.y, point4.x - point3.x),
	angle67 = Math.atan2(point6.y - point7.y, point7.x - point6.x),
	angle78 = Math.atan2(point7.y - point8.y, point8.x - point7.x),
	  
    offsetPoint1 = offsetPoint(point1, angle12, ANCHOR_RADIUS, xy1),
    offsetPoint2 = offsetPoint(point2, angle12 + Math.PI, ANCHOR_RADIUS, xy2),
	offsetPoint23 = offsetPoint(point2, angle23, ANCHOR_RADIUS, xy2),
	offsetPoint3 = offsetPoint(point3, angle23 + Math.PI, ANCHOR_RADIUS, xy3),
	offsetPoint34 = offsetPoint(point3, angle34, ANCHOR_RADIUS, xy3),
	offsetPoint4 = offsetPoint(point4, angle34 + Math.PI, ANCHOR_RADIUS, xy4),
	  
	offsetPoint6 = offsetPoint(point6, angle67, ANCHOR_RADIUS, xy6),
	offsetPoint7 = offsetPoint(point7, angle67 + Math.PI, ANCHOR_RADIUS, xy7),
	offsetPoint78 = offsetPoint(point7, angle78, ANCHOR_RADIUS, xy7),
	offsetPoint8 = offsetPoint(point8, angle78 + Math.PI, ANCHOR_RADIUS, xy8);

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
	
	line4.setOptions({
    start: LeaderLine.pointAnchor(element6, offsetPoint6),
    end: LeaderLine.pointAnchor(element7, offsetPoint7)
  });
	
	line5.setOptions({
    start: LeaderLine.pointAnchor(element7, offsetPoint78),
    end: LeaderLine.pointAnchor(element8, offsetPoint8)
  });	
	
}



draggable1 = new PlainDraggable(element1, {onMove: update});
draggable2 = new PlainDraggable(element2, {onMove: update});
draggable3 = new PlainDraggable(element3, {onMove: update});
draggable4 = new PlainDraggable(element4, {onMove: update});
draggable5 = new PlainDraggable(element5, {onMove: update});
draggable6 = new PlainDraggable(element6, {onMove: update});
draggable7 = new PlainDraggable(element7, {onMove: update});
draggable8 = new PlainDraggable(element8, {onMove: update});
draggable9 = new PlainDraggable(element9, {onMove: update});
update();





// CHANGE STAR COLOR
$(".star").mouseover(function () {
	let pic = $(this).attr("src").slice(0,-4);
    $(this).attr("src", pic + "-c.png");
}).mouseout(function () {
	let pic = $(this).attr("src").slice(0,-6);
    $(this).attr("src", pic + ".png");
});








// TOGGLE MENUS

$("#video").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".nav-photography, .nav-editorial, .nav-identity, .nav-web").attr('style', 'display:none');
	$("#photography, #editorial, #identity, #web").removeClass("underline");
	$(".commercial, .efterklang, .2023, .2022, .decade, .night, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .movieposters, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #decade, #night, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #movieposters, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".nav-video").fadeIn(200);
	$(this).toggleClass("underline");

	
});

$("#photography").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".nav-video, .nav-editorial, .nav-identity, .nav-web").attr('style', 'display:none');
	$("#video, #editorial, #identity, #web").removeClass("underline");
	$(".commercial, .efterklang, .2023, .2022, .decade, .night, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .movieposters, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #decade, #night, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #movieposters, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
    $(".nav-photography").fadeIn(200);
	$(this).toggleClass("underline");
});

$("#editorial").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".nav-photography, .nav-video, .nav-identity, .nav-web").attr('style', 'display:none');
	$("#photography, #video, #identity, #web").removeClass("underline");
	$(".commercial, .efterklang, .2023, .2022, .decade, .night, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .movieposters, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #decade, #night, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #movieposters, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativer
    $(".nav-editorial").fadeIn(200);
	$(this).toggleClass("underline");
});

$("#identity").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".nav-photography, .nav-editorial, .nav-video, .nav-web").attr('style', 'display:none');
	$("#photography, #editorial, #video, #web").removeClass("underline");
	$(".commercial, .efterklang, .2023, .2022, .decade, .night, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .movieposters, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #decade, #night, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #movieposters, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativer
    $(".nav-identity").toggle();
	$(this).toggleClass("underline");
});

$("#web").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".nav-photography, .nav-editorial, .nav-identity, .nav-video").attr('style', 'display:none');
	$("#photography, #editorial, #identity, #video").removeClass("underline");
	$(".commercial, .efterklang, .2023, .2022, .decade, .night, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .movieposters, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #decade, #night, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #movieposters, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativer
    $(".nav-web").toggle();
	$(this).toggleClass("underline");
});








// TOGGLE WORK
$("#commercial").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".efterklang, .2023, .2022, .decade, .night, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#efterklang, #2023, #2022, #decade, #night, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".commercial").toggle();
	$(this).toggleClass("medium");
});

$("#efterklang").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .2023, .2022, .decade, .night, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #2023, #2022, #decade, #night, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".efterklang").toggle();
	$(this).toggleClass("medium");
});

$("#2023").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .efterklang, .2022, .decade, .night, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2022, #decade, #night, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".2023").toggle();
	$(this).toggleClass("medium");
});

$("#2022").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .efterklang, .2023, .decade, .night, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #decade, #night, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".2022").toggle();
	$(this).toggleClass("medium");
});

$("#decade").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .efterklang, .2023, .2022, .night, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #night, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".decade").toggle();
	$(this).toggleClass("medium");
});

$("#supercut").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .efterklang, .2023, .2022, .night, .decade, .dance, .lgbt, .mothers, .color, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #night, #decade, #dance, #lgbt, #mothers, #color, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".supercut").toggle();
	$(this).toggleClass("medium");
});

$("#dance").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .efterklang, .2023, .2022, .night, .supercut, .lgbt, .decade, .mothers, .color, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #night, #supercut, #lgbt, #decade, #mothers, #color, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".dance").toggle();
	$(this).toggleClass("medium");
});

$("#lgbt").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .efterklang, .2023, .2022, .night, .supercut, .dance, .decade, .mothers, .color, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #night, #supercut, #dance, #decade, #mothers, #color, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".lgbt").toggle();
	$(this).toggleClass("medium");
});

$("#mothers").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .efterklang, .2023, .2022, .night, .supercut, .decade, .dance, .lgbt, .color, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #night, #supercut, #decade, #dance, #lgbt, #color, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".mothers").toggle();
	$(this).toggleClass("medium");
});

$("#color").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .efterklang, .2023, .2022, .night, .supercut, .dance, .decade, .mothers, .lgbt, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #night, #supercut, #dance, #decade, #mothers, #lgbt, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".color").toggle();
	$(this).toggleClass("medium");
});

$("#diaries").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .efterklang, .2023, .2022, .night, .supercut, .dance, .decade, .mothers, .color, .lgbt, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #night, #supercut, #dance, #decade, #mothers, #color, #lgbt, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".diaries").toggle();
	$(this).toggleClass("medium");
});

$("#factory").click(function() {
	
	// desativar videos
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	// desativar os outros menus
	$(".commercial, .efterklang, .2023, .2022, .night, .supercut, .decade, .dance, .mothers, .color, .diaries, .lgbt, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #night, #supercut, #decade, #dance, #mothers, #color, #diaries, #lgbt, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".factory").toggle();
	$(this).toggleClass("medium");
});

$("#night").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".night").toggle();
	$(this).toggleClass("medium");
});

$("#splash").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching").removeClass("medium");
	
	// ativar
  	$(".splash").toggle();
	$(this).toggleClass("medium");
});

$("#movieposters").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".movieposters").toggle();
	$(this).toggleClass("medium");
});

$("#naranja").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .movieposters, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #movieposters, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".naranja").toggle();
	$(this).toggleClass("medium");
});

$("#guide").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .movieposters, .naranja, .mixtape, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #movieposters, #naranja, #mixtape, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".guide").toggle();
	$(this).toggleClass("medium");
});

$("#mixtape").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .movieposters, .naranja, .guide, .green, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #movieposters, #naranja, #guide, #green, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".mixtape").toggle();
	$(this).toggleClass("medium");
});

$("#green").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .movieposters, .naranja, .guide, .mixtape, .costa, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #movieposters, #naranja, #guide, #mixtape, #costa, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".green").toggle();
	$(this).toggleClass("medium");
});

$("#costa").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .movieposters, .naranja, .guide, .mixtape, .green, .peter, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #movieposters, #naranja, #guide, #mixtape, #green, #peter, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".costa").toggle();
	$(this).toggleClass("medium");
});

$("#peter").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .movieposters, .naranja, .guide, .mixtape, .green, .costa, .batalha, .blob, .watching, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #movieposters, #naranja, #guide, #mixtape, #green, #costa, #batalha, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".peter").toggle();
	$(this).toggleClass("medium");
});

$("#batalha").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .movieposters, .naranja, .guide, .mixtape, .green, .costa, .peter, .blob, .watching, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #movieposters, #naranja, #guide, #mixtape, #green, #costa, #peter, #blob, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".batalha").toggle();
	$(this).toggleClass("medium");
});

$("#blob").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .watching, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #watching, #splash").removeClass("medium");
	
	// ativar
  	$(".blob").toggle();
	$(this).toggleClass("medium");
});

$("#watching").click(function() {
	
	// desativar os outros menus
	$(".2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .splash").attr('style', 'display:none');
	$("#2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #splash").removeClass("medium");
	
	// ativar
  	$(".watching").toggle();
	$(this).toggleClass("medium");
});









   

// CLOSE PROJECT + NAV WHEN YOU CLICK SOMEWHERE ELSE ON THE PAGE



$(document).click(function() {
	
	$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[6].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[7].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[8].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[9].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[10].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[11].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[12].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	$('iframe')[13].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

	
$("video").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
	
	
	$(".nav-video, .nav-photography, .nav-editorial, .nav-identity, .nav-web").attr('style', 'display:none');
	$("#video, #photography, #editorial, #identity, #web").removeClass("underline");
	$(".commercial, .efterklang, .2023, .2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .movieposters, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .splash, .watching").attr('style', 'display:none');
	$("#commercial, #efterklang, #2023, #2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #movieposters, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #splash, #watching").removeClass("medium");
});

$(".circle, footer a, .nav, .commercial, .efterklang, .2023, .2022, .decade, .supercut, .dance, .lgbt, .mothers, .color, .diaries, .factory, .night, .movieposters, .naranja, .guide, .mixtape, .green, .costa, .peter, .batalha, .blob, .splash, .watching, #commercial, #efterklang, #2023, #2022, #decade, #supercut, #dance, #lgbt, #mothers, #color, #diaries, #factory, #night, #movieposters, #naranja, #guide, #mixtape, #green, #costa, #peter, #batalha, #blob, #splash, #watching").click(function(e) {
  e.stopPropagation();
});





// SECRET PHOTO

$("header span").hover(function() {
	$("header img").toggle();	
});





// MOBILE SMOOTH SCROLL

$(".nav-video li, .nav-photography li, .nav-editorial li, .nav-identity li, .nav-web li").click(function() {
	let selected = $(this).attr('id');
    $('html, body').animate({
        scrollTop: $("." + selected).offset().top
    }, 600);
});

$("#draggable0").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
});



