import {
    removeAllChildNodes,
    Container
} from "./home.js";

function menu() {
    removeAllChildNodes(Container);
    console.log(parent.firstChild)
    let div1 = document.createElement("div");

    div1.id = 'div1e';
    div1.style.display = "block";

    let morning = document.createElement("ul")
    morning.textContent = `Morning: `;
    let noon = document.createElement('ul');
    noon.textContent = `Noon: `;
    let evening = document.createElement('ul');
    evening.textContent = `Evening: `;
    let night = document.createElement('ul');
    night.textContent = `Night: `;

    function list(context, ...args) {
        for (let i = 1; i < arguments.length; i++) {
            let li = document.createElement('li')
            li.textContent = arguments[i];
            context.appendChild(li);
        }
    }
    list(morning, `Tea and cookies`, `Coffee`, `Toast`, `Juice and bread`);
    list(noon, `Dal rice`, `Flavoured rice`, `Salad`, `Noodles`);
    list(evening, `Noodles`, `Fries and a drink`, `Pani-puri`, `Pav baji`);
    list(night, `Chapati`, `Dosa`, `Curd rice`, `Idly`);

    div1.appendChild(morning);
    div1.appendChild(noon);
    div1.appendChild(evening);
    div1.appendChild(night);

    Container.appendChild(div1);
    console.log(Container.firstChild)

}
export {
    menu
};