function PeopleCtrl($rootScope, $scope, WhiteBackground) {

    const vm = this;

    $scope.people = {
        "title" : "We're a team of storytellers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue."
    }

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    // Our people data
    vm.team = [
        { name: 'Tom Garton', title: 'Visual Designer', image: 'images/people/TOM_GARTON_BNM_WEB_PORTRAIT-2.png' },
        { name: 'Natalie Johnson', title: 'UX Designer', image: 'images/people/TOM_GARTON_BNM_WEB_PORTRAIT-2.png' },
        { name:'Scott Bradley-Pearce', title: 'All-around superhero', image: 'images/people/TOM_GARTON_BNM_WEB_PORTRAIT-2.png' },
        { name:'Claudia North', title: 'All-around superhero', image: 'images/people/TOM_GARTON_BNM_WEB_PORTRAIT-2.png' },
        { name:'Aron Du-Shane', title: 'All-around superhero', image: 'images/people/TOM_GARTON_BNM_WEB_PORTRAIT-2.png' },
    ];

    // Our search function

}

PeopleCtrl.$inject = ["$rootScope", "$scope", "WhiteBackground"];

export default {
    name: 'PeopleCtrl',
    fn: PeopleCtrl
};
