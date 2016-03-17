function NewsletterDirective() {

    return {
        restrict: 'EA',
        templateUrl: 'directives/newsletter.html'
    }
}

export default {
    name: 'newsletterDirective',
    fn: NewsletterDirective
};
