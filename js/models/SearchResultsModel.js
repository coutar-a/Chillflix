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

        fetchAutocompleteResults: function () {
            this.url = "https://umovie.herokuapp.com/search?q=" + $("#search")[0].value + "&limit=5";
            this.fetch({
                headers: {'Authorization': userProfile.attributes.token},
                success: function (data) {
                    if (autodata === undefined) {
                        autodata = {};
                    }
                    var counter = 0
                    for (var key in autodata) {
                        counter++
                        if (counter > 7){
                            autodata = {}
                            $('.autocomplete-content').remove();
                        }
                    }
                    var toAdd = {};

                    if (data.attributes.hasOwnProperty("results")) {
                        for (var key in data.attributes.results){
                            var hasArtistName = data.attributes.results[key].hasOwnProperty("artistName");
                            var hasTrackName = data.attributes.results[key].hasOwnProperty("trackName");
                            if(hasArtistName && hasTrackName){
                                var artistName = data.attributes.results[key].artistName.toString();
                                var trackName = data.attributes.results[key].trackName.toString();

                                if (autodata[artistName] === undefined){
                                    autodata[artistName] = null;
                                    toAdd[artistName] = null;
                                } else if (autodata[trackName] === undefined){
                                    autodata[trackName] = null;
                                    toAdd[trackName] = null;
                                }

                            } else if (hasArtistName) {
                                var artistName = data.attributes.results[key].artistName.toString();

                                if (autodata[artistName] === undefined){
                                    autodata[artistName] = null;
                                    toAdd[artistName] = null;
                                }
                            }
                        }
                        console.log("results", autodata);
                        $('input.autocomplete').autocomplete({
                            data: toAdd
                        });
                    }
                }
            });
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