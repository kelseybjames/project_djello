djello.controller('ListCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

  $scope.board = $stateParams.board;
  $scope.lists = $scope.board.lists;
}])