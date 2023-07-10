
const contents = document.getElementById('contents');
const midletter = document.getElementById('mid');
const whiteletter = document.getElementById('servie-a');
const more = document.getElementById('more');

const servicesbtn = document.getElementById('services');
const worksbtn = document.getElementById('works');
const blogsbtn = document.getElementById('blog');


function servies() {
    const topic = document.createElement('h3');
    const engDescription = document.createElement('p');
    const amaharicDescription = document.createElement('p');
    

    topic.innerHTML = "-Introduction.<br>"

    engDescription.innerHTML = "Developer and Junior IT personnel<br> Based in Addis Ababa.";
    engDescription.style.fontSize = '30px';
    engDescription.style.marginRight = "50px";

     amaharicDescription.innerHTML = "እኔ የሶፍትዌር ገንቢ እና ጁኒየር የአይቲ ሰራተኛ ነኝ<br>እና መቀመጫዬ አዲስ አበባ ነው።"
     amaharicDescription.style.fontSize = "20px";
     amaharicDescription.style.marginRight = "50px";


    midletter.style.textDecoration = 'underline';
    midletter.style.textDecorationColor = 'yellow';
    whiteletter.style.color = "white";
    more.style.opacity = "1";

    contents.appendChild(topic);
    contents.appendChild(engDescription);
    contents.appendChild(amaharicDescription);
    contents.appendChild(more);
     servicesbtn.disabled = true;
}




servicesbtn.addEventListener('click', servies);