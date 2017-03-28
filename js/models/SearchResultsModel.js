/**
 * Created by Charles on 13/03/2017.
 */
(function ($) {

    SearchResultsModel = Backbone.Model.extend({

        fetchWithKeywords: function (keywords, caller) {

            this._buildURL(keywords);
            console.log(this.url);
            this.fetch({
                headers: {'Authorization': userProfile.attributes.token},
                success: function (data) {
                    var _data;
                    if (data.attributes.hasOwnProperty("results")) {
                        _data = data.attributes.results;
                    } else {
                        _data = data.attributes;
                    }
                    //
                    caller.$el.find(" .Page")[0].innerHTML = $(caller.views.searchResultsView.render(_data).el).html(); // TODO : Refactor.
                }
            })
        },

        fetchForAutocomplete: function (keys) {

            this.url = 'https://umovie.herokuapp.com/movies/';
            this.fetch({
                headers: {'Authorization': userProfile.attributes.token},
                success: function (data) {

                    var _data = {};

                    // Autocomplete initialisation
                    $('input.autocomplete').autocomplete({
                        data: _data,
                        limit: 10,
                        minLength: 1
                    });

                }
            })

        },

        _buildURL: function (keywords, bool) {

            // Building the genres query (&genre=...)
            var genres = userProfile.attributes.options.moviesGenres;
            genres = genres.concat(userProfile.attributes.options.tvshowsGenres);
            var genresQuery = "";
            genres.forEach(function (genre) {
                genresQuery += "&genre=" + genre;
            });
            //
            this.url = 'https://umovie.herokuapp.com/search' + encodeURI(userProfile.attributes.options.searchFilter + '?q=' + keywords + genresQuery);
            if (userProfile.attributes.options.searchFilter != "/users" || bool) {
                this.url += "&limit=" + userProfile.attributes.options.searchLimit;
            }
        }

    });


}(jQuery));