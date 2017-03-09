(function ($) {

    ActorModel = Backbone.Model.extend({
        fetchActor: function(id){
            this.url = "https://umovie.herokuapp.com/actors/" + id;
            this.fetch().success(function(_data, success, result){
                console.log(_data, success, result);
            })
        }
        
    });

    actorModel = new ActorModel();

})(jQuery);