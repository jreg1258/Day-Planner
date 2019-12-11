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




var dayHeaders = [document.getElementsByTagName("th")]
var calCells = document.querySelectorAll("td")

function createCalendar() {
for (var i=0;i<calCells.length;i++) {
    if (calendar.firstDay===i) {
        for (var j=0;j<dateArray.length;j++) {
            
            calCells[i].textContent = dateArray[j]
            console.log("hey")
            i++
        }
        
    }
    }}





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
  
var dateArray = []


function getDates(startDate,stopDate) {
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('MMMM DD, YYYY') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    console.log(dateArray);
}
    
var calendar = new Object()     
            calendar.clock = setInterval(function() { 
                if (chosenYear.textContent!==""&&chosenMonth.textContent!=="") {
                    calendar.combinedCalendar = chosenMonth.textContent+" "+chosenYear.textContent;
                    
                    calendar.dt = new Date(calendar.combinedCalendar);
                    // GET THE MONTH AND YEAR OF THE SELECTED DATE.
                    calendar.month = calendar.dt.getMonth();
                    calendar.year = calendar.dt.getFullYear();

                // GET THE FIRST AND LAST DATE OF THE MONTH.
                    calendar.FirstDay = new Date(calendar.year, calendar.month, 1);
                    calendar.LastDay = new Date(calendar.year, calendar.month + 1, 0);
                    getDates(calendar.FirstDay, calendar.LastDay)
                    calendar.firstDay = calendar.FirstDay.getDay(firstOfMonth)
                    console.log(calendar.firstDay)
                    console.log(calendar.FirstDay,calendar.LastDay)
                    createCalendar()    
                    clearInterval(calendar.clock)
                        
                    }
                     return
                        },1000)


                        var firstOfMonth = new Date(dateArray[0])