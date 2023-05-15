const projects = [
    {
        name: "Project Code 1",
        id: "1",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/"
    },
    {
        name: "Project Code 2",
        id: "2",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/"
    },
    {
        name: "Project Code 3",
        id: "3",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/"
    },
    {
        name: "Project Code 4",
        id: "4",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/"
    },
    {
        name: "Project Code 5",
        id: "5",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/05/"
    },
    {
        name: "Project Code 6",
        id: "1",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/"
    },
    {
        name: "Project Code 7",
        id: "2",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/"
    },
    {
        name: "Project Code 8",
        id: "3",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/"
    },
    {
        name: "Project Code 9",
        id: "1",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/"
    }
];

// Get all cards
const projectContainer = document.getElementById("projects-container");
const projectCards = Array.from(projectContainer.children);
console.log(projectCards);

const templateProjectCard = projectCards[0];

const baseURL = './viewer.html';

for(let project of projects) {

    // Create a new card
    const newCard = templateProjectCard.cloneNode(true);

    // Add project name to card
    const cardTitle = newCard.querySelector('h3');
    cardTitle.textContent = project.name;

    // Add project URL to card
    const button = newCard.querySelector('a');
    button.href = baseURL + `?id=${project.id}`;

    // Add card to container
    projectContainer.appendChild(newCard);
}

templateProjectCard.remove();
