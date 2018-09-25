/* The following code:
*  1. Creates a binding to the #WaterSources ordered list element.
*  2. Using the DOM's Fetch API , send an HTTP GET Request to
*     https://localhost:8000/data/water.json. Look at
*     MDN's "Using Fetch" articles to learn more about this API.
*  3. Upon successful receipt of the data, we convert the JSON into
*     a JavaScript object (an array).
*  4. Loop over the array. Send each individual water source object into
*     a function that returns a DOM list item node.
*  5. Attach that node to the DOM, using the binding we created in step 1.
*/


// binding
const list = document.getElementById("WaterSources");


// using the Fetch API to GET water.json,
// then turning JSON response into a JavaScript object (array)
// then looping over array and attaching data to DOM with utility method.
fetch("/data/water.json")
  .then(function(response) {
    // console.dir(response);
    return response.json();
  })
  .then(function(sources) {
    // console.log(typeof sources);
    sources.forEach(
      function(source){
        // console.log(source);
        let li = createListItem(source);
        list.appendChild(li);
    })
  });
  // Uncomment the console statements to explore in the JavaScript console.


// Utility method that takes water source objects
// and returns a DOM list item node.
// Note that the final forEach loop above
function createListItem(data) {
  let listItem = document.createElement("li");
  listItem.innerHTML = data.name;

  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Discharge (cubic feet per second): " + data.discharge;

  listItem.appendChild(paragraph);

  return listItem;
}
