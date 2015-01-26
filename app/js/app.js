define( [
	'angular',
	'config',
	'discussionService',
	'discussionController',
	'topicController',
	'moment'
], function ( angular, config, discussionService, discussionController, topicController, moment )
{
	var app = angular.module( 'flow', [] ).run( ['$rootScope', function( $rootScope ){

		$rootScope.loadingExternal = false;

	}]);

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
	}]);

	return app;
} );

