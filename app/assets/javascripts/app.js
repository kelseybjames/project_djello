var djello = angular.module('djello', ['ui.router', 'restangular', 'Devise'])
.config(function(AuthProvider) {
    // Configure Auth service with AuthProvider
})

// .controller('myCtrl', function(Auth) {
//         // Use your configured Auth service.
//     });


djello.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

// Restangular Config
djello.config( ['RestangularProvider', function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({
    "content-type": "application/json"
  });
  RestangularProvider.setResponseExtractor( function( response, operation ) {
    // Extractor code here
  });

}]);

djello.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){

    $stateProvider

    .state("djello", {
      url: "/",
      template: "<div ui-view></div>",
      controller: "BoardCtrl"
    })
    .state('djello.board', {
      url: '/board/:board_id',
      template: 'templates/board.html',
      controller: 'BoardCtrl',
      resolve: {
        board: ['Restangular', function(Restangular){
          return Restangular.one('boards', id);
        }]
      }
    })
    .state('djello.board.lists', {
      url: '/lists',
      template: 'templates/list.html',
      controller: 'ListCtrl'
    })

    $urlRouterProvider.otherwise('/');

  }]);
