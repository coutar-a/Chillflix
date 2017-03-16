(function ($) {

    ActorModel = Backbone.Model.extend({
        fetchActor: function (id, caller) {
            this.url = "https://umovie.herokuapp.com/actors/" + id;
            var self = this;
            return this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }
            }).success(function (_data, success, result) {
                self.fetchImage(caller, result.responseJSON.results[0]);

            })
        },
        fetchImage: function (caller, renderData) {
            this.url = 'http://imdb.wemakesites.net/api/search?q=' + renderData.artistName + '&api_key=388d1563-41f9-4179-bd55-965e21e45bf1';
            var self = this;
            var actorData;

            return this.fetch({dataType: 'jsonp'}).success(function (_data) {

                actorData = _data.data.results.names[0];
                console.log(renderData.artistName)
            }).then(function () {


                $.ajax({
                    url: 'http://imdb.wemakesites.net/api/' + actorData.id + '?api_key=388d1563-41f9-4179-bd55-965e21e45bf1',
                    type: 'GET',
                    dataType: 'jsonp'
                })
                    .done(function (data) {
                        renderData.artistImage = data.data.image;

                        caller.$el.find(" .Page")[0].innerHTML = $(caller.actorView.render(renderData).el).html();

                    })

            });


        }

    });

})(jQuery);
