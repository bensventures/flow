requirejs.config( {
	baseUrl : 'js',
	paths : {
		angular : '../components/angular/angular',
		moment : '../components/moment/min/moment.min'
	},
	shim : {
		'angular' : {
			exports : 'angular'
		}
	},
	priority : [
		'angular'
	],

	urlArgs : 'bust=' + (new Date()).getTime()
} );

require( [
	'angular',
	'app'
], function ( angular, app )
	{
		angular.bootstrap( document, ['flow'] );
	}
);
