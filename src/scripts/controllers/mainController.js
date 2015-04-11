flickrApp.controller('mainController', function($scope, flickrService) {

    $scope.photos = flickrService.getFlickrPhotos().then(function(data){
        console.log(data);
    });


});