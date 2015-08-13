var placaholderMod = function () {
          //Инициализация
          var init = function () {
            _setUpListners();
          };
          //Прослушка события
          var _setUpListners = function () {
              $('input, textarea').placeholder();
          }
          //Возвращаемый модуль
          return {
            init:init
          }
        }();
placaholderMod.init();