djello.controller('BoardCtrl', ['$scope', '$state', 'Restangular', '$uibModal', function($scope, $state, Restangular, $uibModal) {

  $scope.boards = Restangular.all('boards').getList().$object;
  $scope.board = $scope.boards[0];

  $scope.createBoard = function() {
    Restangular.all('boards').post( { title: $scope.board.title } )
    .then( function(newBoard) {
      console.log(newBoard);
      $scope.boards.push(newBoard);
      console.log($scope.boards);
      $state.go("djello.boards");
    });
  };

  $scope.deleteBoard = function() {
    console.log($scope.board);
    var boardIndex = $scope.boards.indexOf($scope.board);
    Restangular.one('boards', $scope.board.id).remove().then(function() {
      $scope.boards.splice(boardIndex, 1);
      $state.go('djello.boards');
    });
  };

  $scope.open = function(card) {
    $scope.card = card;
    var modal = $uibModal.open({
      animation: true,
      templateUrl: 'templates/modal.html',
      controller: 'CardCtrl',
      scope: $scope
    })
  };

}])
