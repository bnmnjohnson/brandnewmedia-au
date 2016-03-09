function CaseCtrl($scope, $rootScope, DarkBackground) {
    var vm = this;

    $rootScope.bodyclass = DarkBackground.bodyClass.data;

    $scope.hero = { 
        url: 'AB1PpQlRyds', 
        thumbnail: 'images/AB1PpQlRyds.jpg' 
    }

    $scope.idea = { 
        title: 'The idea', 
        description: 'Praesent vel felis quis velit condimentum sodales. Proin ultrices justo at tempus fringilla. Proin vestibulum luctus sem eu sagittis. Duis non quam et orci volutpat bibendum sed et metus. Sed aliquet convallis ligula id cursus. Quisque et ornare ex. Nullam vulputate tellus elit. Morbi ornare consequat mi, in consequat dui gravida vitae. Maecenas id erat in mauris mattis vulputate in nec tortor. Pellentesque bibendum nisl ut lacus egestas finibus.' 
    }

    $scope.solution = { 
        title: 'AB1PpQlRyds', 
        description: 'images/AB1PpQlRyds.jpg' 
    }

    $scope.results = { 
        title: 'AB1PpQlRyds', 
        description: 'images/AB1PpQlRyds.jpg' 
    }



}

CaseCtrl.$inject = ["$scope", "$rootScope", "DarkBackground"];

export default {
    name: 'CaseCtrl',
    fn: CaseCtrl
};
