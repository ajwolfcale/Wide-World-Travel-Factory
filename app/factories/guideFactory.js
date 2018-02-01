'use strict';

angular.module("travel").factory("travelFactory", function($q, $http){
    
    let getBooks = () => {
      return $q( (resolve, reject) => {
        $http
        .get("./data/guides.json")
        .then( (books) => {
          resolve(books);
        })
        .catch( (err) => {
          reject(err);
        });
      });
    };
  
    return { getBooks };
  
  });

  