const textPipInput = document.getElementById("textPip");
const postPipForm = document.querySelector("#postPipForm");

// Textarea input counter
textPipInput.addEventListener("input", () => {
   const counter = document.getElementById("current-count");
   const length = textPipInput.value.length;
   counter.innerHTML = length;

   if (length > 199 && length < 255) {
      counter.style.color = "orange";
   } else if (length >= 255) {
      counter.style.color = "red";
   } else {
      counter.style.color = "inherit";
   }
})

// Expanding Textarea
const textarea = document.getElementById("textPip");
const heightLimit = 200; // Maximum height: 200px

textarea.oninput = function () {
   textarea.style.height = ""; /* Reset the height*/
   textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};

// Check if Pip Value is Valid
function isInputValid(input) {
   const result = input.length > 0;
   return result;
}

// POST textPip.Value TO SQL
newPipForm.addEventListener("submit", async (event) => {
   event.preventDefault();

   date = new Date().toISOString().slice(0, 19).replace('T', ' ');
   // Could also be made with CURRENT_TIMESTAMP Default/Expression in mySQL
   const textPipValue = document.getElementById("textPip").value;

   const isPipValid = isInputValid(textPipValue);

   if (isPipValid === true) {
      const rawResponse = await fetch(url + "/" + "pip", {
         method: 'POST',
         body: JSON.stringify({ textpip: textPipValue, username: "thavlov", timepip: date })
      });
      console.log(rawResponse);
      const content = await rawResponse.json();
      console.log(content);

   } else {
      textPipInput.style.border = "1px solid red";
   }

})

/*    fillTemplate(titel, note) */
/* $(function() {
   $('#myForm').submit(function(){
      var query = $(this).serialize();
      $.post("post.php", query);
      return false;
  });
});
 */

/* 
Sidebar Modal for New Pip
*/

const pipBtnModal = document.getElementById("pipOpenModal");
const pipCloseModal = document.getElementById("pipCloseModal");
const modal = document.getElementById("pipModal");

pipBtnModal.addEventListener("click", function () {
   modal.style.display = "block";
});

pipCloseModal.addEventListener("click", function () {
   modal.style.display = "none";
});

window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

/* 
Dropdown Menu for individual Pips
*/

function dropdownPostedPip(selectedPipId) {
   const dropdown = document.querySelector("#dropdown-content-id-" + selectedPipId);
   dropdown.classList.toggle("hide");

}

/* window.onclick = function (event) {
   const dropdowns = document.querySelector(".dropdown-content");

   if (event.target !== dropdowns) {
      dropdowns.classList.add("hide");
   }
}  */

// Close the dropdown menu if the user clicks outside of it
/* window.onclick = function (event) {
   if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains("hide")) {
         } else {
            openDropdown.classList.add("hide");
         }
      }
   }
} */

/* 
Modal for update or edit
*/

function editModal(selectedPipId) {
   // Get the modal
   var modal = document.getElementById("editModal");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // Open the modal
   modal.style.display = "block";

   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
      modal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
      }
   }

   editPip(selectedPipId);

   /**
    * Copies the innertext from the posted pip textarea
    * @param {object} contact
    * @returns {HTMLElement} Template with contact information
    */
   async function editPip(selectedPipId) {
      const postedPipTextValue = document.querySelector("#postedPipTextId-" + selectedPipId).innerText;
      document.querySelector("#textPipEdit").value = postedPipTextValue;
      // Prints the specific idPip in the HTML span
      document.querySelector("#idPip").innerHTML = selectedPipId;
   }
}

document.querySelector("#search-btn").addEventListener("click", async (event) => {
   event.preventDefault();
   const search = document.querySelector("#site-search");
   const value = search.value;
   const data = searchPipFetch(value);

   data.forEach((pip) => {
      const newNode = createPipElement(pip);
      displayNewNode(newNode);
    });

})


/**
* Runs the snackbarFunction with param as text
* @param {object} contact
* @returns {HTMLElement} Template with contact information
*/
function snackbarFunction(text) {
   // Get the snackbar DIV
   const x = document.getElementById("snackbar");

   x.innerHTML = text;

   // Add the "show" class to DIV
   x.className = "show";

   // After 3 seconds, remove the show class from DIV
   setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

/**
 * Append node as child in the Contact List html element
 * @param newNode
 */
 function displayNewNode(newNode) {
   const pipsList = document.querySelector(".pipFeed");
   pipsList.appendChild(newNode);
 }