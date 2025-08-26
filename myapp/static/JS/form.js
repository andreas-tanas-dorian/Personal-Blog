function validateForm() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let occupation = document.getElementById("occupation").value;
    let purpose = document.getElementById("purpose").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (fullName.trim() === "" || email.trim() === "" || age.trim() === "" || 
        occupation.trim() === "" || purpose.trim() === "" || date.trim() === "" || 
        time.trim() === "") {
        alert("All fields are required.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (isNaN(age) || age < 18) {
        alert("You must be at least 18 years old.");
        return false;
    }

    alert("Success!");
    return true;
}