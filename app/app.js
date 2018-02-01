"use strict";

angular.module("travel", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/", {
      templateUrl: "partial/travelpart.html",
      controller: "bookCtrl"
    })
    .otherwise("/");
});