/**
 * Created by zhangqing on 2016/6/25.
 */
var loginTemplate = require('./login.handlebars');
require('./login.less');
module.exports = function(container,state){
	container.html(loginTemplate({
		login:state.title !== 'signup',
		signin: state.title === 'signup' ? "signupMode" : ""
	}));
};