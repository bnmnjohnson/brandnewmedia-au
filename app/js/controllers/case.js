function CaseCtrl($scope, $rootScope, DarkBackground, angularLoad) {

    angularLoad.loadScript('js/all.js').then(function() {
        console.log("script loaded successfully")
        // Script loaded succesfully.
        // We can now start using the functions from someplugin.js
    }).catch(function() {
        // There was some error loading the script. Meh
    });
    var vm = this;

    $rootScope.bodyclass = DarkBackground.bodyClass.data;

    $scope.hero = {
        url: 'C-y70ZOSzE0',
        thumbnail: 'images/AB1PpQlRyds.jpg'
    }

    $scope.lunaimage = {
        'url': 'images/AB1PpQlRyds.jpg',
        'alt': 'Here is some alt text'
    }
    $scope.lunagif = {
        'url': 'images/ezgif-2280143617.gif',
        'alt': 'Here is some alt text'
    }

    $scope.idea = {
        title: 'The idea',
        description: 'Praesent vel felis quis velit condimentum sodales. Proin ultrices justo at tempus fringilla. Proin vestibulum luctus sem eu sagittis. Duis non quam et orci volutpat bibendum sed et metus. Sed aliquet convallis ligula id cursus. Quisque et ornare ex. Nullam vulputate tellus elit. Morbi ornare consequat mi, in consequat dui gravida vitae. Maecenas id erat in mauris mattis vulputate in nec tortor. Pellentesque bibendum nisl ut lacus egestas finibus.'
    }

    $scope.solution = {
        title: 'The solution',
        description: 'Praesent vel felis quis velit condimentum sodales. Proin ultrices justo at tempus fringilla. Proin vestibulum luctus sem eu sagittis. Duis non quam et orci volutpat bibendum sed et metus. Sed aliquet convallis ligula id cursus. Quisque et ornare ex. Nullam vulputate tellus elit. Morbi ornare consequat mi, in consequat dui gravida vitae. Maecenas id erat in mauris mattis vulputate in nec tortor. Pellentesque bibendum nisl ut lacus egestas finibus.'
    }

    $scope.results = {
        title: 'AB1PpQlRyds',
        description: 'images/AB1PpQlRyds.jpg'
    }



}

CaseCtrl.$inject = ["$scope", "$rootScope", "DarkBackground", "angularLoad"];

export default {
    name: 'CaseCtrl',
    fn: CaseCtrl
};
