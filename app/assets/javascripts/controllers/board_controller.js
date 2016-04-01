djello.controller('BoardCtrl', ['$scope', 'board', 'Restangular', function($scope, board, Restangular) {

  $scope.boards = Restangular.all('boards').getList().$object;
  $scope.board = board;
  $scope.lists = board.lists;
  console.log('BOARDS:');
  console.log($scope.boards);
  console.log('CURRENT BOARDS');
  console.log($scope.board);
  console.log('LISTS');
  console.log($scope.lists);
}])