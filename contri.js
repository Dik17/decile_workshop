var teamMember = [{
    name: 'Raja Harsh Vardhan Singh',
    image: 'https://github.com/rhvsingh.png'
}, {
    name: 'Raja Harsh Vardhan Singh',
    image: ''
}];

var contributors = document.querySelectorAll('.contributors')[0];

for (let i = 0; i < teamMember.length; i++) {
    let divCreate = document.createElement('div');
    divCreate.className = 'contri-card';
    divCreate.innerHTML = '<div class="contri-card-front"><img src="' + (teamMember[i].image != "" ? teamMember[i].image : 'images/default_pic.png') + '" alt="' + teamMember[i].name + '" /></div><div class="contri-card-back"><div>' + teamMember[i].name + '</div></div>';

    contributors.append(divCreate);
}