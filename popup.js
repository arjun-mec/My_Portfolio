// Project details (replace with your actual data)
const projectDetails = {
    "shop": {
        title: "Shop Management System",
        description: "This Python and MySQL powered system offers a user-friendly interface for both customers and employees. Customers can browse available items, add them to their cart, and complete their purchase. Employees can manage the inventory by adding or removing items as needed.",
        // ... other details
    },
    "timesked": {
        title: "TimeSked",
        description: "TimeSked, your Telegram bot friend, simplifies event scheduling. Just send a message with your event details, and TimeSked will intelligently extract the information. It then creates a Google Calendar link for you, saving you time and keeping you organized.",
        // ... other details
    }
    // ... more project details
};

// Get all the cards
const cards = document.querySelectorAll(".card");

// Add event listeners to each card
cards.forEach(card => {
    card.addEventListener("click", function () {
        // Get the card ID
        const cardId = this.dataset.cardId;

        // Get the corresponding project details
        const project = projectDetails[cardId];

        // Populate the popup content
        const popupContent = document.getElementById("popup-content");
        popupContent.innerHTML = `
            ${project.title}
            ${project.description}
            
        `;

        // Show the popup
        document.getElementById("popup").classList.remove("hidden");
    });
});

// Close the popup when the close button is clicked
document.querySelector(".close-popup-btn").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
});
