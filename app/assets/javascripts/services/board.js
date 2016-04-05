djello.factory('Boards', ['Restangular', '_', function(Restangular, _) {
    Restangular.extendCollection('boards', function(collection){
        // creates a new post on the server
        // and adds it to the collection
        collection.create = function(board){
            collection.post(board).then(function(response) {
                collection.unshift(response);
            });
        };
        return collection;
    });

    Restangular.extendModel('boards', function(model) {
        model.update = function() {
        };
        return model;
    })

    return Restangular.service('boards');
}]);
