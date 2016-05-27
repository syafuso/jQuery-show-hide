	$(document).ready(function(){
	    $("#hide-me button").click(function(){
	        $("h1").hide(1000);
	    });
	    $("#show-me button").click(function(){
	        $("h1").show(1000);
	    });
	});