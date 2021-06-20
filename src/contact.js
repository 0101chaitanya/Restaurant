import {
    removeAllChildNodes,
    Container
} from "./home.js";

function contact() {
    removeAllChildNodes(Container);
    console.log(parent.firstChild)
    let div2 = document.createElement("div");
    div2.id = 'div2e';
    div2.style.display = "block";
    let map = document.createElement("div");
    let iframe = document.createElement("iframe");
    iframe.style.width = "425"
    iframe.style.height = "350"
    iframe.style.frameborder = "0"
    iframe.style.scrolling = "no"
    iframe.style.marginHeight = "0"
    iframe.style.marginWidth = "0"
    iframe.src = "https://www.openstreetmap.org/export/embed.html?bbox=80.58094024658205%2C16.47765398900727%2C80.67672729492189%2C16.525385383979&amp;layer=mapnik";
    iframe.style.border = " 1px solid black";
    let br = document.createElement('br');
    let small = document.createElement('small');
    let a = document.createElement('a');
    a.href = ("https://www.openstreetmap.org/#map=14/16.5015/80.6288");
    a.textContent = " View Larger Map ";
    small.appendChild(a);
    map.appendChild(iframe);
    map.appendChild(br);
    map.appendChild(small);
    let connect = document.createElement("div");
    connect.id = 'connect';
    let p = document.createElement('p');
    p.textContent = `Hi reach us at 0101chaitanya@gmail.com for queries contact 99930244xx`
    connect.appendChild(p);

    div2.appendChild(map);
    div2.appendChild(connect);
    Container.appendChild(div2);
}
export {
    contact
};
/* <
iframe 

 > < /iframe><br/ > < small > < a href =  >< /a></small > */