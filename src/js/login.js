var Modlogin = function () {
  //Инициализация
  var init = function () {
    _setUpListners();
  };
  //Прослушка события
  var _setUpListners = function () {
    console.log("123");
    $('#Form-authorization').on('submit', _validForm)
  }
  var _validForm = function () {
    valid.validateForm($(this));
  }
  //Возвращаемый модуль
  return {
    init:init
  }
}();
Modlogin.init();
