'use strict';

angular.module('todoappApp')
  .controller('MainCtrl', function ($scope, Todo) {

  $scope.todos = Todo.all;

  //var todosInStore = localStorageService.get('todos');

    //$scope.todos = todosInStore && todosInStore.split('\n') || [];

    //$scope.$watch('todos', function () {
      //localStorageService.add('todos', $scope.todos.join('\n'));
    //}, true);

   $scope.addTodo = function () {
      //$scope.todos.push($scope.todo);
      //$scope.todo = '';
      Todo.create($scope.todo).then(function() {
        $scope.todo = {title:''};
      });
    };

  $scope.removeTodo = function (index) {
     console.log(index);
     Todo.delete(index);
    };

});
