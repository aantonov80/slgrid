function ColumnDirective() {
  return {
    restrict: 'E',
    require: '^slGrid',
    replace: true,
    transclude: true,
    template: '<td></td>',
    link: function($scope, $element, $attrs, $ctrl, $transclude) {
      $scope.$$item = $scope.$parent.$$item;
      var field = $attrs.field || undefined;

      if (angular.isDefined($attrs.title)) {
        $ctrl.addColumn($attrs.title, field);
      }

      $transclude($scope, function(clone) {
        $element.empty();
        $element.append(clone);
      });
    }
  };
}
