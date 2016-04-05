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
      templateUrl: 'templates/card_show_modal.html',
      controller: 'CardCtrl',
      scope: $scope
    })
  };

  $scope.addCard = function(list) {
    $scope.list = list;
    $scope.card = null;
    var modal = $uibModal.open({
      animation: true,
      templateUrl: 'templates/new_card_modal.html',
      controller: 'CardCtrl',
      scope: $scope
    })
  };

  $scope.addList = function() {
    console.log($scope.board);
    $scope.list = null;
    var modal = $uibModal.open({
      animation: true,
      templateUrl: 'templates/new_list_modal.html',
      controller: 'ListCtrl',
      scope: $scope
    })
  };

  $scope.updateList = function(list) {
    $scope.list = list;
    console.log($scope.list)
    Restangular.one('lists', list.id).put({
      title: $scope.list.title,
      description: $scope.list.description
    }).then(function(newList) {
      console.log(newList);
    })
  };

}])
