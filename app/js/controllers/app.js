function AppCtrl($rootScope, $sce, $scope, $http, $httpParamSerializer, $routeParams, $window, $location, $timeout, MetadataService, DarkBackground, NewsletterService) {

    var vm = this;
    // $scope.submitted = false;


    // $scope.formData = {};


    $rootScope.bodyclass = DarkBackground.bodyClass.data;


    //vm.showNewsletter = false;

    $(function() {
        $('#subForm').submit(function(e) {
            e.preventDefault();
            $.getJSON(
                this.action + "?callback=?",
                $(this).serialize(),
                function(data) {
                    if (data.Status === 400) {
                        alert("Error: " + data.Message);
                        $("#signup-message").hide();
                        $('#error-message').show();
                        

                    } else { // 200
                        // alert("Success: " + data.Message);

                        document.getElementById("subForm").reset();
                        $("#signup-message").hide();
                        $('#submitted-message').show();
                        
                    }
                });
        });
    });




    $rootScope.$watchCollection(function() {
        return MetadataService.getMetadata();
    }, function(meta) {
        if (typeof meta.title !== 'undefined') {
            $rootScope.meta = meta;
            $timeout(function() {
                // push event to google analytics. This is done in a $timeout
                // so the current $digest loop has a chance to actually update the
                // HTML with the correct page title etc. Check for localhost to prevent
                // dev sessions from being recorded in analytics.
                // if ($location.host() !== 'localhost') {
                //     $window.ga('send', 'pageview', { page: $location.path() });
                // }
            });
        }
    });
}

AppCtrl.$inject = ["$rootScope", "$scope", "$sce", "$http", "$httpParamSerializer", "$routeParams", "$window", "$location", "$timeout", "MetadataService", "DarkBackground", "NewsletterService"];

export default {
    name: 'AppCtrl',
    fn: AppCtrl
};
