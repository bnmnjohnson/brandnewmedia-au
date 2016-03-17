function HomeCtrl($rootScope, $scope, $sce, DarkBackground, MetadataService, NewsletterService) {

    var vm = this;


    $rootScope.bodyclass = DarkBackground.bodyClass.data;
    // vm.showNewsletter = true;

    // pass an empty object to use the defaults.
    MetadataService.setMetadata({});


    NewsletterService.watch(); // register enquire breakpoint
    NewsletterService.ismatch(function() {
        $scope.showNewsletter = true;
        console.log('MAX 720 TRUE');
    });
    NewsletterService.notmatch(function() {
        $scope.showNewsletter = false;
        console.log('MAX 720 FALSE');
    });

    $scope.formData = {};

    $scope.processForm = function() {
        $http({
            method: 'POST',
            url: $sce.trustAsResourceUrl("http://brandnewmedia1.createsend.com/t/j/s/nuyuri/"),
            data: $.param($scope.formData),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(response) {
            console.log(response);
            console.log("sending data....")
                // this callback will be called asynchronously
                // when the response is available
        });

    }


}

HomeCtrl.$inject = ["$rootScope", "$scope", "$sce", "DarkBackground", "MetadataService", "NewsletterService"];

export default {
    name: 'HomeCtrl',
    fn: HomeCtrl
};
