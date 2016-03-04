function featuredVideoUrl() {
    return function(text) {
        return String(text).replace(/<[^>]+>/gm, '');
    };
}

export default {
    name: 'featuredVideoUrl',
    fn: featuredVideoUrl
};
