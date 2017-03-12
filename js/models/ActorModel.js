(function ($) {

    ActorModel = Backbone.Model.extend({
        fetchActor: function (id) {
            this.url = "https://umovie.herokuapp.com/unsecure/actors/" + id;
            var self = this;
            return this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }
            }).success(function (_data, success, result) {
                console.log("actor", result.responseJSON);
                self.artistName = result.responseJSON.results[0].artistName;
                self.primaryGenreName = result.responseJSON.results[0].primaryGenreName;
                self.artistLinkUrl = result.responseJSON.results[0].artistLinkUrl;
                self.fetchImage(1);

            })
        },
        fetchImage: function (id) {
            this.url = 'http://imdb.wemakesites.net/api/search?q=' + this.artistName + '&api_key=388d1563-41f9-4179-bd55-965e21e45bf1';
            var self = this;
            var actorData;
            var image;
            //we need to chain 2 consecutive ajax calls to get the actor picture, because this is 2017 and we live in the worst cyberpunk future possible

            return this.fetch({dataType: 'jsonp'}).success(function (_data, success, result) {

                console.log(_data.data.results.names);
                //console.log(self.artistName);
                actorData = _data.data.results.names.find((a) => a.title == self.artistName
                )
                console.log(actorData);
            }).then(function () {

                $.ajax({
                    url: 'http://imdb.wemakesites.net/api/' + actorData.id + '?api_key=388d1563-41f9-4179-bd55-965e21e45bf1',
                    type: 'GET',
                    dataType: 'jsonp'
                })
                    .done(function (data) {
                        console.log(data.data.image);
                        self.artistImage = data.data.image;
                    })

            });


        }

    });

    actorModel = new ActorModel();

})(jQuery);
