// =================================================================
// Kapesta Shared Form Validation Script
// =================================================================

// Shared RegEx Patterns
const emailPattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^09\d{9}$/;

// Global Dialog Close Function
function closeDialog() {
    const dialogOverlay = document.getElementById("dialog-overlay");
    if (dialogOverlay) {
        dialogOverlay.style.display = "none";
    }
    
    // Reset whichever form is active
    const contactForm = document.getElementById("contactForm");
    const reportForm = document.getElementById("reportForm");
    
    if (contactForm) contactForm.reset();
    if (reportForm) reportForm.reset();

    // Clear all error classes and text messages across the page
    document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));
    document.querySelectorAll(".form-error").forEach(el => el.textContent = "");
}


// =================================================================
// CONTACT PAGE VALIDATION
// =================================================================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    // Real-time validation
    nameInput.addEventListener("input", function() {
        if (nameInput.value.trim() === "") {
            document.getElementById("nameError").textContent = "Please enter your name.";
            nameInput.classList.add("input-error");
        } 
          else {
              document.getElementById("nameError").textContent = "";
              nameInput.classList.remove("input-error");
          }
    });

    emailInput.addEventListener("input", function() {
        const email = emailInput.value.trim();
        if (email === "") {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            emailInput.classList.add("input-error");
        } 
          else if (!emailPattern.test(email)) {
              document.getElementById("emailError").textContent = "Please enter a valid email address (e.g., juan@example.com).";
              emailInput.classList.add("input-error");
          } 
            else {
                document.getElementById("emailError").textContent = "";
                emailInput.classList.remove("input-error");
            }
    });

    phoneInput.addEventListener("input", function() {
        const phone = phoneInput.value.trim();
        if (phone !== "" && !phonePattern.test(phone)) {
            document.getElementById("phoneError").textContent = "Please enter a valid 11-digit mobile number starting with 09.";
            phoneInput.classList.add("input-error");
        } 
          else {
              document.getElementById("phoneError").textContent = "";
              phoneInput.classList.remove("input-error");
          }
    });

    subjectInput.addEventListener("change", function() {
        if (subjectInput.value === "") {
            document.getElementById("subjectError").textContent = "Please select a subject.";
            subjectInput.classList.add("input-error");
        } 
          else {
              document.getElementById("subjectError").textContent = "";
              subjectInput.classList.remove("input-error");
          }
    });

    messageInput.addEventListener("input", function() {
        const message = messageInput.value.trim();
        if (message.length < 20) {
            document.getElementById("messageError").textContent = "Your message must contain at least 20 characters and cannot exceed 2,000 characters.";
            messageInput.classList.add("input-error");
        }
          else {
              document.getElementById("messageError").textContent = "";
              messageInput.classList.remove("input-error");
          }
    });

    // Final Submit Validation
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const subject = subjectInput.value;
        const message = messageInput.value.trim();

        let isValid = true;

        if (name === "") {
            document.getElementById("nameError").textContent = "Please enter your name.";
            nameInput.classList.add("input-error");
            isValid = false;
        }

        if (email === "" || !emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address (e.g., juan@example.com).";
            emailInput.classList.add("input-error");
            isValid = false;
        }

        if (phone !== "" && !phonePattern.test(phone)) {
            document.getElementById("phoneError").textContent = "Please enter a valid 11-digit mobile number starting with 09.";
            phoneInput.classList.add("input-error");
            isValid = false;
        }

        if (subject === "") {
            document.getElementById("subjectError").textContent = "Please select a subject.";
            subjectInput.classList.add("input-error");
            isValid = false;
        }

        if (message.length < 20) {
            document.getElementById("messageError").textContent = "Your message must contain at least 20 characters and cannot exceed 2,000 characters.";
            messageInput.classList.add("input-error");
            isValid = false;
        }

        if (isValid) {
            document.getElementById("dialog-overlay").style.display = "flex";
        }
    });
}


// =================================================================
// REPORT PAGE VALIDATION
// =================================================================
const reportForm = document.getElementById("reportForm");

if (reportForm) {
    const emailInput = document.getElementById("email");
    const categoryInput = document.getElementById("category");
    const descriptionInput = document.getElementById("description");
    const confirm1Input = document.getElementById("confirm1");
    const confirm2Input = document.getElementById("confirm2");
    const reportFieldset = document.querySelector(".report-form fieldset");

    // Real-time validation
    emailInput.addEventListener("input", function() {
        const email = emailInput.value.trim();
        if (email === "" || !emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address (e.g., juan@example.com).";
            emailInput.classList.add("input-error");
        } 
          else {
              document.getElementById("emailError").textContent = "";
              emailInput.classList.remove("input-error");
          }
    });

    categoryInput.addEventListener("change", function() {
        if (categoryInput.value === "") {
            document.getElementById("categoryError").textContent = "Please select a category for your report.";
            categoryInput.classList.add("input-error");
        } 
          else {
              document.getElementById("categoryError").textContent = "";
              categoryInput.classList.remove("input-error");
          }
    });

    descriptionInput.addEventListener("input", function() {
        const description = descriptionInput.value.trim();
        if (description.length < 20) {
            document.getElementById("descriptionError").textContent = "Please enter a description between 20 and 2,000 characters.";
            descriptionInput.classList.add("input-error");
        } 
          else {
              document.getElementById("descriptionError").textContent = "";
              descriptionInput.classList.remove("input-error");
          }
    });

    confirm1Input.addEventListener("change", checkConfirmations);
    confirm2Input.addEventListener("change", checkConfirmations);

    function checkConfirmations() {
        if (!confirm1Input.checked || !confirm2Input.checked) {
            document.getElementById("confirmError").textContent = "Please confirm both statements before submitting your report.";
            if (reportFieldset) reportFieldset.classList.add("input-error");
        } 
          else {
              document.getElementById("confirmError").textContent = "";
              if (reportFieldset) reportFieldset.classList.remove("input-error");
          }
    }

    // Final Submit Validation
    reportForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const category = categoryInput.value;
        const description = descriptionInput.value.trim();
        const confirm1 = confirm1Input.checked;
        const confirm2 = confirm2Input.checked;

        let isValid = true;

        if (email === "" || !emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address (e.g., juan@example.com).";
            emailInput.classList.add("input-error");
            isValid = false;
        }

        if (category === "") {
            document.getElementById("categoryError").textContent = "Please select a category for your report.";
            categoryInput.classList.add("input-error");
            isValid = false;
        }

        if (description.length < 20) {
            document.getElementById("descriptionError").textContent = "Please enter a description between 20 and 2,000 characters.";
            descriptionInput.classList.add("input-error");
            isValid = false;
        }

        if (!confirm1 || !confirm2) {
            document.getElementById("confirmError").textContent = "Please confirm both statements before submitting your report.";
            if (reportFieldset) reportFieldset.classList.add("input-error");
            isValid = false;
        } else {
            if (reportFieldset) reportFieldset.classList.remove("input-error");
        }

        if (isValid) {
            document.getElementById("dialog-overlay").style.display = "flex";
        }
    });
}
