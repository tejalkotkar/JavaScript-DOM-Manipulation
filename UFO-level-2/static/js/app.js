// from data.js
var tableData = data;


// create references
var table = d3.select("tbody");
var filter_button = d3.select("#filter-btn");
var reset_button = d3.select("#reset-btn");
var msg = d3.select("#message");

// Create references for input.
var date_in = d3.select("#datetime");
var city_in = d3.select("#city");
var state_in = d3.select("#state");
var country_in = d3.select("#country");
var shape_in = d3.select("#shape");


// Method to render the table on page.
loadTable=(tdata)=>{

    // clear the table data before loading new data.
    table.html("");

    // Clear the message.
    msg.text("");

    // Iterate through each element/object in list.
    tdata.forEach(ufo => {

        // Add row for each object to render.
        row = table.append("tr");

        // Iterate through each entry (key-value pair) in object.
        Object.entries(ufo).forEach(([key, value])=> {

            //append td & text with value of entry.
            row.append("td").text(value);
        });
    });
};

// call method to render the data.js (table) | default view
loadTable(tableData);

// Method to print message on page in case searched data is not found.
printMessage=(message)=>{

    // Clear the table 
    table.html("");

    // Add message
    msg.text(message);
};


// Method to invoke once clicked on filter table button or form is submitted.
filterData=()=>{

    // Prevent the page from refreshing
    d3.event.preventDefault();

    filter_criteria = {};

    // Get the value property of the input elements
    if(date_in.property("value")!="") filter_criteria['datetime']=date_in.property("value");
    
    if(city_in.property("value")!="") filter_criteria['city']=city_in.property("value");

    if(state_in.property("value")!="") filter_criteria['state']=state_in.property("value");

    if(country_in.property("value")!="") filter_criteria['country']=country_in.property("value");

    if(shape_in.property("value")!="") filter_criteria['shape']=shape_in.property("value");

    // check if there is any filtering criteria added.
    if (Object.keys(filter_criteria).length > 0){
        var filtered_data = tableData;

        // Filter the data depending on the filter criteria entered by iterating over filter_criteria object.
        Object.entries(filter_criteria).forEach(([key, value])=>{
            filtered_data = filtered_data.filter(ufo => ufo[key] === value);
        });

        // Execute the below code block if there is any data filtered
        if(filtered_data.length > 0){

            // Call load table function with filtered data to render it on page.
            loadTable(filtered_data);
        }
        // Print the message if no data has returned.
        else {
            message = "No sighting found for searched criteria entered. Enter another criteria or click on Reset to load all sightings.";

            // Call the printMessage function to print the message on page.
            printMessage(message);
        }

    }
    // Execute below code if there is no search criteria entered and clicked on Filter Table button
    else{
        message = "Search criteria is not entered. Please click on Reset to load all sightings.";

        // Call the printMessage function to print the message on page.
        printMessage(message);
    }    
};


// Method to reset the filters to default, i.e load default page.
reset_filter=()=>{
    
    // Remove the input (filter criteria).
    date_in.property("value","");
    city_in.property("value","");
    state_in.property("value","");
    country_in.property("value","");
    shape_in.property("value","");

    // Clear the message.
    msg.text("");

    // Load the default data. 
    loadTable(tableData)
};


// Creating event handlers 
filter_button.on("click", filterData);
reset_button.on("click", reset_filter);