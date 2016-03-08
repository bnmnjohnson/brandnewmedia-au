function CaseCtrl($scope, $rootScope, DarkBackground) {
    var vm = this;

    $rootScope.bodyclass = DarkBackground.bodyClass.data;

    $scope.brandNewMedia = {
        title: 'images/ezgif-2280143617.gif',
        altText: 'Luna park'
    }

}

CaseCtrl.$inject = ["$scope", "$rootScope", "DarkBackground"];

export default {
    name: 'CaseCtrl',
    fn: CaseCtrl
};
