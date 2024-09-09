let names = ['Joe' , 'Nour' , 'Mohamed' , 'Ali'];
let ages = ['21 Years old' , '18 Years Old' , '20 Years Old' , '17 Years Old'];
let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign = "center";
function element(names , ages) {
    //elements
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let age = document.createElement("p");
    let img = document.createElement("img");
    //content

    let head = document.createTextNode(names);
    let ageContent = document.createTextNode(ages);
    img.src = "image/3-JavaScript.png"
    title.appendChild(head);
    age.appendChild(ageContent);
    //Style
    document.body.style.fontFamily = "Arial";
    document.body.style.backgroundColor = "#061007"
    card.style.width = '200px';
    card.style.background = '#173C1C';
    card.style.color = '#CBC088';
    card.style.padding = '10px';
    card.style.margin = '5px';
    card.style.display = 'inline-block';
    card.style.borderRadius = '9px';

    img.style.width = '100%';



    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card)
}

for (let i = 0; i < 4; i++) {
    element( names[i] , ages[i] );
}