var app = angular.module('calculatorApp', []);

app.controller('CalculateController', ['$scope',
    function($scope){
      $scope.op1 = 0;
      $scope.op2 = 0;

      $scope.add = function(){
          var result = $scope.op1 + $scope.op2;
          checkInput();
          alert('The sum of ' + $scope.op1 + ' and ' + $scope.op2 + ' is ' + result);
          reset();
      };

      $scope.subtract = function(){
          var result = $scope.op1 - $scope.op2;
          checkInput();
          alert('The difference between ' + $scope.op1 + ' and ' + $scope.op2 + ' is ' + result);
          reset();
      };

      $scope.multiply = function(){
          var result = $scope.op1 * $scope.op2;
          checkInput();
          alert('The result of multiplying ' + $scope.op1 + ' and ' + $scope.op2 + ' is ' + result);
          reset();
      };

      $scope.divide = function(){
          var result = $scope.op1 / $scope.op2;
          checkInput();
          if($scope.op2 == 0){
              alert('Error! You cannot divide a number by zero.')
              reset();
          } else {
              alert('The result of dividing ' + $scope.op1 + ' and ' + $scope.op2 + ' is '+ result);
              reset();
          }
      };

    function checkInput(){
        if($scope.op1 == null || $scope.op2 == null) {
            alert("Error! You must enter a value for both numbers.");
            return false;
        }
        return true;
     }
    
    function reset(){
        $scope.op1 = 0;
        $scope.op2 = 0;
      } 
}]);