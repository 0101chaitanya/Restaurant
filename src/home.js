    import css from "./style.css";
    import img from "./gmaa.png";
    import {
        menu
    } from "./menu.js";
    import {
        contact
    } from "./contact.js";

    let pageLayout = document.createElement('div');
    pageLayout.id = `pageLayout`;
    let header = document.createElement('header');
    header.id = 'header';
    header.textContent = "Grandma's recipe"
    let nav = document.createElement('nav');
    nav.id = 'nav';
    let Container = document.createElement('div');
    Container.id = 'Container';
    let footer = document.createElement('footer');
    footer.id = 'footer';
    pageLayout.appendChild(header);
    pageLayout.appendChild(nav);
    pageLayout.appendChild(Container);
    pageLayout.appendChild(footer);
    document.body.appendChild(pageLayout);

    let ul = document.createElement('ul');
    let obj = {
        home: "homeContainer",
        menu: "menuContainer",
        contact: "contactContainer"
    };
    let keyArray = Object.keys(obj);
    keyArray.forEach((item, i) => {
        let x = item;
        window[`input-${i}`] = document.createElement('input');
        window[`input-${i}`].type = 'radio';
        window[`input-${i}`].name = 'radioGroup';
        window[`input-${i}`].id = `${x}`;
        window[`input-${i}`].checked = (window[`input-${i}`].id === "contact") ? true : false;
        let label = document.createElement('label');
        label.htmlFor = `${x}`;
        item = document.createElement('li');
        label.textContent = `${x}`;
        item.appendChild(window[`input-${i}`])

        item.appendChild(label);
        ul.appendChild(item);

    });

    let div1 = document.createElement("div");
    let div2 = document.createElement('div');
    nav.appendChild(ul);
    let inputList = Array.from(document.querySelectorAll('input'));
    inputList.forEach((item, i) => {
        item.addEventListener('click' || "checked", (e) => {

            switch (e.target.id) {
                case "home":
                    console.log(`hi`)
                    home();

                    break;
                case "menu":
                    console.log(`hello`)

                    menu();

                    break;
                case "contact":
                    contact();
                    console.log(`how r u`)

                    break;
            }
        })
    })

    function home() {
        removeAllChildNodes(Container);

        let div0 = document.createElement("div");

        div0.id = 'div0e';
        let p = document.createElement('p');

        let q = document.createElement('q');
        q.textContent = "These guys are the best at what they do.Eating here brings back long lost memories.There's something special in their recipe that leaves people speechless"
        let author = document.createElement('p');
        author.textContent = "- Jane Doe"
        author.id = "author";
        p.appendChild(q);
        p.appendChild(author);
        div0.appendChild(p);
        div0.style.display = "block";
        console.log(`hiy`);
        Container.appendChild(div0);

    }
    let fnArray = [home, menu, contact];

    // home();
    console.log(fnArray);
    inputList.forEach((item, i) => {
        if (item.checked) {
            console.log(item, i)
            fnArray[i].call(null);
            console.log(fnArray[i])
        }

    });

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.lastChild);
        }
        console.log(parent.firstChild);
    }
    export {
        removeAllChildNodes,
        Container
    };