//constructing a listItem object

function eraseContent (x){
	x.value = " ";
}

$("quantity").keyup(function(event){
    if(event.keyCode == 13){
        $("add-button").click();
    }
});

function listItem (item, quantity) {
	this.item = item;
	this.quantity = quantity;
};

//creating an array where listItems are held

var myList = new Array();

//a function that takes the new listItems that are entered by the user, creates a new listItem object for new entry, and adds that entry to myList 

function submit() {
	var itemField = document.getElementById("item");
	var itemVal = itemField.value;
	var quantityField = document.getElementById('quantity');
	var quantityVal = quantityField.value;

	var newRow = document.createElement("tr");
	
	var newCell1 = document.createElement("td");
	var itemCellVal = document.createTextNode(itemVal);

	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	newCell1.appendChild(checkBox);
	newCell1.appendChild(itemCellVal);

	var newCell2 = document.createElement("td");
	var quantityCellVal = document.createTextNode(quantityVal);
	newCell2.appendChild(quantityCellVal);

		//var cellItem = document.createTextNode(myList.item);
	newRow.appendChild(newCell1);
	newRow.appendChild(newCell2);
	var table = document.getElementById("table");
	table.appendChild(newRow);
	
};

//When someone clicks "update list", how do I check which items were checked?
//how do i differentiate between the two submit types (add and updates)??

function updates(){

	var table = document.getElementById("table");
//	for (var i = 0, row; row = table.rows[i]; i++) {
	console.dir(table.rows);

	var arrayCheck = new Array();
	
		for (var i = table.rows.length - 1; i >= 0 ; i--) {
	

		var row = table.rows[i];

		console.dir(i + "top of loop");
		var firstCell = row.cells[0];
//		console.dir(firstCell);
		var checkBox = row.cells[0].firstChild;

		if (checkBox.localName == "input"){
			console.dir(i + "after input");
			if(checkBox.checked == true){
				console.log(i + "about to remove");
				arrayCheck[i] = true;
				table.removeChild(row);
			}
			else{
				arrayCheck[i] = false;
			}
		}
	}
};



//ANSWERED!!!!
//How do I remove checked items?
//Once I've stored a new listItem, how do I add it to myList? !!! I'm lost on this!

//How do I add new TRs (each with a check box, item and quantity values when a newEntry is added)? {I think I need to find the location in the dom and create a new tr - not sure how to do this, especially with the check box }

//When someone clicks "update list", how do I check which items were checked?


/*if (document.forms[0].item.checked) {
	user_input = document.forms[0].checkbox.name
}*/

//How do I add check boxes next to my table items? ***ANSWERED!