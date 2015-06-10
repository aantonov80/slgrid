(function() {
  'use strict';

  var app = angular.module('app', ['sl-grid']);

  app.controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$window'];
  function SimpleController($window) {
    var vm = this;

    vm.data = $window.data;
  }
})();
