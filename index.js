const form = document.querySelector("form");
const outputSection = document.querySelector(".notes-list");

// Event del submit
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtindre i sanititzar els camps
    const title = sanitizeInput(document.getElementById("title").value.trim());
    const content = sanitizeInput(document.getElementById("content").value.trim());
    const priority = document.getElementById("priority").value;

    //Titol y contingut obligatoris
    if (!title || !content) {
        alert("Title and content are required.");
        return;
    }

    // Informació formulari
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");

    noteElement.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <span class="priority-label ${priority.toLowerCase()}">${priority}</span>
    `;

    // Node secció de notes
    outputSection.appendChild(noteElement);

    form.reset();
});

// Evitar injeccions de codi XSS
function sanitizeInput(input) {
    const element = document.createElement("div");
    element.innerText = input;
    return element.innerHTML;
}