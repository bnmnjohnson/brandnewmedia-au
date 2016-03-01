function PeopleCtrl($rootScope, WhiteBackground) {

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;
}

PeopleCtrl.$inject = ["$rootScope", "WhiteBackground"];

export default {
    name: 'PeopleCtrl',
    fn: PeopleCtrl
};
