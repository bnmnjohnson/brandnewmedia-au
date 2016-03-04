function PostCtrl($scope, $rootScope,  $routeParams, WhiteBackground, LabsService, PostService, $location, $window) {

    // ViewModel
    const vm = this;

    // vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
    // vm.number = 1234;
    // vm.whenClicked = function() {
    //     console.log("im clickable,right?");
    // }

    // Turn background white
    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    // Get current URL
    // var routeId = $routeParams.labId;

    // Get post associated with URL
    // LabsService.getEntry(routeId);

}

PostCtrl.$inject = ["$scope", "$rootScope", "$routeParams", "WhiteBackground", "LabsService", "PostService", "$location", "$window"];

export default {
    name: 'PostCtrl',
    fn: PostCtrl
};
