var tableCells = document.getElementsByTagName("td")
var monthPicker = document.getElementById("monthpicker")

for (let index = 0; index < tableCells.length; index++) {
    tableCells[index].addEventListener("mouseover", function() {
        tableCells[index].setAttribute("class","table-primary")
    })
}

for (let index = 0; index < tableCells.length; index++) {
    tableCells[index].addEventListener("mouseout", function() {
        tableCells[index].removeAttribute("class", "table-primary")
    })
}



var dropdownMonthMenu = document.getElementById("dropdownmonthmenu")
var dropdownYearMenu = document.getElementById("dropdownyearmenu")

const years = []
const yearsArray = () => {
    const dateStart = moment()
    const dateEnd = moment().add(10, 'y')
    while (dateEnd.diff(dateStart, 'years') >= 0) {
      years.push(dateStart.format('YYYY'))
      dateStart.add(1, 'year')
    }
}
const yearDropdownFill = () => {
       
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
    }
}

monthDropdownFill()
yearsArray()
yearDropdownFill()


var chosenMonth = document.querySelector("#chosenMonth")
var chosenYear = document.querySelector("#chosenYear")



        dropdownMonthMenu.addEventListener("click", function(e){
            var selectedMonth = e.target.textContent
            chosenMonth.textContent = selectedMonth
        })
    


        dropdownYearMenu.addEventListener("click", function(e){
           
            var selectedYear = e.target.textContent
            chosenYear.textContent = selectedYear
        })
    

    if (chosenYear.textContent!==""&&chosenMonth.textContent!=="") {
    var combinedCalendar = chosenMonth.textContent && chosenYear.textContent
    
    }



