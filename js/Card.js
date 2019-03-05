var prefix = 'https://cors-anywhere.herokuapp.com/'
var baseUrl = prefix + 'https://kodilla.com/pl/bootcamp-api';

function Card(id, name) {
    var self = this;
    this.name = name||'No name given';
    this.id = id;
    this.element = generateTemplate('card-template', { description: this.name }, 'li');
    this.element.querySelector('.card').addEventListener('click', function(event){
        event.stopPropagation();
        if (event.target.classList.contains('btn-delete')) {
            self.removeCard();
        }

        /*
        if (event.target.classList.contains('rename-card')) {
            var self = this;
            var cardName = prompt('Enter the new name of the card');
            var id = self.id;
            event.preventDefault();

            var data = new FormData();
            data.append('name', cardName);
            data.append('id' , id );
            fetch(baseUrl + '/card/'+ id, {
                method: 'PUT',
                body: data,
                headers: myHeaders
            })
            .then(function(resp){
                return resp.json();
            })
            .then(function(resp){
              self.element.querySelector('card-description').innerHTML = cardName;
            });
        }
        */
    })
}

Card.prototype = {
    removeCard: function () {
        var self = this;
        fetch(baseUrl + '/card/'+ self.id, {method: 'DELETE', headers: myHeaders})
        .then(function(resp) {
            return resp.json();
        })
        .then(function(resp) {
            self.element.parentNode.removeChild(self.element);
        })
    }
}