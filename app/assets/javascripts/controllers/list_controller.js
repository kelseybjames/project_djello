djello.controller('ListCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

  $scope.board = $stateParams.board;
  console.log('BOARD:');
  console.log($scope.board);
  $scope.lists = $scope.board.lists;
  console.log('LISTS');
  console.log($scope.lists);
}])