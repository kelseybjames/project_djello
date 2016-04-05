djello.controller('CardCtrl', ['$scope', '$state', 'Restangular', '$uibModal', function($scope, $state, Restangular, $uibModal) {

  $scope.board = $scope.boards[0];

  $scope.open = function(card) {
    var modal = $uibModal.open({
      animation: true,
      templateUrl: 'templates/modal.html',
      resolve: {
        card: function() {
          return card;
        }
      }
    })
  };

}])
