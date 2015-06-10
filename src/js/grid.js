function GridDirective($compile, $templateCache) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      items: '=',
      itemsPerPage: '@'
    },
    template: ($element, $attrs) => {
      return $templateCache.get('slGrid.html');
    },
    controllerAs: 'slGrid',
    controller: ($scope, $element, $attrs) => {
    },
    link: ($scope, $element, $attrs, $ctrl, $transclude) => {
      $element.addClass($attrs.tableClass);
    }
  };
}
