console.log("Do stuff here")
require("file?name=[name].[ext]!../index.html");
require("../css/layout.less");
const mThree = require("./mThree.js").default
const bSystem = require("./bSystem.js").default
const angular = require("angular")
var app = angular.module('tacoFish', []).controller('fishDebug', ['$scope', function ($scope) {
    $scope.fish = bSystem.getFish();
}]);

mThree.init();
bSystem.start();



