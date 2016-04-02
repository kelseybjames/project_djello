djello.controller('BoardCtrl', ['$scope', '$state', 'Restangular', function($scope, $state, Restangular) {

  $scope.boards = Restangular.all('boards').getList().$object;
  $scope.board = $scope.boards[0];
  // $scope.lists = $scope.board.lists;
  // console.log($scope.lists[0].cards)

  $scope.createBoard = function() {
    Restangular.all('boards').post( { title: $scope.board.title } )
    .then( function(newBoard) {
      console.log(newBoard);
      $scope.boards.push(newBoard);
      console.log($scope.boards);
      $state.go("djello.boards");
    });
  };

  // $scope.$watch( "board", function( newValue, oldValue ) {
  //   $scope.board.lists = newValue.lists
  // })
  // console.log('BOARDS:');
  // console.log($scope.boards);
  // console.log('CURRENT BOARD');
  // console.log($scope.board);
  // console.log('LISTS');
  // console.log($scope.lists);
}])
