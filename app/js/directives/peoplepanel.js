function PeoplePanel() {

    return {
        restrict: 'E',
        template: '<div class="people-person"> <div class="people-overlay"> <h1> {{person.name}} </h1> <p> {{person.title}} </p> </div> <div class="people-media"> <img src="images/people/{{person.image}}" alt="{{person.name}}"> </div></div>',
        scope: {
            person: '=personDetails'
        }
    }
}

export default {
    name: 'peoplePanel',
    fn: PeoplePanel
};
