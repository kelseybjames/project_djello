djello.controller('ListCtrl', ['$scope', '$stateParams', 'board', function($scope, $stateParams, board) {

  $scope.board = board;
  console.log('BOARD:');
  console.log($scope.board);
  $scope.lists = $scope.board.lists;
  console.log('LISTS');
  console.log($scope.lists);
}])
