//constructing a listItem object

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

	var newEntry = new listItem;
	newEntry.item = itemVal;
	newEntry.quantity = quantityVal;

	console.log(newEntry);
	myList[0] = newEntry;
//if each newEntry that's added is then pushed to the array, I can't write "0" because it will erase the one before it
};

//When someone clicks "update list", how do I check which items were checked?
//how do i differentiate between the two submit types (add and updates)??

function submit(){
	if (document.forms[0].item.checked) {
		var checkedItem = document.forms[0].item.checked;
		checkedItem.remove();
	}
};
//Once I've stored a new listItem, how do I add it to myList? !!! I'm lost on this!

//How do I add new TRs (each with a check box, item and quantity values when a newEntry is added)? {I think I need to find the location in the dom and create a new tr - not sure how to do this, especially with the check box }

/*When someone clicks "update list", how do I check which items were checked?


if (document.forms[0].item.checked) {
	user_input = document.forms[0].checkbox.name
}



//How do I remove checked items?

console.log(myList);


//How do I add check boxes next to my table items? ***ANSWERED!