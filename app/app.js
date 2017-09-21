angular.module('ecommerce', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('components', {
    url:'/components',
    templateUrl: 'app/views/components/components.html',
    controller: 'componentsCtrl'
  })

$urlRouterProvider.otherwise('/components')
});
