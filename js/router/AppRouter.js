(function ($) {

    AppRouter = Backbone.Router.extend({

        _router: null,

        routes: {

            "": "login", // Default route
            "login": "login",
            "login/register": "register",
            "login/authenticate": "initApp",
            "home": "home",
            "search/:query": "search",
            "user/:id": "user",
            "track/:id": "track",
            "collection/:id": "collection",
            "collection/:id/seasons": "seasons",
            "artist/:id": "artist"

        },

        initialize: function (options) {
            this._router = new Router(options.parentView);
        },

        initApp: function () {
            this._router.initApp();
        },

        login: function () {
            this._router.login();
        },

        register: function () {
            this._router.register();
        },

        home: function () {
            this._router.home();
        },

        search: function (query) {
            this._router.search(query);
        },

        track: function (id) {
            this._router.track(id);
        },

        artist: function (id) {
            this._router.artist(id);
        },

        collection: function (id) {
            this._router.collection(id);
        },

        seasons: function (id) {
            this._router.seasons(id);
        },

        user: function (id) {
            this._router.user(id);
        }


    });

}(jQuery));