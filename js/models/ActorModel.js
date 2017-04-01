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
            //https://image.tmdb.org/t/p/w640/

            return this.fetch({dataType: 'jsonp'}).success(function (_data) {

                actorId = _data.results[0].id;
                console.log(_data);
                console.log(actorId);
            }).then(function () {


                $.ajax({
                    //url: 'http://imdb.wemakesites.net/api/' + actorId + '?api_key=388d1563-41f9-4179-bd55-965e21e45bf1',
                    url: 'http://api.tmdb.org/3/person/' + actorId + '/images?api_key=5c0ed2cbc736a80769f53f78daee5c7c',
                    type: 'GET',
                    dataType: 'jsonp'
                })
                    .done(function (data) {
                        renderData.artistImage = 'https://image.tmdb.org/t/p/w640/' + data.profiles[0].file_path;

                        caller.$el.find(" .Page")[0].innerHTML = $(caller.views.actorView.render(renderData).el).html();

                    })

            });


        }

    });

})(jQuery);
