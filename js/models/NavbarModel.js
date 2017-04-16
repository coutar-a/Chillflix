(function ($) {

    NavbarModel = Backbone.Model.extend({

        fetchSettings: function (view, callback) {

            this.fetchGenres(view, callback);

        },

        fetchGenres: function (view, callback) {
            var self = this;
            this.fetch({
                url: 'https://umovie.herokuapp.com/unsecure/genres/movies',
                headers: {'Authorization': userProfile.attributes.token},
                success: function (req, results) {
                    self._fetchGenres(view, results, callback);
                }
            })


        },

        _fetchGenres: function (view, movieGenres, callback) {

            this.fetch({
                url: 'https://umovie.herokuapp.com/unsecure/genres/tvshows',
                headers: {'Authorization': userProfile.attributes.token},
                success: function (data, _data) {
                    // Add userProfile info to render the navbar
                    data = {user: userProfile.attributes, moviesGenres: movieGenres, tvshowsGenres: _data};
                    console.log(data);
                    //
                    callback();
                    view.$el.innerHTML = $(view.views.navbarView.render(data).el).html();

                }
            })


        }


    });


}(jQuery));