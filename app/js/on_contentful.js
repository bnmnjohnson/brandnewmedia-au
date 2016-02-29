
function OnContentful($contentfulProvider) {
    'ngInject';
    $contentfulProvider.setOptions({
        space: 'cfexampleapi',
        accessToken: 'b4c0n73n7fu1'
    });
}

export default OnContentful;
