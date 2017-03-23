(function ($) {

    NavbarModel = Backbone.Model.extend({

        fetchGenres: function (caller) {

            this.fetchMoviesGenres(caller);

        },

        fetchMoviesGenres: function (caller) {
            var self = this;
            this.fetch({
                url: 'https://umovie.herokuapp.com/unsecure/genres/movies',
                headers: {'Authorization': userProfile.attributes.token},
                success: function (data) {
                    self.fetchTvshowsGenres(caller, data);
                }
            })


        },

        fetchTvshowsGenres: function (caller, movieGenres) {

            this.fetch({
                url: 'https://umovie.herokuapp.com/unsecure/genres/tvshows',
                headers: {'Authorization': userProfile.attributes.token},
                success: function (data, _data) {
                    // Add userProfile info to render the navbar
                    data = {user: userProfile.attributes, moviesGenres: movieGenres.attributes, tvshowsGenres: _data};
                    console.log(data);
                    //
                    caller.$el.find("#nav")[0].innerHTML = $(caller.navbarView.render(data).el).html();
                }
            })


        }


    });


}(jQuery));