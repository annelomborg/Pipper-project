// Fetches from database on LOAD
window.addEventListener("load", async () => {
  // Gets data
  const data = await getData();

  data.forEach((pip) => {
    const newNode = createPipElement(pip);
    displayNewNode(newNode);
  });
});