function PostController($rootScope, $scope, $routeParams, $timeout, $location, BlogService, MetadataService, WhiteBackground, $sanitize) {
    var vm = this;

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    $scope.showNewsletter = false;

    BlogService.post($routeParams.id).then(function(post) {
        vm.post = post;

        var video = post.video;
        //vm.video = post.video;

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
            shareButtons: 'Facebook,Twitter,Linkedin,googleplus,Email,Print',
            iconsOnly: 'true',
            userAction: act,
            shareButtons: [{ // Facebook
                    provider: 'facebook',
                    tooltip: 'Recommend this on Facebook',
                    iconImgUp: 'images/icons/social-icons-black-facebook.png'
                }, { // Twitter
                    provider: 'Twitter',
                    tooltip: 'Tweet this',
                    iconImgUp: 'images/icons/social-icons-black-twitter.png'
                }, { // Linkedin
                    provider: 'Linkedin',
                    tooltip: 'Twitter',
                    iconImgUp: 'images/icons/social-icons-black-linkedin.png'
                }, { // Google+
                    provider: 'googleplus',
                    tooltip: 'Share this on Google+',
                    iconImgUp: 'images/icons/social-icons-black-google.png'
                }, { // Email
                    provider: 'Email',
                    tooltip: 'Email this',
                    iconImgUp: 'images/icons/social-icons-black-email.png'
                }, { // Print
                    provider: 'Print',
                    tooltip: 'Print this page',
                    iconImgUp: 'images/icons/social-icons-black-print.png'
                }

            ],
            buttonWithCountTemplate: '<div class="gigya-icon" style="padding-right: 20px; padding-top: 10px; height: 26px;" onclick="$onClick"><img src="$iconImg" height="16"/></div>',
            buttonTemplate: '<div class="gigya-icon" style="padding-right: 20px; padding-top: 10px; height: 26px;" onclick="$onClick"><img src="$iconImg" height="16"/></div>',
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
