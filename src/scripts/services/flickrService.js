flickrApp.service('flickrService', function($http, $q) {
    

    var apiKey = '0cdd4a23bdeeed0f78f8706202613916';
    var userId = '130472218@N02';

    this.getFlickrPhotos = function(cb) {
        return $http.jsonp('http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' + apiKey +
                  '&user_id=' + userId + '&format=json&per_page=500')
            .then(function(response) {
                return response.data;
            }, function(reason) {
                console.log("#ERROR");
                return $q.reject("Flick failed");
            })
            .then(function(data){
                
                return data;
            });
    };

});