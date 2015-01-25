define( [
], function ()
{
	function topicController ( $scope, $sce )
	{
		$scope.topicVisible = false;

		$scope.addThread = function ()
		{
			
		};

		$scope.onClickTopicTitle = function ( $event )
		{
			$scope.topicVisible = !$scope.topicVisible;
		};
	}

	topicController.$inject = ['$scope', '$sce'];
	return topicController;
} );