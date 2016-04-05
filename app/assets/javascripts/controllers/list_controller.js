djello.controller('ListCtrl', ['$scope', '$stateParams', 'Restangular', function($scope, $stateParams, Restangular) {

  $scope.createList = function() {
    $scope.list.board_id = $scope.board.id;
    console.log($scope.list);
    Restangular.all('lists').post( { 
      title: $scope.list.title, 
      description: $scope.list.description, 
      board_id: $scope.list.board_id } )
    .then( function(newList) {
      console.log(newList);
      $scope.lists = Restangular.one('boards', $scope.list.board_id).all('lists').get();
      $state.go("djello.boards");
    });
  };

}])
