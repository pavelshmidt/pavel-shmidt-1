var valid = function () {
  //Инициализация
  var init = function () {
    _setUpListners();
  };
  //Прослушка события
  var _setUpListners = function () {
    $('form').on('keydown', '.form-style_error', _removeError);
    $('form').on('reset',  _clearForm);
  }
  var _removeError = function () {
    $(this).removeClass('form-style_error');
  };
  var  _clearForm = function (form) {
    var form = $(this);
    form.find('input, textarea').trigger('hideTooltip');
    form.find('.form-style_error').removeClass('form-style_error');
  };
  var _createQtip = function (elements,position) {
    // позиция тултипа
    if (position === 'right') {
      position = {
        my: 'left center',
        at: 'right center'
      };
    }else{
      position = {
        my: 'right center',
        at: 'left center'
      };
    }
    // Инициализация тул-типа
    elements.qtip({
      content: {
        text: function() {
          return $(this).attr('qtip-content');
        }
      },
      show: {
        event: 'show',
        delay: 0
      },
      hide: {
        event: 'keydown hideTooltip',
        delay: 0
      },
      position : position,
      style: {
        classes: 'qtip-red'
      }
    }).trigger('show');
  };
  //Валидация формы
  var validateForm = function (form) {
    console.log('В модуле валидации');
    var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
        valid = true;
      $.each(elements, function (index, val) {
        var element = $(val),
            val = element.val(),
            pos = element.attr('qtip-position');

        if (val.length === 0) {
          _createQtip(element, pos);
          element.addClass('form-style_error');
          valid = false;
        }
      });
    return valid;
  }
  //Возвращаемый модуль
  return {
    init:init,
    validateForm:validateForm
  }
}();
valid.init();
