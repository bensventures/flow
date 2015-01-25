define( [
	'angular',
	'config',
	'discussionService',
	'discussionController',
	'topicController',
	'moment'
], function ( angular, config, discussionService, discussionController, topicController, moment )
{
	var app = angular.module( 'flow', [] ).run( function( $rootScope ){

		$rootScope.loadingExternal = false;

	});

	app.factory( 'discussionService', discussionService );
	app.controller( 'discussionController', discussionController );
	app.controller( 'topicController', topicController );

	app.filter('to_trusted', ['$sce', function($sce){
	    return function(text) {
	        return $sce.trustAsHtml(text);
	    };
	}])
	.filter('time_format', ['$sce', function($sce){
	    return function(text) {
	    	var duration = moment.duration( -text, 'seconds').humanize(true).split(' '),
	    		number = '<span class="duration-number">' + duration.shift() + '</span> ',
	    		date = number + duration.join(' ');

	        return $sce.trustAsHtml(date);
	    };
	}]).
	filter( 'string_to_colour', function(){
		return function (str) {
		    // str to hash
		    for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));

		    // int/hash to hex
		    for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));

	    	return colour;
		}
	});

	return app;
} );

