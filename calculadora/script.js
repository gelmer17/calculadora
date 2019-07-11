var Calculadora = angular.module("Calculadora",[]);
Calculadora.controller("Suma",function($scope){
    $scope.n1=14;
    $scope.n2=14;
})
Calculadora.controller("Resta",function($scope){
    $scope.n1=80;
    $scope.n2=9;
})
Calculadora.controller("Multiplicacion",function($scope){
    $scope.n1=7;
    $scope.n2=6;
})
Calculadora.controller("Division",function($scope){
    $scope.n1=100;
    $scope.n2=20;
})