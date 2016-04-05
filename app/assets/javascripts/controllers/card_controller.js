djello.controller('CardCtrl', ['$scope', '$state', 'Restangular', function($scope, $state, Restangular) {

  $scope.deleteCard = function() {
    $scope.list = Restangular.one('lists', $scope.card.list_id);
    console.log($scope.list);
    Restangular.one('cards', $scope.card.id).remove().then(function() {
      $state.go('djello.boards');
    });
  };

  $scope.createCard = function() {
    $scope.card.list_id = $scope.list.id;

    Restangular.all('cards').post( {
      title: $scope.card.title,
      description: $scope.card.description,
      list_id: $scope.card.list_id
    } ).then(function(newCard) {
      console.log($scope.list);
      $scope.list.cards.unshift(newCard);
      Restangular.all('card_memberships').post( {
        card_id: newCard.id,
        member_id: current_user.id
      });
    })
  };

  $scope.updateCard = function() {
    Restangular.one('cards', $scope.card.id).put({
      title: $scope.card.title,
      description: $scope.card.description
    }).then(function(newCard) {
      console.log(newCard);
    })
  };

  $scope.createCardMembership = function() {

  };

  $scope.destroyCardMembership = function() {

  };

}])
