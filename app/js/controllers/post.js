function PostCtrl($rootScope, WhiteBackground, contentful, PostService) {


    $rootScope.bodyclass = WhiteBackground.bodyClass.data;
    $rootScope.postId = '5b5cUzLQk8eGMmScSyyaOw';

}

PostCtrl.$inject = ["$rootScope", "WhiteBackground", "contentful", "PostService"];

export default {
    name: 'PostCtrl',
    fn: PostCtrl
};
