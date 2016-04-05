djello.controller('ListCtrl', ['$scope', '$stateParams', 'Restangular', function($scope, $stateParams, Restangular) {

  $scope.board = $stateParams.board;
  console.log($stateParams);

  $scope.createList = function() {
    console.log($scope.board);
    Restangular.all('lists').post( { title: $scope.list.title, description: $scope.list.description, board_id: $scope.board.id } )
    .then( function(newList) {
      // console.log(newList);
      $scope.lists.push(newList);
      // console.log($scope.lists);
      $state.go("djello.boards");
    });
  };

}])
