require('./common.less');
function changePage(){
	var currentState = History.getState(true, true);
	if(currentState){
    	if(currentState.title === 'login'){
    		require.ensure(['./login/login.js'],function(require){
    			var loginApi = require('./login/login.js');
			    loginApi($('#wrap'),currentState);
    		});
    	}else if(currentState.title === 'signup'){
		    require.ensure(['./login/login.js'],function(require){
			    var loginApi = require('./login/login.js');
			    loginApi($('#wrap'),currentState);
		    });
	    }else{
		    require.ensure(['./login/login.js'],function(require){
			    var loginApi = require('./login/login.js');
			    loginApi($('#wrap'),currentState);
		    });
    	}
    }
}

$(function(){
    History.Adapter.bind(window,'statechange',changePage);
	changePage();
    $('body').delegate('[data-route]','click',function(){
    	var target = this.getAttribute('data-route');
    	History.pushState({state:target}, target, "/page/"+target);
    });
});