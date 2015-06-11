function PaginatorService() {
  var self = this;

  this.page = 0;
  this.rowsPerPage = 10;
  this.itemCount = 0;

  this.setPage = function(page) {
    if (page > self.pageCount()) {
      return;
    }

    self.page = page;
  };

  this.nextPage = function() {
    if (self.isLastPage()) {
      return;
    }

    self.page++;
  };

  this.previousPage = function() {
    if (self.isFirstPage()) {
      return;
    }

    self.page--;
  };

  this.firstPage = function() {
    self.page = 0;
  };

  this.lastPage = function() {
    self.page = self.pageCount() - 1;
  };

  this.isFirstPage = function() {
    return self.page === 0;
  };

  this.isLastPage = function() {
    return self.page === self.pageCount();
  };

  this.pageCount = function() {
    return Math.ceil(parseInt(self.itemCount) / parseInt(self.rowsPerPage));
  };
}

Paginate.$inject = ['slPaginator'];
function Paginate(Paginator) {
  return function(input, rowsPerPage) {
    if (!input) {
      return input;
    }

    if (rowsPerPage) {
      Paginator.rowsPerPage = rowsPerPage;
    }

    Paginator.itemCount = input.length;
    return input.slice(parseInt(Paginator.page * Paginator.rowsPerPage), parseInt((Paginator.page + 1) * Paginator.rowsPerPage + 1) - 1);
  };
}

PaginatorDirective.$inject = ['$templateCache', 'slPaginator'];
function PaginatorDirective($templateCache, slPaginator) {
  return {
    restrict: 'E',
    replace: true,
    controller: function($scope, slPaginator) {
      $scope.paginator = slPaginator;
    },
    link: function($scope, $element, $attrs) {
      $element.addClass($attrs.containerClass);
    },
    template: function() {
      return $templateCache.get('slPagination.html');
    }
  };
}
