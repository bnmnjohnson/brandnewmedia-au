function PostController($rootScope, $routeParams, $timeout, $location, BlogService, MetadataService, WhiteBackground, $sanitize) {
    var vm = this;

    vm.post = {};

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    // console.log($routeParams.id);

    BlogService.post($routeParams.id).then(function(post) {
        vm.post = post;
        vm.video = post.video;

        console.log(post.video)

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

PostController.$inject = ["$rootScope", "$routeParams", "$timeout", "$location", "BlogService", "MetadataService", "WhiteBackground", "$sanitize"];

export default {
    name: 'PostController',
    fn: PostController
};
