// Like Pip with Parameter
async function likePip(selectedPipId) {
  // Gets selectedPipId Param from Button
  let pipLikesValue = parseInt(document.querySelector("#pipLikesId" + selectedPipId).innerHTML);
  //console.log(selectedPipId);
  pipLikesValue++;
  // Change Value In HTML until Refresh
  document.querySelector("#pipLikesId" + selectedPipId).innerHTML = pipLikesValue;
  //console.log(pipLikesValue)

  // This needs to change the color fill of the heart when pressed!
  //document.querySelector("#pipId"+selectedPipId+".bi-heart").style.fill = "red";

  likePipFetch(selectedPipId, pipLikesValue);

  /* 
  Runs SnackBar Function
  */
  let snackbarMessage = "The Pip has been liked!"
  snackbarFunction(snackbarMessage)
}

// Edit Pip with Parameter
const editPipForm = document.querySelector("#editPipForm");

editPipForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const textPipValue = document.querySelector("#textPipEdit").value;
  const id = parseInt(document.querySelector("#idPip").innerText);

  editData(id, textPipValue);
})