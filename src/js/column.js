function ColumnDirective() {
  return {
    restrict: 'E',
    require: '^slGrid',
    replace: true,
    transclude: true,
    template: '<td></td>',
    link: ($scope, $element, $attrs, $ctrl, $transclude) => {
      $scope.$$item = $scope.$parent.$$item;

      $transclude($scope, function(clone) {
        $element.empty();
        $element.append(clone);
      });
    }
  };
}
