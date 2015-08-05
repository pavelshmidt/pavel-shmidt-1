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
    $('.add-progect__file').change(_fileForm);
    $('#FormGoodValid').on('click', _closeModalFormGood);
  }
  var _fileForm = function () {
    $('.add-progect__filetext').val($(this).val()).trigger('keydown');
  }
  //Работа с модальным окном
  var _showModal = function (event) {
    event.preventDefault();
    AddProgectPopup = $('#add-progect-popup').bPopup({
      speed: 50,
      // transition: 'slideIn',
      onClose: function () {
        var form = this.find('.add-progect');
        form.trigger("reset");
        form.find('.add-progect__add-window').hide();
        form.find('.add-progect__error').hide();
      }
    });
  }
  //Модальное окно с успешным завершением проекта
  var _showModalFormGood = function () {
    ModalFormGood = $('#FormGoodValid').bPopup({
      speed: 50,
      // transition: 'slideIn',
      onClose: function () {
      }
    });
  }
  // Закрытие модального окна
  var _closeModal = function () {
    AddProgectPopup.close();
  }
  //Закрытие модального окна с успешным добавлением проекта
  var _closeModalFormGood = function () {
    ModalFormGood.close();
  }
  // Добавление проекта
  var _addProject = function (event) {
    event.preventDefault();
    //Обьявляем переменные
    var form = $(this),
        url = "js/add_progect.php",
        myServer = _ajaxForm(form,url);

        //Запрос на сервет только при положительной валидации
        if (myServer) {
          myServer.done(function(ans) {
            if (ans.status === 'ok') {
              AddProgectPopup.close();
              _showModalFormGood();
              // form.find('.add-progect__add-window').show();
              // form.find('.add-progect__error').hide();
            }
            else {
              // form.find('.add-progect__error').show();
              // form.find('.add-progect__add-window').hide();
            }
          })
        }
        else {
          // form.find('.add-progect__error').show();
          // form.find('.add-progect__add-window').hide();
        }
  }
  // Универсальная функция
  // 1.собирает данные из формы
  // 2.проверяет форму
  // 3.делает запрос на сервер и возвращает запрос с сервера
  var _ajaxForm = function (form,url) {
    if (!valid.validateForm(form)) return false;
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
