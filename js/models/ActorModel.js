(function ($) {

    ActorModel = Backbone.Model.extend({
        fetchActor: function (id, caller) {
            this.url = "https://umovie.herokuapp.com/actors/" + id;
            var self = this;
            return this.fetch({
                headers: {
                    'Authorization': userProfile.attributes.token
                }
            }).success(function (_data, success, result) {
                console.log(result.responseJSON.results[0]);
                self.fetchImage(caller, result.responseJSON.results[0]);

            })
        },
        fetchImage: function (caller, renderData) {

            this.url = 'http://api.tmdb.org/3/search/person?api_key=5c0ed2cbc736a80769f53f78daee5c7c&query=' + renderData.artistName.replace(' ', '%20');
            var self = this;
            var actorData;

            return this.fetch({dataType: 'jsonp'}).success(function (_data) {

                if(_data.results.length > 0 && _data.results[0].profile_path) {
                    renderData.artistImage = 'https://image.tmdb.org/t/p/w640/' + _data.results[0].profile_path;
                } else {
                    renderData.artistImage = './images/765-default-avatar.png';
                }
                caller.$el.find(" .Page")[0].innerHTML = $(caller.views.actorView.render(renderData).el).html();
            });
        }

    });

})(jQuery);
