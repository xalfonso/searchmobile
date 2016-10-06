// This is a JavaScript file
//alert("eduardo");
 ons.bootstrap()
          .controller('AppController', function($scope) {
            $scope.prub = "Pepe"  ;
            $scope.load = function(page) {
              $scope.mySplitterContent.load(page);
            }
            $scope.open = function() {
              $scope.mySplitterSide.open();
            }
            
            /*$scope.redirect = function(url){
        $window.location.href = url;
    }*/
          });


