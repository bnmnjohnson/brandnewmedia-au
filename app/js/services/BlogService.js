/**
 * The BlogService retrieves and processes the json response from WP-API into a form that Angular can use.
 *
 * @param $http
 * @param $sce
 * @param config
 * @returns {{allPosts: allPosts, allPostsByTag: allPostsByTag, allPostsBySearchTerm: allPostsBySearchTerm, featuredPosts: featuredPosts, post: post}}
 * @constructor
 */
function BlogService($http, $sce) {
    'ngInject';

    var config = {
        'ROOT_URL': 'http://localhost:3000/',
        'API_URL': 'http://localhost:8888/wp-json/'
    };


    function allPosts(offset, limit) {
        return getData('posts?filter[category_name]=post&filter[posts_per_page]=' + limit + '&filter[offset]=' + offset);
    }

    function allPostsByTag(offset, limit, tag) {
        return getData('posts?filter[category_name]=post&filter[posts_per_page]=' + limit + '&filter[tag]=' + tag + '&filter[offset]=' + offset);
    }

    function allPostsByAuthor(offset, limit, author) {
        return getData('posts?filter[category_name]=post&filter[posts_per_page]=' + limit + '&filter[author_name]=' + author + '&filter[offset]=' + offset);
    }

    function allPostsBySearchTerm(searchTerm) {
        return getData('posts?filter[category_name]=post&filter[s]=' + searchTerm);
    }

    function featuredPosts() {
        return getData('posts?filter[category_name]=post%2Bfeatured');
    }

    function post(id) {
        return getData('posts/' + id);
    }

    function getData(url) {
        return $http
            .get(config.API_URL + url, { cache: true })
            .then(function(response) {
                if (response.data instanceof Array) {
                    var items = response.data.map(function(item) {
                        // console.log("getting item...")
                        // console.log(item)
                        return decorateResult(item);
                    });
                    return items;
                } else {
                    return decorateResult(response.data);
                }
            });
    }

    /**
     * Decorate a post to make it play nice with AngularJS
     * @param result
     * @returns {*}
     */
    function decorateResult(result) {
        result.excerpt = $sce.trustAsHtml(result.excerpt);
        result.date = Date.parse(result.date);
        result.content = $sce.trustAsHtml(result.content);
        result.video = (result.post_meta.featured_video._fvp_video);
        // result.author = (result.author.name).toString();
        // console.log("Author: " + result.author);
        // console.log(result);
        return result;
    }

    return {
        allPosts: allPosts,
        allPostsByTag: allPostsByTag,
        allPostsByAuthor: allPostsByAuthor,
        allPostsBySearchTerm: allPostsBySearchTerm,
        featuredPosts: featuredPosts,
        post: post
    };
}


export default {
    name: 'BlogService',
    fn: BlogService
};
