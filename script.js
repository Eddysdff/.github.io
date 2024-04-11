// script.js
document.getElementById('roll-button').addEventListener('click', function() {
    var region = document.getElementById('region-select').value;
    var regions = {
        "Nordic": ["Denmark", "Norway", "Sweden", "Finland", "Iceland"],
        "Southern Europe": ["Italy", "Spain", "Greece", "Portugal", "Slovenia", "Croatia", "Bosnia and Herzegovina", "Montenegro", "North Macedonia", "Serbia", "Albania", "Malta"],
        "Eastern Europe": ["Russia", "Poland", "Czech Republic", "Slovakia", "Hungary", "Romania", "Bulgaria", "Belarus", "Moldova", "Ukraine"],
        "Western Europe": ["France", "Germany", "Netherlands", "Belgium", "Luxembourg", "Austria", "Switzerland", "Monaco", "Liechtenstein"],
        "East Asia": ["China", "Japan", "South Korea", "North Korea", "Mongolia"],
        "West Asia": ["Turkey ", "Cyprus", "Syria", "Lebanon", "Israel", "Palestine ", "Jordan", "Iraq", "Saudi Arabia", "Yemen", "Oman", "United Arab Emirates", "Qatar", "Bahrain", "Kuwait", "Iran", "Armenia", "Azerbaijan ", "Georgia "],
        "South Asia": ["India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Bhutan", "Maldives", "Afghanistan "],
        "Southeast Asia": ["Indonesia", "Malaysia", "Philippines", "Singapore", "Thailand", "Vietnam", "Cambodia", "Laos", "Myanmar", "Brunei", "East Timor"],
        "North America": ["United States", "Canada", "Mexico"],
        "South America": ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]
    };

    if (region) {
        var country = regions[region][Math.floor(Math.random() * regions[region].length)];
        document.getElementById('modal-text').textContent = country;
        document.getElementById('myModal').style.display = "block";
    } else {
        document.getElementById('modal-text').textContent = "Please select a region.";
        document.getElementById('myModal').style.display = "block";
    }
});
    
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('myModal').style.display = "none";
});
