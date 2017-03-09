/**
 * Created by Charles on 07/03/2017.
 */
(function ($) {

    UsersCollection = Backbone.Collection.extend({

        fetchUserByID: function (id) {
            this.url = "http://umovie.herokuapp.com/users/" + id;
            this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }
            })
        },

        fetchUsersByName: function (name) {
            this.url = "http://umovie.herokuapp.com/search/users?q=" + name.replace(" ", "%20");
            this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }
            })
        },

        fetchUsers: function () {
            this.url = "http://umovie.herokuapp.com/users";
            this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }
            })

        }


    });

    users = new UsersCollection();

})(jQuery);