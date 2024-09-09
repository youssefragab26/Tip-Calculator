let names = ['HTML', 'CSS', 'JavaScript', 'Git','Python'];
let ages = ['-------------', '-------------', '-------------', '-------------','-------------'];
let images = ['HTML (1).png', 'HTML (2).png', 'HTML (3).png', 'HTML (4).png', 'HTML (5).png']; // أضف روابط الصور هنا

let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign = "center";

function element(name, age, imageSrc) {
    //elements
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let ageElem = document.createElement("p");
    let img = document.createElement("img");

    //content
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(age);
    img.src = imageSrc;

    title.appendChild(head);
    ageElem.appendChild(ageContent);

    //Style
    document.body.style.fontFamily = "Arial";
    document.body.style.backgroundColor = "#061007";
    card.style.width = '200px';
    card.style.background = '#ccb79f';
    card.style.color = '#303030';
    card.style.padding = '10px';
    card.style.margin = '5px';
    card.style.display = 'inline-block';
    card.style.border = '3px solid #303030'
    card.style.borderRadius = '9px';

    img.style.width = '100%';

    card.appendChild(title);
    card.appendChild(ageElem);
    card.appendChild(img);
    container.appendChild(card);
}

for (let i = 0; i < names.length; i++) {
    element(names[i], ages[i], images[i]);
}