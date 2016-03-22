function HomeCtrl($rootScope, $scope, $sce, $http, $httpParamSerializer, DarkBackground, MetadataService, NewsletterService, TransformRequestAsFormPost) {

    var vm = this;


    $rootScope.bodyclass = DarkBackground.bodyClass.data;
    // vm.showNewsletter = true;

    $scope.home = {
        "title": "We're Brand New Media. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue.",
        "link": "Watch our story",
        "url": "/company"
    }

    $scope.brandNewMedia = {
        title: 'Our brand story',
        cta: 'Watch the story',
        img: 'AcidicChillyCrownofthornsstarfish.gif',
        link: '/case-story'
    }

    $scope.lunaPark = {
        title: 'Love is a rollercoaster',
        cta: 'Watch the story',
        img: 'WillingEquatorialAyeaye.gif',
        link: '/case-story'
    }

    $scope.bayer = {
        title: 'Bayer',
        cta: 'Watch the story',
        img: 'AcidicChillyCrownofthornsstarfish.gif',
        link: '/case-story'
    }

    $scope.bupa = {
        title: 'Bupa',
        cta: 'Watch the story',
        img: 'AcidicChillyCrownofthornsstarfish.gif',
        link: '/case-story'
    }

    $scope.surfingAustralia = {
        title: 'Surfing Australia',
        cta: 'Watch the story',
        img: 'AcidicChillyCrownofthornsstarfish.gif',
        link: '/case-story'
    }

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



}

HomeCtrl.$inject = ["$rootScope", "$scope", "$sce", "$http", "$httpParamSerializer", "DarkBackground", "MetadataService", "NewsletterService", "TransformRequestAsFormPost"];

export default {
    name: 'HomeCtrl',
    fn: HomeCtrl
};