define( [
], function ()
{
	function discussionController ( $scope, $sce, discussionService )
	{
		discussionService.getResults().success( function ( response )
		{
			$scope.topics = response.topics;
		} );
	}

	discussionController.$inject = ['$scope', '$sce', 'discussionService'];
	return discussionController;
} );