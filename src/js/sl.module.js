angular.module('sl-grid', [])
.filter('forLoop', function() {
  return function(input, start, end) {
    input = new Array(end - start);
    for (var i = 0; start < end; start++, i++) {
      input[i] = start;
    }

    return input;
  };
})
.directive('slColumn', ColumnDirective)
.directive('slGrid', GridDirective)
.filter('slPaginate', Paginate)
.service('slPaginator', PaginatorService)
.directive('slPaginator', PaginatorDirective);
