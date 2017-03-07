(function ($) {

    FooterView = Backbone.View.extend({

        template: _.template($("#FooterTemplate").html()),


        render: function () {

            //user things will go here. Template will have to be updated in consequence.
            this.$el.html(this.template({}));
            return this;
        },


        loadHome: function (e) {

            console.log("home page");
            e.preventDefault();
            loadHomePage();
        },

        loadWatchlist: function (e) {

            console.log("watch list");
            e.preventDefault();
            loadWatchlistsPage();
        },

        loadSeries: function (e) {

            console.log("load series");
            e.preventDefault();
            loadSeriesPage();
        },

        loadSettings: function (e) {

            console.log("load settings");
            e.preventDefault();
            loadSettingsPage();
        },

        logOut: function (e) {

            console.log("log out");
            e.preventDefault();
            userLogout();
        }
    });

})(jQuery);