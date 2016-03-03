function BlogController($scope, $rootScope, WhiteBackground, BlogService, MetadataService) {

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    var vm = this;
    var apiCallFunction = BlogService.allPosts();

    vm.posts = [];
    vm.loaded = false;
    vm.subtitle = 'Here is a subtitle';

    MetadataService.setMetadata({
        title: 'Labs',
        description: 'A collection of articles on some topics.'
    });


    apiCallFunction.then(function(posts) {
        vm.posts = posts;
        console.log(posts);
        vm.loaded = true;
    });

}

BlogController.$inject = ["$scope", "$rootScope", "WhiteBackground", "BlogService", "MetadataService"];

export default {
    name: 'BlogController',
    fn: BlogController
};
