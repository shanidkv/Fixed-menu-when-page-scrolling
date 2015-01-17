/* --------------------------------------------- 

* Filename:     script.js
* Version:      1.0.0 (2015-01-16)
* Website:      http://www.shanidkv.com
* Description:  System JS
* Author:       Shanid KV

-----------------------------------------------*/

$(function () {
	
	var nav = $('.nav-container');
	var content = $('.content-wrap');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 83) {
			nav.addClass("fixed-nav");
			content.addClass("topmargin");

		} else {
			nav.removeClass("fixed-nav");
			content.removeClass("topmargin");
		}
	});

});