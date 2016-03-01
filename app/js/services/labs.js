function LabsService(contentful, $rootScope) {
    'ngInject';




    contentful
        .entries('limit=2')
        .then(

            // Success handler
            function(response) {
                var entries = response.data;
                console.log(entries);
            },

            // Error handler
            function(response) {
                console.log('Oops, error ' + response.status);
            }
        );

}

export default {
    name: 'LabsService',
    fn: LabsService
};
