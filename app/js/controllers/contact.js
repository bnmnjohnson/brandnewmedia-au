function ContactCtrl($rootScope, $scope, WhiteBackground) {

 
    $rootScope.bodyclass = WhiteBackground.bodyClass.data;
    $scope.contact = {
        "title": "Let's work together. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue."
    }
}

ContactCtrl.$inject = ["$rootScope", "$scope", "WhiteBackground"];

export default {
    name: 'ContactCtrl',
    fn: ContactCtrl
};
