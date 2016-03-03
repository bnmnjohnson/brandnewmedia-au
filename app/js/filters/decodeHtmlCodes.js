function decodeHtmlCodes() {
    return function(input) {
        if (!input) {
            return "";
        }
        return input.replace(/&#(\d+);/g, function(m, n) {
            return String.fromCharCode(n);
        });
    };
}

export default {
    name: 'decodeHtmlCodes',
    fn: decodeHtmlCodes
};
