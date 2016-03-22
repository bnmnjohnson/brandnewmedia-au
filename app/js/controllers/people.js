function PeopleCtrl($rootScope, $scope, WhiteBackground) {

    const vm = this;
    $scope.showNewsletter= false;

    $scope.people = {
        "title" : "We're a team of storytellers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue."
    }

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    // Our people data
    vm.team = [
        { name: 'Natalie Johnson', title: 'UX Designer', image: 'AMELIA_PATERSON_BNM_WEB_PORTRAIT-2.png' },
        { name:'Scott Bradley-Pearce', title: 'All-around superhero', image: 'CLAUDIA_NORTH_BNM_WEB_PORTRAIT-2.png' },
        { name:'Aron Du-Shane', title: 'All-around superhero', image: 'PENNY_CONSTANTI_BNM_WEB_PORTRAIT-2.png' },
        { name:'Aron Du-Shane', title: 'All-around superhero', image: 'RACHEL_MOUJALLI_BNM_WEB_PORTRAIT-2.png' },
        { name:'Aron Du-Shane', title: 'All-around superhero', image: 'SCOTT_BRADLEY-PEARCE_BNM_WEB_PORTRAIT-2.png' },
        { name:'Aron Du-Shane', title: 'All-around superhero', image: 'CHRIS_AUSTIN_BNM_WEB_PORTRAIT-2.png' }

    ];

    // Our search function

}

PeopleCtrl.$inject = ["$rootScope", "$scope", "WhiteBackground"];

export default {
    name: 'PeopleCtrl',
    fn: PeopleCtrl
};
