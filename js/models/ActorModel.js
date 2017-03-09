(function ($) {

    ActorModel = Backbone.Model.extend({
        fetchActor: function(id){
            this.url = "https://umovie.herokuapp.com/unsecure/actors/" + id;
            var _this = this;
            this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }}).success(function(_data, success, result){
                _this.artistName = result.responseJSON.results[0].artistName;
            })
        }
        
    });

    actorModel = new ActorModel();

})(jQuery);