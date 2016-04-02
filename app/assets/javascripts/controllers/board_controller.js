djello.controller('BoardCtrl', ['$scope', '$state', 'Restangular', function($scope, $state, Restangular) {

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
}])
