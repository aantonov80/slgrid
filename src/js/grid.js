function GridDirective($compile, $templateCache, $filter) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      items: '=',
      itemsPerPage: '@'
    },
    template: function($element, $attrs) {
      return $templateCache.get('slGrid.html');
    },
    controllerAs: 'vm',
    controller: function($scope, $element, $attrs) {
      var vm = this;
      vm.$$columns = [];
      vm.$$columnNames = [];
      vm.$$sortOrder = 'asc';
      vm.$$sortBy = null;

      vm.addColumn = function(columnName, fieldName) {
        if (vm.$$columnNames.indexOf(columnName) >= 0) {
          return;
        }

        vm.$$columnNames.push(columnName);
        vm.$$columns.push({
          title: columnName,
          field: fieldName || ''
        });
      };

      vm.$$sort = function(fieldName) {
        vm.$$sortBy = fieldName;
        vm.$$sortOrder = vm.$$sortOrder === 'asc' ? 'desc' : 'asc';

        var direction = vm.$$sortOrder === 'asc' ? true : false;
        $scope.items = $filter('orderBy')($scope.items, vm.$$sortBy, direction);
      };
    },
    compile: function($element, $attrs) {
      // do nothing

      return {
        pre: function($scope, $element, $attrs, $ctrl, $transclude) {
          $element.addClass($attrs.tableClass);
        },
        post: function($scope) {
          // do nothing
        }
      };
    }
  };
}
