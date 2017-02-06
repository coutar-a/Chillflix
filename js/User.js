/**
 * Created by Charles on 05/02/2017.
 */

function User(email, password) {
    this.email = email;
    this.password = password;
    this.token = undefined;

    this.login = function () {
        log(this);
        function log(_this) {
            $.post('http://umovie.herokuapp.com/login', {email: _this.email, password: _this.password},
                function (returnedData) {
                    console.log(returnedData.token);
                    _this.token = returnedData.token;
                }, 'json');
        }
    };

    this.logout = function () {

    };
}


