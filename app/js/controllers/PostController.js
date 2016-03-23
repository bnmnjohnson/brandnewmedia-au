function PostController($rootScope, $scope, $routeParams, $timeout, $location, BlogService, MetadataService, WhiteBackground, $sanitize) {
    var vm = this;

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    $scope.showNewsletter = false;

    BlogService.post($routeParams.id).then(function(post) {
        vm.post = post;

        var video = post.video;


        if (video.hasOwnProperty('featured_video')) {
            vm.video = post.video.featured_video[0];
            $scope.hero = {
                'url': vm.video,
                'thumbnail': vm.post.featured_image.source
            }

        } else {
            $scope.hero = {
                'thumbnail': vm.post.featured_image.source
            }
        }

        var title = post.title;
        var description = post.excerpt;

        MetadataService.setMetadata({
            title: 'Brand New Media | ' + title,
            description: description
        });

        var act = new gigya.socialize.UserAction();
        act.setTitle(title);
        act.setDescription(description);
        act.setLinkBack("http://brandnewmedia.com.au/our-flickbook/lifestyle-focused-digital-summit-proves-successful-acquiring-global-audience");
        act.addMediaItem({ type: 'image', src: 'http://demo.gigya.com/images/recipe2.png', href: 'http://demo.gigya.com/recipe2.php' });
        var showShareBarUI_params = {
            containerID: 'componentDiv',
            shareButtons: 'Facebook,Twitter,googleplus,Email,Print',
            iconsOnly: 'true',
            userAction: act,
            // shareButtons:
            // [
            //     { // General Share Button
            //         provider:'share',
            //         tooltip:'General Share Button',
            //     },
            //     { // Google+
            //         provider:'google',
            //         tooltip:'Recommend this on Google',
            //         iconImgUp:'www.exampleImages.com/googleShare.ico'
            //     },
            //     { // Facebook
            //         provider:'facebook',
            //         tooltip:'Recommend this on Facebook',
            //         iconImgUp:'http://simpleicon.com/wp-content/uploads/facebook.svg'
            //     },
            // ],
            buttonWithCountTemplate: '<div style="padding: 5px; background-color: #eee; border: 2px #ddf solid;" onclick="$onClick"><img src="$iconImg"/></div>',
            buttonTemplate: '<div style="padding: 5px; background-color: #eee; border: 2px #ddf solid;" onclick="$onClick"><img src="$iconImg"/></div>',
            noButtonBorders: true

        }
        gigya.socialize.showShareBarUI(showShareBarUI_params);
    });
}

PostController.$inject = ["$rootScope", "$scope", "$routeParams", "$timeout", "$location", "BlogService", "MetadataService", "WhiteBackground", "$sanitize"];

export default {
    name: 'PostController',
    fn: PostController
};