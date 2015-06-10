function PaginatorService() {
  var self = this;

  this.page = 0;
  this.rowsPerPage = 10;
  this.itemCount = 0;

  this.setPage = (page) => {
    if (page > self.pageCount()) {
      return;
    }

    self.page = page;
  };

  this.nextPage = () => {
    if (self.isLastPage()) {
      return;
    }

    self.page++;
  };

  this.previousPage = () => {
    if (self.isFirstPage()) {
      return;
    }

    self.page--;
  };

  this.firstPage = () => {
    self.page = 0;
  };

  this.lastPage = () => {
    self.page = self.pageCount() - 1;
  };

  this.isFirstPage = () => {
    return self.page === 0;
  };

  this.isLastPage = () => {
    return self.page === self.pageCount();
  };

  this.pageCount = () => {
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
    controller: ($scope, slPaginator) => {
      $scope.paginator = slPaginator;
    },
    template: () => {
      return $templateCache.get('slPagination.html');
    }
  };
}
