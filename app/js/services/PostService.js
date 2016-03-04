function PostService($rootScope, contentful) {
    'ngInject';

    // this.getEntry = function(entryId) {
    //     console.log("loading article...")
    //     contentful
    //         .entry(entryId)
    //         .then(

    //             function(entry) {
    //                 var entry = entry.data;
    //                 // $rootScope.entry = entry;
    //                 console.log('Entry:', entry)
    //             },
    //             function(entry) {
    //                 console.log('Oops, error ' + entry.status);
    //             }
    //         );
    // };
}

export default {
    name: 'PostService',
    fn: PostService
};
