var hover = function () {
  //Инициализация
  var init = function () {
    _setUpListners();
  };
  //Прослушка события
  var _setUpListners = function () {
    $(".portfolio__item__picture").hover(_hovershow,_hoverhide);
  }
  var _hovershow = function () {
    $(this).children('.portfolio__item__picture-hover').show();
  }
  var _hoverhide = function () {
    $(this).children('.portfolio__item__picture-hover').hide();
  }
  //Возвращаемый модуль
  return {
    init:init
  }
}();
hover.init();
