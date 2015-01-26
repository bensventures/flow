define( [
	'config'
], function ( config )
{
	function topicController ( $scope, $sce )
	{
		$scope.topicVisible = false;
		$scope.color = getColor($scope.topic.topictitle);

		$scope.addThread = function ()
		{
			
		};

		$scope.onClickTopicTitle = function ( $event )
		{
			$scope.topicVisible = !$scope.topicVisible;
		};
	}

	function getColor(text) {
		var colorIndex = text.toLowerCase().charCodeAt(0);

	    if( colorIndex > 10 ){
	    	colorIndex = Math.floor( colorIndex % 10 );
	    }

    	return config.dynamicColors[colorIndex];
	}

	topicController.$inject = ['$scope', '$sce'];
	return topicController;
} );