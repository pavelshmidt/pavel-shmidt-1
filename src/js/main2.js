var myModyle = function () {
  // Инициализация
  var init = function () {
    _setUpListners();
  };
  // Прослушка событий
  var _setUpListners = function () {
    $(".portfolio__item__add-project").on('click', _showModal);
    $(".add-progect__close").on('click', _closeModal);
    $(".add-progect").on('submit', _addProject);
  }
  //Работа с модальным окном
  var _showModal = function (event) {
    event.preventDefault();
    AddProgectPopup = $('#add-progect-popup').bPopup({
      speed: 500,
      transition: 'slideIn',
      onClose: function () {
        var form = this.find('.add-progect');
        form.trigger("reset");
        form.find('.add-progect__add-window').hide();
        form.find('.add-progect__error').hide();
      }
    });
  }
  // Закрытие модального окна
  var _closeModal = function () {
    AddProgectPopup.close();
  }
  // Добавление проекта
  var _addProject = function (event) {
    event.preventDefault();
    //Обьявляем переменные
    var form = $(this),
        url = "js/add_progect.php",
        myServer = _ajaxForm(form,url);

    myServer.done(function(ans) {
      if (ans.status === 'ok') {
        form.find('.add-progect__add-window').show();
        form.find('.add-progect__error').hide();
      }
      else {
        form.find('.add-progect__error').show();
        form.find('.add-progect__add-window').hide();
      }
    })
  }
  // Универсальная функция
  // 1.собирает данные из формы
  // 2.проверяет форму
  // 3.делает запрос на сервер и возвращает запрос с сервера
  var _ajaxForm = function (form,url) {
    // if (!valid) {
    //   return false;
    // }

    data = form.serialize();

    var result = $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: data
    }).fail (function (ans) {
      console.log('ERRROR!!!!');
    })
    return result;
  }
  return {
    init:init
  }
}();
myModyle.init();
