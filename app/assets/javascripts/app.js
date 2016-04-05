var djello = angular.module('djello', ['ui.router', 'restangular', 'Devise', 'ui.bootstrap', 'xeditable'])
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

}]);

djello.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

    $stateProvider

    .state("djello", {
      url: "/",
      template: "<div ui-view></div>"
    })
    .state('djello.boards', {
      url: 'boards',
      templateUrl: 'templates/board.html',
      controller: 'BoardCtrl',
      resolve: {
        board: ['Boards', '$stateParams', function(Boards, $stateParams) {
          return Boards.one($stateParams.id).get();
        }]
      }
    })
    .state('djello.newboard', {
      url: 'new',
      templateUrl: 'templates/newboard.html',
      controller: 'BoardCtrl'
    })
    .state('djello.newlist', {
      url: 'list/new',
      templateUrl: 'templates/newlist.html',
      controller: 'ListCtrl',
      params: {board: null, id: null}
    })

    $urlRouterProvider.otherwise('boards');

  }]);

djello.run(function(editableOptions) {
  editableOptions.theme = 'default';
});