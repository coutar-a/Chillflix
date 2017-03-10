(function ($) {

    ActorModel = Backbone.Model.extend({
        fetchActor: function(id){
            this.url = "https://umovie.herokuapp.com/unsecure/actors/" + id;
            var _this = this;
            this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }}).success(function(_data, success, result){
                    console.log(result.responseJSON);
                _this.artistName = result.responseJSON.results[0].artistName;
                _this.primaryGenreName = result.responseJSON.results[0].primaryGenreName;
            })
        }
        
    });

    actorModel = new ActorModel();

})(jQuery);