angular.module('ecommerce').controller('componentsCtrl', function($scope, productSrvc){
  //Some dummy product data
  $scope.product = {name:'Shoes',
  imageUrl:'https://m.media-amazon.com/images/G/01/6pm/landing/2017/shoes/April/Boat_Shoes._V530666624_.jpg',
  description:'These stylish shoes are great for throwing at people.  Holding pencils.  Also could be worn on feet.',
  price:25
  }

  $scope.products = productSrvc.getProducts();
  
  
})
