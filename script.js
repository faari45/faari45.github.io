
//---Get started---

function showMessage(){
    window.alert("Welcome to FBZ TECH EDU HUB!") }


//---Cards---

document.addEventListener("DOMContentLoaded", () => {
  // Select all Read More buttons on the page
  const buttons = document.querySelectorAll(".read-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      // Find the card body container for this specific button
      const cardBody = this.closest(".card-body");
      
      // Locate the dots and hidden text elements inside this card
      const dots = cardBody.querySelector(".dots");
      const moreText = cardBody.querySelector(".more");

      // Toggle visibility states
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        this.textContent = "Read More";
      } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        this.textContent = "Read Less";
      }
    });
  });
});


//---contact form---

function sendMessage() {

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check required fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the required fields.");
        return false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Save message in Local Storage 
    let contactDetails = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    localStorage.setItem("contactMessage", JSON.stringify(contactDetails));

    alert("Your message has been sent successfully!");

    // Clear the form
    document.querySelector(".contact-form form").reset();

    return false;
}





