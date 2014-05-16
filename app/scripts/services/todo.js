'use strict';

angular.module('todoappApp')
  .factory('Todo', function ($firebase, FIREBASE_URL) {

    var dataRef = new Firebase(FIREBASE_URL + 'todos');

    var todos = $firebase(dataRef);

    var Todo = {

      all: todos,
      create: function(todo) {
        return todos.$add(todo);
      },
      find: function(todoId) {
        return todos.$child(todoId);
      },
      delete: function(todoId) {
        return todos.$remove(todoId);
      }

    };

    return Todo; 

  });
