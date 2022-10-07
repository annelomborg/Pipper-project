const url = "http://localhost:8000";

/* 
Site Search
*/
async function searchPipFetch(value) {
    const rawResponse = await fetch(url + "/" + "pip" + "?search=" + value, {
        method: 'GET',
    });
    console.log(rawResponse);
    // Converts the response to JSON
    const data = await rawResponse.json();
    console.log(data)
    
    return transformToArray(data);
    
};

/* 
Edit Pip - Problem with uri params!
*/
async function editData(id, text) {
    const rawResponse = await fetch(url + "/" + "pip" + "/" + id + "/" + "edit", {
        method: 'PUT',
        body: JSON.stringify({ textpip: text })
    });
    console.log(rawResponse);
    const content = await rawResponse.json();
    console.log(content);
};

/* 
Like Pip 
*/
async function likePipFetch(id, likes) {
    const rawResponse = await fetch(url + "/" + "pip" + "/" + id + "/" + "like", {
        method: 'PUT',
        body: JSON.stringify({ likespip: likes })
    });
    const content = await rawResponse.json();
    console.log(content); // Fetches the echo json_encode in PHP
};

/* 
Delete Pip with Parameter
*/
async function deletePip(id) { // Gets selectedPipId Param from Button
    const rawResponse = await fetch(url + "/" + "pip" + "/" + id + "/" + "delete", {
        method: 'DELETE',
    });
    console.log(rawResponse);
    const content = await rawResponse.json();
    console.log(content);
};

/* 
Get Pips
*/
async function getData() {
    const rawResponse = await fetch(
        url + "/pip/"
    );
    //console.log(rawResponse)
    const content = await rawResponse.json(); // Converts the response to JSON
    //console.log(content)
    return transformToArray(content);
}

/**
 * A function that transform the Firebase Object in Object structure to Objects in Array.
 *
 * OBS! This is only needed due to the way Firebase works. OBS!
 *
 * @param {Object} data
 * @returns Array
 */
 function transformToArray(data) {
    const toReturn = [];
    for (key in data) {
      const temp = {
        ...data[key],
        id: key,
      };
      toReturn.push(temp);
    }
    return toReturn;
  }