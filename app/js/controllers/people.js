function PeopleCtrl($rootScope, $scope, WhiteBackground) {

    const vm = this;

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    // Our people data
    vm.team = [
        { name: 'Tom Garton', title: 'Visual Designer', image: 'images/angular.png' },
        { name: 'Natalie Johnson', title: 'UX Designer', image: 'images/angular.png' },
        { name:'Scott Bradley-Pearce', title: 'All-around superhero', image: 'images/angular.png' }
    ];

    // Our search function

}

PeopleCtrl.$inject = ["$rootScope", "$scope", "WhiteBackground"];

export default {
    name: 'PeopleCtrl',
    fn: PeopleCtrl
};
