(function ($) {

    ActorModel = Backbone.Model.extend({
        fetchActor: function(id){
            this.url = "https://umovie.herokuapp.com/unsecure/actors/" + id;
            var self = this;
            this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }}).success(function(_data, success, result){
                    console.log(result.responseJSON);
                self.artistName = result.responseJSON.results[0].artistName;
                self.primaryGenreName = result.responseJSON.results[0].primaryGenreName;
                self.artistLinkUrl = result.responseJSON.results[0].artistLinkUrl;
            })
        }
        
    });

    actorModel = new ActorModel();

})(jQuery);