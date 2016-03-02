function LabsCtrl($scope, $rootScope, $location, $window, WhiteBackground, contentful, PostService, LabsService) {

    // ViewModel
    const vm = this;

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    vm.requestEntry = function(sysId) {
        PostService.getEntry(sysId);
        console.log(sysId);
    };

    // var routeId = $routeParams.labId;

}

LabsCtrl.$inject = ["$scope", "$rootScope", "$location", "$window", "WhiteBackground", "contentful", "PostService", "LabsService", "$routeParams"];

export default {
    name: 'LabsCtrl',
    fn: LabsCtrl
};
