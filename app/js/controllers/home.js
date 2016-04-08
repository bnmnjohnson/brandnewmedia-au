function HomeCtrl($rootScope, $scope, DarkBackground, MetadataService, NewsletterService) {

    var vm = this;


    $rootScope.bodyclass = DarkBackground.bodyClass.data;
    // vm.showNewsletter = true;

    $scope.home = {
        "title": "We're Brand New Media. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue.",
        "link": "View Our Work"
    }

    $scope.brandNewMedia = {
        title: 'Our brand story',
        cta: 'Watch the story',
        smallImg: 'ratio01.png',
        largeImg: 'ratio02.png',
        link: '/case-story'
    }

    $scope.lunaPark = {
        title: 'Love is a rollercoaster',
        cta: 'Luna Park Sydney',
        smallImg: 'ratio01.png',
        largeImg: 'ratio02.png',
        link: '/case-story'
    }

    $scope.bayer = {
        title: 'Farm Animals',
        cta: 'Bayer',
        smallImg: 'ratio01.png',
        largeImg: 'ratio02.png',
        link: '/case-story'
    }

    $scope.bupa = {
        title: 'Something about bupa',
        cta: 'Bupa',
        smallImg: 'ratio01.png',
        largeImg: 'ratio02.png',
        link: '/case-story'
    }

    $scope.surfingAustralia = {
        title: 'Our peak surfing destination for video content',
        cta: 'Surfing Australia',
        smallImg: 'ratio01.png',
        largeImg: 'ratio02.png',
        link: '/case-story'
    }

    // pass an empty object to use the defaults.
    MetadataService.setMetadata({});


    NewsletterService.watch(); // register enquire breakpoint
    NewsletterService.ismatch(function() {
        $scope.showNewsletter = true;
        // console.log('MAX 720 TRUE');
    });
    NewsletterService.notmatch(function() {
        $scope.showNewsletter = false;
        // console.log('MAX 720 FALSE');
    });


}

HomeCtrl.$inject = ["$rootScope", "$scope", "DarkBackground", "MetadataService", "NewsletterService"];

export default {
    name: 'HomeCtrl',
    fn: HomeCtrl
};
