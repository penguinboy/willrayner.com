'use strict';

describe('Controller: CaseCtrl', function () {

  // load the controller's module
  beforeEach(module('willraynercomApp'));

  var CaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaseCtrl = $controller('CaseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
