(function ($) {

    UsersCollection = Backbone.Collection.extend({

        fetchUsers: function () {
            this.url = "http://umovie.herokuapp.com/";
            this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }
            })

        }


    });

    users = new UsersCollection();

})(jQuery);