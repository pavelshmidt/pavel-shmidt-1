var contactme = function () {
  //Инициализация
  var init = function () {
    _setUpListners();
  };
  //Прослушка события
  var _setUpListners = function () {
    $('#form-contactme').on('submit', _submitForm);
  }
  var _submitForm = function (event) {
    event.preventDefault();
    var form = $(this),
        url = 'contactme.php',
        defObj = _ajaxForm(form,url);

    //что то будем делать с ответом от сервера
  }
  var _ajaxForm = function (form,url) {
    if (!valid.validateForm(form)) return false;
    //если валидация не пройдёт то код ниже не будет выполнен
  }
  //Возвращаемый модуль
  return {
    init:init
  }
}();
contactme.init();
