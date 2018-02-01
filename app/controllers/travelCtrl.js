'use strict';

angular.module("travel").controller("bookCtrl", function($scope, travelFactory) {

  travelFactory.getBooks()
  .then( (booksData) => {
    console.log(booksData);
    $scope.books = (booksData.data.guides);
  });

});


