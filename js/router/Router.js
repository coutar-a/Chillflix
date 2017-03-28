/**
 * Created by Charles on 25/03/2017.
 */
function Router(parentView) {

    this.initApp = function () {
        parentView.$el[0].innerHTML = ""; // Clear the HTML
        //
        $(document.body).css('background-color', '#FFFFFF');
        var _initApp = function () {
            parentView.$el.append(parentView.views.navbarView.render(userProfile).el);
            parentView.$el.append(parentView.views.homeView.render(userProfile).el);
            parentView.$el.append(parentView.views.footerView.render().el);
        };
        //
        navbarModel = new NavbarModel();
        navbarModel.fetchSettings(parentView, _initApp);

    };

    this.register = function () {
        $(document.body).css('background-color', '#2985ca');
        //
        parentView.$el.find(" .Page")[0].innerHTML = $(parentView.views.registerView.render().el).html();
    };

    this.home = function () {
        parentView.$el.find(" .Page")[0].innerHTML = $(parentView.views.homeView.render(userProfile).el).html();
    };

    this.userProfile = function () {
        parentView.$el.find(" .Page")[0].innerHTML = $(parentView.views.userProfileView.render(userProfile).el).html();
    };

    this.login = function () {
        parentView.$el[0].innerHTML = ""; // Clear the HTML
        //
        $(document.body).css('background-color', '#2985ca');
        //
        parentView.$el.append(parentView.views.loginView.render().el);
    };

    this.search = function () {
        var keywords = $(document.activeElement)[0].value;
        var search = new SearchResultsModel({});
        search.fetchWithKeywords(keywords, parentView);
    };

    this.track = function (id) {
        var movie = new MovieModel({});
        movie.fetchMovie(id, parentView);
    };

    this.artist = function (id) {
        var actor = new ActorModel({});
        actor.fetchActor(id, parentView);
    };

    this.collection = function (id) {
        var tvShow = new TVShowModel({});
        tvShow.fetchSeason(id, parentView);
    };

    this.seasons = function (id) {
        // TODO
        // var tvShow = new TVShowModel({});
        // tvShow.fetchSeason(id, parentView);
    };

    this.user = function (id) {
        var user = new UserProfileModel({});
        user.fetchProfile(id, parentView);
    }


}