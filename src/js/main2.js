var myModyle = function () {
  var init = function () {
    _setUpListners();
  };

  var _setUpListners = function () {
    $(".portfolio__item__add-project").on('click', _showModal);
    $(".add-progect__close").on('click', _closeModal);
    $(".add-progect").on('submit', _addProject);
  }

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

  var _closeModal = function () {
    AddProgectPopup.close();
  }

  var _addProject = function (event) {
    event.preventDefault();
    //Обьявляем переменные
    var form = $(this),
        url = "js/add_progect.php",
        data = form.serialize();
    console.log(data);
    //Запрос на сервер
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: data
    })
    .done(function(ans) {
      console.log(ans);
      console.log("success");
      if (ans.status === 'ok') {
        form.find('.add-progect__add-window').show();
        form.find('.add-progect__error').hide();
      }
      else {
        form.find('.add-progect__error').show();
        form.find('.add-progect__add-window').hide();
      }
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  }

  var _ajaxForm = function () {

    // if (!valid) {
    //   return false;
    // }
    
  }
  return {
    init:init
  }
}();
myModyle.init();
