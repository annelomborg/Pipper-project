/**
 * Takes a clone of the template, and fills the information from the Pip object,
 * into the template.
 * @param {object} contact
 * @returns {HTMLElement} Template with contact information
 */
function createPipElement(pip) {
    console.log(pip);
    // Get the template
    const template = document.querySelector("#pip-card");
    // Clone template
    const clone = document.importNode(template.content, true);
    // Fill information into the cloned templated
    clone.querySelector("#temp").id = pip.id;
    clone.querySelector("#userimage").src = pip.userimage;
    clone.querySelector("#userfirstname").textContent = pip.userfirstname;
    clone.querySelector("#username").textContent = pip.username;
    clone.querySelector("#timepip").textContent = pip.timepip;
    clone.querySelector("#textpip").textContent = pip.textpip;
    clone.querySelector("#likespip").textContent = pip.likespip;

    // Return the filled node
    return clone;
}

function editFunction(pip) {
    console.log("Hej fra Edit function", contact);
    document.querySelector("#update-name").value = contact.name;
    document.querySelector("#update-surname").value = contact.surname;
    document.querySelector("#update-company").value = contact.company;
    document.querySelector("#update-phone").value = contact.phone;
    document.querySelector("#update-email").value = contact.email;
    document.querySelector("#id-temp").innerHTML = contact.id;
}