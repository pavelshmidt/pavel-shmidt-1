// Эффект ри наведении на портфолио
jQuery(document).ready(function($) {
  $(".portfolio__item__picture").hover(function() {
    $(this).children('.portfolio__item__picture-hover').show();
  }, function() {
     $(this).children('.portfolio__item__picture-hover').hide();
  });
  $('.add-progect__file').change(function(event) {
    $('.add-progect__file__placeholder').text($('.add-progect__file').val())
  });
});
// // popup
// // ХОРОШИЙ МОДУЛЬ
// var prodjAdd = (function () {
//
// 	// инициализация модуля
// 	var initialize = function(){
// 		_setUpListners();
// 	};
//
// 	// прослушка событий
// 	var _setUpListners = function (){
// 		$('.portfolio__item__add-project').on('click', _showModal);
// 		$('.add-progect__close').on('click', _closeModal);
// 	};
//
// 	var _closeModal = function () {
// 		myPopup.close();
// 	};
//
// 	// показ окна
// 	var _showModal = function () {
// 		myPopup = $('.add-progect__all-wrap').bPopup({
// 			speed: 650,
// 			transition: 'slideIn',
// 			onClose: function () {
// 				this.find('.add-progect').trigger("reset");
// 			}
// 		});
// 	};
//
// 	return {
// 		init: initialize
// 	};
//
// }());
//
// // Инициализация
// prodjAdd.init();
// //end-popup


$("#name").click(function(event) {
  $( "#name" ).tooltip({
    tooltipClass: "input",
    position: { my: "right center", at: "left center" },
    create: function( event, ui ) {}
  });
});
