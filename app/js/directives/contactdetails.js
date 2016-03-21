function ContactDetails() {

    return {
        restrict: 'E',
        template: '<div class="extended-address heading-bold"> {{detail.name}}</div><div class="street-address"> {{detail.address}}</div><div class="suburb"> {{detail.suburb}}</div><div class="locality"> {{detail.city}}&nbsp;{{detail.state}}&nbsp;<span class="postal-code">{{detail.postcode}}</span></div><div class="tel"> Tel: {{detail.phone}}</div><div class="tel"> {{detail.email}}</div>',
        scope: {
            detail: '=contactDetails'
        }
    }
}

export default {
    name: 'contactDetails',
    fn: ContactDetails
};
