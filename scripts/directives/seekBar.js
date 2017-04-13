(function () {
  function seekBar($document) {

    var calculatePercent = function (seekBar, event) {
      var offsetX = event.pageX - seekBar.offset().left;
      var seekBarWidth = seekBar.width();
      var offsetXPercent = offsetX / seekBarWidth;
      offsetXPercent = Math.min(1, (Math.max(0, offsetXPercent)));
      return offsetXPercent;
    };

    var percentString = function (value, max) {
      var percent = value / max * 100;
      return percent + '%';
    }


    return {
      templateUrl: '/templates/directives/seek_bar.html',
      replace: true,
      restrict: 'E',
      scope: {},
      link: function (scope, element, attributes) {
        scope.value = 0;
        scope.max = 100;
        var seekBar = $(element);

        percentString(scope.value, scope.max);

        scope.fillStyle = function () {
          return {
            width: percentString(scope.value, scope.max)
          };
        };

        scope.onClickSeekBar = function (event) {
          var percent = calculatePercent(seekBar, event);
          scope.value = percent * scope.max;
        };

        scope.trackThumb = function () {
          $document.bind('mousemove.thumb', function (event) {
            var percent = calculatePercent(seekBar, event);
            scope.$apply(function () {
              scope.value = percent * scope.max;
            });
          });

          $document.bind('mouseup.thumb', function () {
            $document.unbind('mousemove.thumb');
            $document.unbind('mouseup.thumb');
          });
        };

        scope.thumbStyle = function () {
          return {
            left: percentString(scope.value, scope.max)
          };
        };
      }
    };
  }

  angular
    .module('blocJams')
    .directive('seekBar', ['$document', seekBar]);
})();
