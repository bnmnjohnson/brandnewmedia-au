function PeopleCtrl($rootScope, $scope, WhiteBackground) {

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    // Our people data
    $scope.people = [
    {firstname: 'Tom', lastname:'Garton', title: 'Visual Designer', image: 'images/angular.png'}, 
    {firstname: 'Natalie', lastname: 'Johnson', title: 'UX Designer',image: 'images/angular.png'}, 
    {firstname: 'Scott', lastname: 'Bradley-Pearce', title: 'All-around superhero', image: 'images/angular.png'}
    ];

    // Our search function
    
}

PeopleCtrl.$inject = ["$rootScope", "$scope", "WhiteBackground"];

export default {
    name: 'PeopleCtrl',
    fn: PeopleCtrl
};
