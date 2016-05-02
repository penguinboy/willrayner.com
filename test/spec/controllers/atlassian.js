'use strict';

describe('Controller: AtlassianCtrl', function () {

  // load the controller's module
  beforeEach(module('willraynercomApp'));

  var AtlassianCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AtlassianCtrl = $controller('AtlassianCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
