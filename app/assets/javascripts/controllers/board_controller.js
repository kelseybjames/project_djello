djello.controller('BoardCtrl', ['$scope', 'board', function($scope, board) {

  $scope.board = board;
  $scope.lists = board.lists;
  console.log($scope.board.lists);
}])