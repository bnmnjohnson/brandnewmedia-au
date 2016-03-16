function PostController($rootScope, $scope, $routeParams, $timeout, $location, BlogService, MetadataService, WhiteBackground, $sanitize) {
    var vm = this;

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    // console.log($routeParams.id);
    $scope.showNewsletter= false;

    BlogService.post($routeParams.id).then(function(post) {
        // console.log("getting post");
        console.log(post)
        vm.post = post;
        // vm.video = post.video;

        // if (vm.video != null) {

        var video = post.video;

        // for (var prop in video) {
        //     console.log("Object1: " + prop);
        // }

        if (video.hasOwnProperty('featured_video')) {
            // alert("has own video");
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




        // vm.video = (post.video).toString();
        // vm.videoUrl = vm.video.split(/"/)[3];
        // console.log(vm.videoUrl);

        // vm.videoTitle = vm.video.split(/"/)[17];
        // console.log(vm.videoTitle);

        // vm.videoAuthor = vm.video.split(/"/)[21];
        // console.log(vm.videoAuthor);

        // gets description
        // vm.thumbnailUrl = vm.video.split(/"/)[27];
        // console.log(vm.thumbnailUrl);

        MetadataService.setMetadata({
            title: post.title,
            description: post.excerpt
        });
    });
}

PostController.$inject = ["$rootScope", "$scope", "$routeParams", "$timeout", "$location", "BlogService", "MetadataService", "WhiteBackground", "$sanitize"];

export default {
    name: 'PostController',
    fn: PostController
};
