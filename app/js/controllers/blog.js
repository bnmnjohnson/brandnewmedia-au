function BlogController($scope, $location, $routeParams, $rootScope, WhiteBackground, BlogService, MetadataService) {


    $rootScope.bodyclass = WhiteBackground.bodyClass.data;

    $scope.numLimit = 3;
    $scope.labs = {
        title: 'Welcome to our labs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }

    MetadataService.setMetadata({
        title: 'Brand New Media | Labs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue.'
    });

    // Concat load more posts http://jsfiddle.net/api/post/library/pure/
    var vm = this;
    vm.postsPerPage = 4;
    vm.currentPage = 0;
    vm.posts = [];

    $scope.excerpt = "eg hello l";

    // vm.total = BlogService.total();

    console.log($routeParams.tag);
    console.log($routeParams.author);


    if (typeof $routeParams.tag !== 'undefined') {
        // If we are searching all posts by by tag

        BlogService.allPostsByTag(vm.currentPage * vm.postsPerPage, vm.postsPerPage, $routeParams.tag).then(function(posts) {
            vm.posts = posts;
        });

        vm.loadMore = function() {
            vm.currentPage++;
            BlogService.allPostsByTag(vm.currentPage * vm.postsPerPage, vm.postsPerPage, $routeParams.tag).then(function(posts) {
                vm.newPosts = posts;
                vm.posts = vm.posts.concat(vm.newPosts);

            });

        };

        vm.subtitle = 'tagged with "' + $routeParams.tag + '"';

    } else if (typeof $routeParams.author !== 'undefined') {
        // If we are searching all tags by author
        BlogService.allPostsByAuthor(vm.currentPage * vm.postsPerPage, vm.postsPerPage, $routeParams.author).then(function(posts) {
            vm.posts = posts;
        });

        vm.loadMore = function() {
            vm.currentPage++;
            BlogService.allPostsByAuthor(vm.currentPage * vm.postsPerPage, vm.postsPerPage, $routeParams.author).then(function(posts) {
                vm.newPosts = posts;
                vm.posts = vm.posts.concat(vm.newPosts);

            });

        };

        vm.subtitle = 'written by "' + $routeParams.author + '"';

    } else if (typeof $routeParams.searchTerm !== 'undefined') {
        // If we are searching
        BlogService.allPostsBySearchTerm(vm.currentPage * vm.postsPerPage, vm.postsPerPage, $routeParams.searchTerm).then(function(posts) {
            vm.posts = posts;

        });

        vm.loadMore = function() {
            vm.currentPage++;
            BlogService.allPostsBySearchTerm(vm.currentPage * vm.postsPerPage, vm.postsPerPage, $routeParams.searchTerm).then(function(posts) {
                vm.newPosts = posts;
                vm.posts = vm.posts.concat(vm.newPosts);

            });

        };

        vm.subtitle = 'showing results for "' + $routeParams.searchTerm + '"';

    } else {
        BlogService.allPosts(vm.currentPage * vm.postsPerPage, vm.postsPerPage).then(function(posts) {
            vm.posts = posts;
        });

        vm.loadMore = function() {
            vm.currentPage++;
            BlogService.allPosts(vm.currentPage * vm.postsPerPage, vm.postsPerPage).then(function(posts) {
                vm.newPosts = posts;
                vm.posts = vm.posts.concat(vm.newPosts);

            });

        };
    }

    vm.nextPageDisabledClass = function() {
        return vm.currentPage >= vm.pageCount() - 1 ? "disabled" : "";
    };

    vm.pageCount = function() {
        return Math.ceil(vm.total / vm.postsPerPage);
        console.log(vm.total);
    };

    vm.search = function(term) {
        $location.path('/search/' + vm.searchTerm);
    };


}

BlogController.$inject = ["$scope", "$location", "$routeParams", "$rootScope", "WhiteBackground", "BlogService", "MetadataService"];

export default {
    name: 'BlogController',
    fn: BlogController
};
