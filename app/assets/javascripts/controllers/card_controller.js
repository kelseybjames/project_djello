djello.controller('CardCtrl', ['$scope', '$state', 'Restangular', function($scope, $state, Restangular) {

  $scope.deleteCard = function() {
    console.log($scope.card);
    Restangular.one('cards', $scope.card.id).remove().then(function() {
      $state.go('djello.boards');
    });
  };
}])
