let nav_options = document.getElementById("nav_options");

let ul = document.createElement("ul");
ul.classList.add("horizontal")

for (let index = 1; index <= 3; index++) {
    let li = document.createElement("li");
    
    let a = document.createElement("a");
    a.href = "#";
    a.innerText = "Opción " + index;

    let img = document.createElement("img");
    img.src = "../Img/_7th-March.jpg";
    img.width = "20";
    img.height = "20";

    let subUl = document.createElement("ul");
    subUl.classList.add("vertical");

    for (let j = 1; j <= 3; j++) {
        let subLi = document.createElement("li");

        let subA = document.createElement("a");
        subA.innerText = "Opción " + index + "." + j;

        subLi.appendChild(subA);
        subUl.appendChild(subLi);
    }
    
    a.appendChild(img);
    li.appendChild(a);
    li.appendChild(subUl);
    ul.appendChild(li);
}

nav_options.appendChild(ul);