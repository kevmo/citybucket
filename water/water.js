// Makes HTTP request for JSON file
// Then extracts JSON data from HTTP response
// Then calls utility method 1, passing it the data.
fetch("/data/water.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(sources) {
      addSourcesToPage(sources);
    });

// Utility method 1:
// Iterates over water sources array, passing each
// water source object to Utility method 2. Method 2 returns
// `li` DOM nodes, which are then appended to the list we created
// in water.html.
function addSourcesToPage(sources) {
    const list = document.getElementById("WaterSources");

    for (let i = 0 ; i < sources.length; i++ ){
        let li = createListItem(sources[i]);
        list.appendChild(li);
    }
}

// Utility method 2.
// Takes an individual water source objects as an argument
// Returns an `li` DOM node with the data inside.
function createListItem(data) {
  const listItem = document.createElement("li");
  listItem.innerHTML = data.name;

  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Discharge (cubic feet per second): " + data.discharge;

  listItem.appendChild(paragraph);

  return listItem;
}
