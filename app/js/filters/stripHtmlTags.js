/**
 * Strip HTML tags from a string. Used when displaying content meta tags.
 * @returns {Function}
 */
function stripHtmlTags() {
    return function(text) {
        return String(text).replace(/<[^>]+>/gm, '');
    };
}

export default {
  name: 'stripHtmlTags',
  fn: stripHtmlTags
};
