// from data.js
var tableData = data;


// create references
var table = d3.select("tbody");
var filter_button = d3.select("#filter-btn");
var reset_button = d3.select("#reset-btn");
var msg = d3.select("#message");
var date_in = d3.select("#datetime");


// Method to render the table on page 
loadTable=(tdata)=>{

    // clear the table data before loading new data
    table.html("");

    // Iterate through each element/object in list
    tdata.forEach(ufo => {

        // Add row for each object to render
        row = table.append("tr");

        // Iterate through each entry (key-value pair) in object
        Object.entries(ufo).forEach(([key, value])=> {

            //append td & text with value of entry
            row.append("td").text(value);
        });
    });
};

// Render the data.js (table) | default view
loadTable(tableData);

// Method to print message on page in case searched data is not found.
printMessage=(message)=>{

    // Clear the table 
    table.html("");

    // Add message
    msg.text(message);
};


// Method to invoke once clicked on filter table button.
filterData=()=>{

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element (date entered)
    date = date_in.property("value");

    // Check if date is entered(i.e input is not empty)
    if (date != ""){

        // filter the data where date entered matches with datetime from data
        var data_filtered = tableData.filter(ufo => ufo.datetime === date);

        // Check the length of the return array to check if there are any matched objects are returned. 
        if(data_filtered.length > 0){

            // Call load table function with filtered data to render it on page.
            loadTable(data_filtered);
        }
        // Print the message if no data has returned.
        else {
            message = "No sighting found for date entered. Enter another date or click on Reset to load all sightings.";

            // Call the printMessage function to print the message on page.
            printMessage(message);
        }
    }
    // If the date is not entered, print the message 
    else {
        message = "Date to be searched for is not entered. Please click on Reset to load all sightings.";

        // Call the printMessage function to print the message on page.
        printMessage(message);
    }
};


// Method to reset the filters to default, i.e load default page.
reset_filter=()=>{
    
    // Remove the date entered and clear the input.
    date_in.property("value","");

    // Clear the message.
    msg.text("");

    // Load the default data. 
    loadTable(tableData)
};


// Creating event handlers 
filter_button.on("click", filterData);
reset_button.on("click", reset_filter);