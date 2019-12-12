var tableCells = document.getElementsByTagName("td")
var monthPicker = document.getElementById("monthpicker")
var dropdownMonthMenu = document.getElementById("dropdownmonthmenu")
var dropdownYearMenu = document.getElementById("dropdownyearmenu")
var chosenMonth = document.querySelector("#chosenMonth")
var chosenYear = document.querySelector("#chosenYear")
var dayHeaders = [document.getElementsByTagName("th")]
var calCells = document.querySelectorAll("td")
var years = []
var dateArray = []
var firstOfMonth = new Date(dateArray[0])
var modalT = document.querySelector("#modalLabel")
var form = document.querySelector('#form');


function yearsArray() {
    var dateStart = moment()
    var dateEnd = moment().add(10, 'y')
    while (dateEnd.diff(dateStart, 'years') >= 0) {
      years.push(dateStart.format('YYYY'))
      dateStart.add(1, 'year')
    }}


function yearDropdownFill() {
       
    for (var i=0;i<years.length;i++) {
    var thisYear = years[i]    
        document.createElement("button")
    var yearDropdownItem = document.createElement("button")
        yearDropdownItem.setAttribute("class","dropdown-item")
        yearDropdownItem.setAttribute("href","#")
        yearDropdownItem.setAttribute("name", "year")
        yearDropdownItem.textContent = thisYear
        dropdownYearMenu.appendChild(yearDropdownItem)
   }}


function monthDropdownFill() {
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    for (var i=0;i<months.length;i++) {
    var thisMonth = months[i]
        document.createElement("button")
    var dropdownItem = document.createElement("button")
        dropdownItem.setAttribute("class","dropdown-item")
        dropdownItem.setAttribute("href","#")
        dropdownItem.setAttribute("name", "month")
        dropdownItem.textContent = thisMonth
        dropdownMonthMenu.appendChild(dropdownItem)
    }}


function createCalendar() {
for (var i=0;i<calCells.length;i++) {
    if (calendar.firstDay===i) {
        for (var j=0;j<dateArray.length;j++) {
            calCells[i].textContent = dateArray[j]
            calCells[i].setAttribute("value",dateArray[j])
            i++
        }}}}

function getDates(startDate,stopDate) {
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('MMMM DD, YYYY') )
            currentDate = moment(currentDate).add(1, 'days');
        }}

function clearCal() {
    $("td").empty()
    
}

for (let index = 0; index < tableCells.length; index++) {
    tableCells[index].addEventListener("mouseover", function() {
        tableCells[index].setAttribute("class","table-primary")
    })}

for (let index = 0; index < tableCells.length; index++) {
    tableCells[index].addEventListener("mouseout", function() {
        tableCells[index].removeAttribute("class", "table-primary")
    })}


dropdownMonthMenu.addEventListener("click", function(e){
            var selectedMonth = e.target.textContent
            chosenMonth.textContent = selectedMonth
        })
    

dropdownYearMenu.addEventListener("click", function(e){
            var selectedYear = e.target.textContent
            chosenYear.textContent = selectedYear
        })
  

var calendar = new Object()     
            calendar.clock = setInterval(function() { 
                if (chosenYear.textContent!==""&&chosenMonth.textContent!=="") {
                    calendar.combinedCalendar = chosenMonth.textContent+" "+chosenYear.textContent;
                    dateArray = []
                    clearCal()
                    calendar.dt = new Date(calendar.combinedCalendar);
                    // GET THE MONTH AND YEAR OF THE SELECTED DATE.
                    calendar.month = calendar.dt.getMonth();
                    calendar.year = calendar.dt.getFullYear();

                // GET THE FIRST AND LAST DATE OF THE MONTH.
                    calendar.FirstDay = new Date(calendar.year, calendar.month, 1);
                    calendar.LastDay = new Date(calendar.year, calendar.month + 1, 0);
                    getDates(calendar.FirstDay, calendar.LastDay)
                    calendar.firstDay = calendar.FirstDay.getDay(firstOfMonth)   
                    createCalendar()
                    chosenMonth.textContent = ""
                    chosenYear.textContent = ""
                    }},1000)


monthDropdownFill()
yearsArray()
yearDropdownFill()

$("td").attr("data-target","#modal")
$("td").attr("data-toggle","modal")




$("#modal").on("shown.bs.modal", function (event) {
    $('#myInput').trigger('focus')
    var button = $(event.relatedTarget); // Button that triggered the modal 
    var modal  = $(this);
    var title = button.attr("value")
    modal.find('.modal-title').text(title)
    
    if (localStorage.getItem(title)!==null) {
        var data = JSON.parse(localStorage.getItem(title))
        var inputs = Array.prototype.slice.call(document.querySelectorAll("input"));
          
          Object.keys(data).map(function(dataItem) {
            inputs.map(function (inputItem) {
              if(inputItem.name === dataItem){
                   inputItem.value = data[dataItem]
                } else{false};
            })});
    }else{$(this).removeData()}

    

   })

$("#modal").on('hidden.bs.modal', function(){
    $(this).find("form")[0].reset();
});


const isValidElement = element => {
    return element.name && element.value;
  };

const formToJSON = elements => [].reduce.call(elements, (data, element) => {

    if (isValidElement(element)) {
    data[element.name] = element.value;
}
    return data;
  }, {});
  
function handleFormSubmit(event){
  
    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();
    var title = modalT.textContent
    // Call our function to get the form data.
    const data = formToJSON(form.elements);
  
    // Demo only: print the form data onscreen as a formatted JSON object.
  
    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    localStorage.setItem(title,(JSON.stringify(data, null, "  ")));
  
    // ...this is where we’d actually do something with the form data...
  };
  
  var save = document.querySelector("#save-button")
  save.addEventListener("click",handleFormSubmit);