function ellipsis() {
    return function (text, length) {
        if (text.length > length) {
            return text.substr(0, length) + "<a href='#'>...</a>";
        }
        return text;
    }
}

export default {
    name: 'ellipsis',
    fn: ellipsis
};
