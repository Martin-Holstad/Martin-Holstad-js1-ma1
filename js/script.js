
//Question 1

const cat ={
    complain: "Meow",
};

console.log(cat.complain);

//Question 2

const headerThree = document.querySelector("h3");

headerThree.innerHTML = "Updated heading";

//Question 3

headerThree.style.fontSize = "2em";

//Question 4

headerThree.className = "subheading";

//Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7


const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function animals(list) {
    for(let i = 0; i < list.length; i++){
        console.log(cats[i].name);
    }
}

animals(cats);

//Question 8

function createCats(cats) {

    let html = "";

    for(let i = 0; i < cats.length; i++){

        let ageUnknown = "Age unknown"

        if(cats[i].age) {
            ageUnknown = cats[i].age;
        }

        html = html + "<div>" + "<h5>" + cats[i].name + "</h5>" + "<p>"  + ageUnknown + "</p>" + "</div>"
    }

    return html;
}

const newHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;

