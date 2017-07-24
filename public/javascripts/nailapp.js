var app = angular.module('DerivationQuiz', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller : 'HomeCtrl'
        })
        .when('/quiz', {
            templateUrl: 'partials/quiz.html',
            controller : 'QuizCtrl'
        })
        .when('/info', {
            templateUrl: 'partials/info.html',
            controller : 'InfoCtrl'
        })
        .when('/examples', {
            templateUrl: 'partials/examples.html',
            controller : 'ExamplesCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('HomeCtrl', ['$scope', '$location',
	function ($scope, $location) {
		
            $scope.goToHome = function() {
                $location.path('/');
            }

            $scope.goToQuiz = function() {
                $location.path('/quiz');
            }
            
            $scope.goToInfo = function() {
                $location.path('/info');
            }
            
            $scope.goToExamples = function() {
                $location.path('/examples');
            }

}]);


app.controller('ExamplesCtrl', ['$scope', '$location',
	function ($scope, $location) {
		
            $scope.goToHome = function() {
                $location.path('/');
            }

            $scope.goToQuiz = function() {
                $location.path('/quiz');
            }
            
            $scope.goToInfo = function() {
                $location.path('/info');
            }


}]);


app.controller('QuizCtrl', ['$scope', '$resource', '$location',
    function ($scope, $resource, $location) {

            $scope.goToHome = function() {
                $location.path('/');
            }

            $scope.goToScore = function() {
                $location.path('/score');
            }

	    //hard code these for now, later get from service
            var quizQuestions = {
              1 : { 
                'base' : 'entertain',
                'a' : 'tion',
                'b' : 'ment',
                'c' : 'itude'
              }
            }

            $scope.questions = quizQuestions;

            //set values for radio buttons
           // $scope.formData = {};
           // $scope.formData.easyRegular = 'easy';

}]);

app.controller('InfoCtrl', ['$scope', '$location', function ($scope, $location, $routeParams) {

        $scope.goToHome = function() {
            $location.path('/');
        }
   
        $scope.goToExamples = function() {
            $location.path('/examples');
        }
}]);
