var placaholderMod = function () {
          //�������������
          var init = function () {
            _setUpListners();
          };
          //��������� �������
          var _setUpListners = function () {
              $('input, textarea').placeholder();
          }
          //������������ ������
          return {
            init:init
          }
        }();
placaholderMod.init();