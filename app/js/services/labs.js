function LabsService(contentful, $rootScope, $routeParams) {
    'ngInject';

    var routeId = $routeParams.labId;
    console.log(routeId);

    this.getEntry = function(routeId) {
        contentful
            .entries({ 'fields.url[match]': 'spotify' }, {'limit': 1})
            .then(

                // Success handler
                function(response) {
                    var entries = response.data;
                    console.log("got entries here");
                    $rootScope.entries = entries;
                    //return entries;
                    console.log(entries)
                },

                // Error handler
                function(response) {
                    console.log('Oops, error ' + response.status);
                }
            );
    };


}

export default {
    name: 'LabsService',
    fn: LabsService
};
