(function ($) {

    ActorModel = Backbone.Model.extend({
        fetchActor: function(id){
            this.url = "https://umovie.herokuapp.com/unsecure/actors/" + id;
            var self = this;
            return this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }}).success(function(_data, success, result){
                console.log("actor", result.responseJSON);
                self.artistName = result.responseJSON.results[0].artistName;
                self.primaryGenreName = result.responseJSON.results[0].primaryGenreName;
                self.artistLinkUrl = result.responseJSON.results[0].artistLinkUrl;

            })
        },
        fetchImage: function(id){
            this.url = "https://jsonplaceholder.typicode.com/photos/" + id;
            var self = this;
            
            return this.fetch().success(function(_data, success, result){
                console.log("image", result.responseJSON);
                self.artistImage = result.responseJSON.thumbnailUrl;

            })
        }
        
    });

    actorModel = new ActorModel();

})(jQuery);