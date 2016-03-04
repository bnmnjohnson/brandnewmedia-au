function BlogController($scope, $rootScope, WhiteBackground, BlogService, MetadataService) {

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    // Concat load more posts http://jsfiddle.net/api/post/library/pure/
    var vm = this;
    vm.postsPerPage = 1;
    vm.currentPage = 0;
    // vm.total = BlogService.total();
    BlogService.allPosts(vm.currentPage * vm.postsPerPage, vm.postsPerPage).then(function(posts) {
        vm.posts = posts;
    });

    vm.loadMore = function() {
        vm.currentPage++;
        BlogService.allPosts(vm.currentPage * vm.postsPerPage, vm.postsPerPage).then(function(posts) {
            vm.newPosts = posts;
            vm.posts = vm.posts.concat(vm.newPosts);
            console.log("hallo")
        });

    };

    vm.nextPageDisabledClass = function() {
        return vm.currentPage === vm.pageCount() - 1 ? "disabled" : "";
    };

    vm.pageCount = function() {
        return Math.ceil(vm.total / vm.postsPerPage);
    };


}

BlogController.$inject = ["$scope", "$rootScope", "WhiteBackground", "BlogService", "MetadataService"];

export default {
    name: 'BlogController',
    fn: BlogController
};
