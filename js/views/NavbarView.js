(function ($) {

    autodata = {};

    NavbarView = Backbone.View.extend({

        source: Handlebars.getTemplate('NavbarTemplate'),
        template: null,

        events: {

            "input .searchBar": "fetchAutocomplete",
            "change #searchFilter": "userOptions",
            "change #moviesGenres": "userOptions",
            "change #tvshowsGenres": "userOptions",
            "input #searchLimit": "userOptions"

        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
            this.model = new SearchResultsModel();
        },

        render: function (data) {
            this.$el.html(this.template(data));
            // CSS and Ajax re-initialisation.
            this._init();
            return this;
        },

        _init: function () {

            // CSS initialisation
            $('.modal').modal();
            $(".button-collapse").sideNav();
            $('select').material_select();
            this._initAutocomplete();
        },

        _initAutocomplete : function () {
            $('input.autocomplete').autocomplete({
                data: this.getAutocompleteContent()
            });
        },

        getAutocompleteContent : function () {
            return autodata;
        },

        fetchAutocomplete: function () {
            // $('.autocomplete-content').remove();
            this.model.fetchAutocompleteResults();
        },

        userOptions: function (e) {
            var dataset = e.target.dataset.action;
            switch (dataset) {

                case "searchFilter" : {
                    userProfile.attributes.options.searchFilter = e.target.options[e.target.options.selectedIndex].value;
                    $("#searchFilterLabel").innerHTML = e.target.options[e.target.options.selectedIndex].innerHTML;
                    break;
                }

                case "moviesGenres" : {
                    var selectedOptions = e.target.selectedOptions;
                    var options = [];
                    for (var i = 0; i < selectedOptions.length; ++i) {
                        options.push(e.target.options[selectedOptions[i].index].value);
                    }
                    //
                    userProfile.attributes.options.moviesGenres = options.slice(1, options.length);
                    break;
                }

                case "tvshowsGenres" : {
                    var selectedOptions = e.target.selectedOptions;
                    var options = [];
                    for (i = 0; i < selectedOptions.length; ++i) {
                        options.push(e.target.options[selectedOptions[i].index].value);
                    }
                    //
                    userProfile.attributes.options.tvshowsGenres = options.slice(1, options.length);
                    break;
                }

                case "searchLimit" : {
                    userProfile.attributes.options.searchLimit = e.target.value;
                    $("#searchLimitLabel")[0].innerHTML = "Search Limit : " + e.target.value;

                    break;
                }


            }


        }

    });

})(jQuery);