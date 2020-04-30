// qd-include ../qd-quatro-lib-plugins/String Extender/StringExtender.min.js
// qd-include ../qd-quatro-lib-plugins/Array Extender/ArrayExtender.min.js

/**Funções base */
try {
	/* COMMON */
	// qd-include ./web/JS/components/JS.blc.bla.functions.common.js
	
	/* HOME */
	// qd-include ./web/JS/components/JS.blc.bla.functions.home.js	
	
	/* SEARCH */
	// qd-include ./web/JS/components/JS.blc.bla.functions.search.js
	
	/* PRODUCT */
	// qd-include ./web/JS/components/JS.blc.bla.functions.product.js
	
	/* LIST */
	// qd-include ./web/JS/components/JS.blc.bla.functions.list.js
	
	/* INSTITUCIONAL */
	// qd-include ./web/JS/components/JS.blc.bla.functions.institucional.js
	
	/* ORDERS */
	// qd-include ./web/JS/components/JS.blc.bla.functions.orders.js
}
catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Houve um erro nos objetos. Detalhes: " + e.message)); }

try {
	(function() {
		var body, ajaxStop, windowLoad;

		windowLoad = function() {
			Common.windowOnload();
			if (body.is(".home")) Home.windowOnload();
			else if (body.is(".resultado-busca, .departamento, .categoria, .brand")) Search.windowOnload();
			else if (body.is(".produto")) Product.windowOnload();
			else if (body.is(".listas, .giftlist")) List.windowOnload();
			else if (body.is(".institucional")) Institutional.windowOnload();
			else if (body.is(".orders")) Orders.windowOnload();
		};

		ajaxStop = function() {
			Common.ajaxStop();
			if (body.is(".home")) Home.ajaxStop();
			else if (body.is(".resultado-busca, .departamento, .categoria, .brand")) Search.ajaxStop();
			else if (body.is(".produto")) Product.ajaxStop();
			else if (body.is(".listas, .giftlist")) List.ajaxStop();
			else if (body.is(".institucional")) Institutional.ajaxStop();
			else if (body.is(".orders")) Orders.ajaxStop();
		};

		$(function() {
			body = $(document.body);
			Common.init();
			if (body.is(".home")) Home.init();
			else if (body.is(".resultado-busca, .departamento, .categoria, .brand")){
				Search.isSearch = $(document.body).is('.resultado-busca');
				Search.isDepartament = $(document.body).is('.departamento');
				Search.isCategory = $(document.body).is('.categoria');
				Search.init();
			}
			else if (body.is(".produto") || body.is(".product-kit")) Product.init();
			else if (body.is(".listas, .giftlist")) List.init();
			else if (body.is(".institucional")) Institutional.init();
			else if (body.is(".orders")) Orders.init();
			$(document).ajaxStop(ajaxStop);
			$(window).load(windowLoad);
			body.addClass('jsFullLoaded');
			Common.ready();
		});

		Common.run();
		if (location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() == "/p")
			Product.run();
		else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
			List.run();
	})();
}
catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && $("body").addClass('jsFullLoaded jsFullLoadedError') && console.error("Houve um erro ao iniciar os objetos. Detalhes: " + e.message)); }

/* Automatizador de comments box do Facebook // 1.6 // Carlos Vinicius [Quatro Digital] */
$(window).load(function () { var a = $(".fb-comments"); a.length && a.attr("data-href", document.location.href.split("#").shift().split("?").shift()); $("#fb-root").length || $("body").append('<div id="fb-root"></div>'); if (!$("script#facebook-jssdk").length) { a = $("meta[property='fb:app_id']").attr("content") || !1; var b, c = document.getElementsByTagName("script")[0]; document.getElementById("facebook-jssdk") || (b = document.createElement("script"), b.id = "facebook-jssdk", b.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3" + (a ? "&appId=" + a : ""), c.parentNode.insertBefore(b, c)) } "undefined" !== typeof FB && "undefined" !== typeof FB.XFBML && FB.XFBML.parse() });
/* Quatro Digital - Product Thumbs // 1.2 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs();a.trigger("QuatroDigital.pt_callback",[a])}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return a.length?$.extend({},a,new b(a)):a},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();

// qd-include web/JS/JS.jquery.slick.min.js
// qd-include ../qd-amazing-menu/VTEX/QD_amazingMenu.min.js
// qd-include ../qd-quatro-lib-plugins/Newsletter/QD_news.min.js
// qd-include ../qd-smart-cart/QD_smartCart.min.js
// qd-include ../qd-simple-cart/SimpleCart.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Auto Complete/QD_smartAutoComplete.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Image Load/QD_smartImageLoad.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Photo Carousel/QD_smartPhotoCarousel.min.js
// qd-include ../qd-quatro-lib-plugins/Smart SKU Grid/QD_smartSkuGrid.min.js
// qd-include ../qd-quatro-lib-plugins/Smart SKU Limiter/QD_smartSkuLimiter.min.js
// qd-include ../qd-quatro-lib-plugins/Scroll Toggle/QD_scrollToggle.min.js