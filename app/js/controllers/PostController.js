function PostController($rootScope, $routeParams, $timeout, $location, BlogService, MetadataService, WhiteBackground) {
    var vm = this;

    vm.post = {};

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    console.log($routeParams.id);

    BlogService.post($routeParams.id).then(function(post) {
        vm.post = post;

        MetadataService.setMetadata({
            title: post.title,
            description: post.excerpt
        });
    });
}

PostController.$inject = ["$rootScope", "$routeParams", "$timeout", "$location", "BlogService", "MetadataService", "WhiteBackground"];

export default {
    name: 'PostController',
    fn: PostController
};
