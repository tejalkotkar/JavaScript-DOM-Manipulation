// from data.js
var tableData = data;

// create references
var table = d3.select("tbody");
var form = d3.select("#form1");
var filter_button = d3.select("#filter-btn");
var reset_button = d3.select("#reset-btn");
var date_in = d3.select("#datetime");
var msg = d3.select("#message");

// Method to render the table on page 
loadTable=(tdata)=>{
    table.html("");
    tdata.forEach(ufo => {
        row = table.append("tr");
        Object.entries(ufo).forEach(([key, value])=> {
            row.append("td").text(value);
        });
    });
}

printMessage=(message)=>{
    table.html("");
    //row = table.append("tr");
    msg.text(message);
}

// call a fumction to render table on page | Default view of data
loadTable(tableData);

// Filtering data
filterData=()=>{
    d3.event.preventDefault();
    date = date_in.property("value");
    console.log(date);
    if (date != ""){
        var data_filtered = tableData.filter(ufo => ufo.datetime === date);
        if(data_filtered.length > 0){
            // Call load table function with filtered data to render it on page.
            loadTable(data_filtered);
        }
        else {
            message = "No sighting found for date entered. Enter another date or click on Reset to load all sightings.";
            printMessage(message);
        }
    }
    else {
        message = "Date to be searched for is not entered. Please click on Reset to load all sightings.";
        printMessage(message);
    }
}

// Method to reset the filters to default, i.e load default page.
reset_filter=()=>{
    date_in.property("value","");
    msg.text("");
    loadTable(tableData)
}

form.on("submit", filterData);
filter_button.on("click", filterData);
reset_button.on("click", reset_filter);