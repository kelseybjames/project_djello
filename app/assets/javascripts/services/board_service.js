djello.factory('BoardService', function(){
  var obj = {};

  var _board;

  obj.getBoard = function() {
    return _board;
  }

  return obj;
});
