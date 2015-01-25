define([
	'config'
], function( config )
{
	function discussionService ( $http )
	{
		var discussion = {};

		discussion.getResults = function ()
		{
			return $http( {
				url : config.discussionDataUrl
			} );
		};

		return discussion;
	}

	discussionService.$inject = [ '$http' ];
	return discussionService;
} );