import angular from 'angular';

// directives
let bootSite = () => {
	return {
		template: require( './boot.tpl.html' ),
		controller: 'bootWebsiteCtrl',
		controllerAs: 'bootSite'
	};
};


class bootWebsiteCtrl {
	constructor( $compile, $scope, $http ) {
		console.log('construtc boot site');

	}
}

const MODULE_NAME = 'bootWebsite';

angular.module( MODULE_NAME, [  ] )
	.directive( 'bootSite', bootSite )

	.controller( 'bootWebsiteCtrl', bootWebsiteCtrl );
export default MODULE_NAME;
