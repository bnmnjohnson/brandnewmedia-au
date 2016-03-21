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

    vm.icons = {
        logo: "M0,0v490h490V0H0z M143.1,378.1c-3,8.7-7.7,15.8-13.7,21.1c-6.1,5.4-13.5,8.1-22.1,8.1 c-13.9,0-24.7-6.3-32.1-18.6v15.2H36.2v-7.9h10.6c3,0,4.9-0.7,5.5-2.1c0.7-1.6,1.1-4.9,1.1-9.7V269c0-7.3-0.5-12-1.4-14 c-0.8-1.8-2.7-2.7-5.8-2.7h-10v-7.9h40.1v66.7c2-3.4,4.4-6.3,7.1-8.6c3.3-2.9,7.1-5.1,11.1-6.5c4.1-1.4,8.4-2.2,12.9-2.2 c9.4,0,17.3,2.8,23.3,8.4c6,5.5,10.4,12.7,13.1,21.2c2.6,8.5,4,17.4,4,26.5C147.7,360,146.1,369.5,143.1,378.1z M434.5,323.9v56 c0,4,0,7,0.1,8.8c0.1,1.8,0.3,3.3,0.8,4.5c0.4,1.1,0.9,1.8,1.6,2.2c0.5,0.3,1.5,0.6,3.5,0.6h10.3v7.9h-55.4v-7.9h8.9 c3.3,0,5.3-0.9,6.1-2.7c0.9-2.1,1.4-6.5,1.4-13.3v-47.8c0-6.4-0.5-11.7-1.6-15.6c-1-3.7-2.8-6.5-5.3-8.3c-2.5-1.8-6.2-2.7-10.9-2.7 c-7.9,0-13.5,3.2-17.3,9.8c-3.8,6.7-5.7,15.1-5.7,25.2v35c0,6.1,0.2,10.8,0.6,13.8c0.5,3.6,1.2,5,1.7,5.5c0.7,0.8,1.9,1.1,3.5,1.1 h10.6v7.9h-54.7v-7.9h10.2c2.2,0,3.5-0.9,4.2-3c0.7-2.3,1.1-7.2,1.1-14.6v-45.6c0-4.5-0.1-8.2-0.3-11c-0.2-2.7-0.9-5.4-2-8 c-1.1-2.5-2.8-4.5-5-6c-2.3-1.5-5.4-2.2-9.4-2.2c-16.1,0-23.9,12.9-23.9,39.6v39c0,4.8,0.4,8.1,1.3,9.7c0.8,1.5,2.5,2.2,5.2,2.2h9.8 v7.9h-52.1h-4.2h-51.1v-7.9h8.9c3.3,0,5.3-0.9,6.1-2.7c0.9-2.1,1.4-6.5,1.4-13.3v-49.7c0-4.4-0.6-8.5-1.7-12.3 c-1.1-3.7-3.1-6.7-5.9-9c-2.7-2.2-6.5-3.4-11.2-3.4c-16.1,0-23.9,12.9-23.9,39.6v39c0,4.8,0.4,8.1,1.3,9.7c0.8,1.5,2.5,2.2,5.2,2.2 h9.8v7.9h-56.3v-7.9h10.6c3,0,4.9-0.7,5.5-2.1c0.7-1.6,1.1-4.9,1.1-9.7v-57.9c0-9-0.4-14.9-1.2-17.6c-0.7-2.4-2.2-3.5-4.6-3.5h-11.4 v-7.9h10.6c13.5,0,22.6-1.1,27.1-3.3l1.4-0.7v18c8.5-11.6,19.7-17.4,33.5-17.4c10.4,0,18.6,2.7,24.4,8.1c5.8,5.4,8.7,13.4,8.7,23.8 v54.1c0,4,0,7,0.1,8.8c0.1,1.8,0.3,3.3,0.8,4.5c0.4,1.1,0.9,1.8,1.6,2.2c0.5,0.3,1.5,0.6,3.5,0.6h6h4.2h6.4c3,0,4.9-0.7,5.5-2.1 c0.7-1.6,1.1-4.9,1.1-9.7v-57.9c0-9-0.4-14.9-1.2-17.6c-0.7-2.4-2.2-3.5-4.6-3.5h-11.4v-7.9H278c13.5,0,22.6-1.1,27.1-3.3l1.4-0.7 v18c8.5-11.6,19.7-17.4,33.5-17.4c14.6,0,24.3,6.3,28.9,18.7c4.1-6.7,8.7-11.5,13.6-14.3c2.7-1.5,6-2.7,9.6-3.4 c-3.4-5.5-5.3-12-5.3-19c0-20.2,16.4-36.5,36.5-36.5c20.2,0,36.5,16.4,36.5,36.5c0,17-11.6,31.3-27.4,35.4 C433.8,314.9,434.5,319.1,434.5,323.9z M117.7,317c3.1,7.9,4.6,19,4.6,32.9c0,6.8-0.3,13-0.8,18.5c-0.5,5.5-1.5,10.3-2.9,14.3 c-1.4,3.9-3.5,7.1-6.2,9.4c-2.6,2.2-6.1,3.4-10.4,3.4c-8.4,0-14.7-3.7-19.3-11.3c-4.6-7.7-7-19.2-7-34.3c0-15.6,2.3-27,6.9-34 c4.5-7,10.9-10.4,19.4-10.4C109.6,305.5,114.7,309.3,117.7,317z"
    };



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