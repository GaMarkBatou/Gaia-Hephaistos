
var lcName = document.getElementById("arid_WIN_0_536871015").value.trim(); 
var phoneTelefon = document.getElementById("arid_WIN_0_536871021").value.trim(); 
var handyMobile = document.getElementById("arid_WIN_0_536872300").value.trim(); 
var lcEmail = document.getElementById("arid_WIN_0_536871022").value.trim(); 
var standCity = document.getElementById("arid_WIN_0_536871000").value.trim(); 


/* 	var newElement = document.createElement("div");
		newElement.id = "clc";
		newElement.style.position = "absolute";
		newElement.style.zIndex = "99998";
		newElement.style.top = "30px";
		newElement.style.left = "1070px";
		newElement.style.width = "50px";
		newElement.style.height = "50px";
        newElement.innerHTML = "<button id='clcButton' type='button'>CLC</button>";
	document.getElementById('FormContainer').appendChild(newElement);	 */


/*
	document.getElementById("clcButton").addEventListener("click", function() {
	lcName = document.getElementById("arid_WIN_0_536871015").value.trim(); 
	phoneTelefon = document.getElementById("arid_WIN_0_536871021").value.trim(); 
	handyMobile = document.getElementById("arid_WIN_0_536872300").value.trim(); 
	lcEmail = document.getElementById("arid_WIN_0_536871022").value.trim(); 
	standCity = document.getElementById("arid_WIN_0_536871000").value.trim(); 
	
	document.getElementById("arid_WIN_0_536871782").value = "Called "+standCity+" LC\n-----\n"+lcName+" | "+lcEmail+"\n"+phoneTelefon+" - \n"+handyMobile+" - ";
});
 */

// Function to update lc details
function updateLcDetails() {
  lcName = document.getElementById("arid_WIN_0_536871015").value.trim();
  phoneTelefon = document.getElementById("arid_WIN_0_536871021").value.trim();
  handyMobile = document.getElementById("arid_WIN_0_536872300").value.trim();
  lcEmail = document.getElementById("arid_WIN_0_536871022").value.trim();
  standCity = document.getElementById("arid_WIN_0_536871000").value.trim();
//  console.log("lc details updated: " + standCity);
}

// Create and append the new element
var newElement = document.createElement("div");
newElement.id = "clc";
newElement.style.position = "absolute";
newElement.style.zIndex = "99999";
newElement.style.top = "30px";
newElement.style.left = "1010px";
newElement.innerHTML = "<select id='clcDropdown'><option value=''>Called</option></select>";
document.getElementById('FormContainer').appendChild(newElement);

const dropdown = document.getElementById('clcDropdown');

// Function to populate dropdown with options
function populateDropdown() {
  dropdown.innerHTML = "<option value=''>Called</option>"; // Clear existing options
  const options = [
    { value: "Called " + standCity + " LC\n-----\n" + lcName + " | " + lcEmail + "\n" + phoneTelefon + " - \n" + handyMobile + " - ", text: 'LC' },
    { value: 'Called LIM\n-----\n008006648109 (2/1)- LIM Informed ', text: 'LIM' },
    { value: 'Called Bosch NOC\n-----\n+49(711)811-30901 - Ticket is  \n+86(512)67673330 - Ticket is ', text: 'Bosch' },
  ];
  options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.text;
    dropdown.appendChild(opt);
  });
}

// Initial population of the dropdown
populateDropdown();

// Event listener for dropdown click to update options
dropdown.addEventListener("click", function() {
  updateLcDetails();
  populateDropdown();
});

// Event listener for dropdown change
dropdown.addEventListener("change", function() {
  updateLcDetails();
  const selectedOption = dropdown.value;
  document.getElementById("arid_WIN_0_536871782").value = selectedOption;
 // console.log("Option selected and pasted: " + selectedOption);
});

// Update lc details initially
updateLcDetails();