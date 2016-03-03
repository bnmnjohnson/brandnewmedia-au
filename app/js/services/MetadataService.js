function MetadataService() {

    var title,
        description,
        defaultTitle = 'Brand New Media',
        defaultDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue.';

    this.setMetadata = function(metadata) {
        title = metadata.title ? metadata.title : defaultTitle;
        description = metadata.description ? metadata.description : defaultDescription;
    };

    this.getMetadata = function() {
        return {
            title: title,
            description: description
        };
    };
}


export default {
    name: 'MetadataService',
    fn: MetadataService
};
