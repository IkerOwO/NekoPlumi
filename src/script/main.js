const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const submitBtn = document.getElementById("submitBTN");
const entriesContainer = document.getElementById("entries");

submitBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const desc = bodyInput.value.trim();

    if (!title || !desc) {
      alert("Please fill in both the title and body fields.");
      return;
    }

    // CREATE ENTRY ELEMENT
    const entry = document.createElement("div");
    entry.classList.add(
    "news-entry",
    "p-4",
    "border",
    "rounded",
    "bg-white",
    "shadow",
    "w-full",      
    "sm:w-1/2",     
    "md:w-1/3",    
    "lg:w-1/4",  
    "transition-transform",   
    "transform",           
    "hover:scale-105",      
    "hover:shadow-xl",    
    "mb-6"
    );

    entry.innerHTML = `
      <h2 class="text-xl font-vt323 mb-2">${title}</h2>
      <p class="font-vt323">${desc}</p>
    `;

    entriesContainer.appendChild(entry);

    // SHOW CONTAINER IF HIDDEN
    entriesContainer.style.display = "flex";

    // CLEAR INPUTS
    titleInput.value = "";
    bodyInput.value = "";
  });