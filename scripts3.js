

// Make a form that can capture and store employees; 
// First Name, Last Name, Employee Number, Title, Last Review Score, and Salary. 
// Store that information in an object.

$(document).ready(function(){
	//build a form
	//when we submit the form, we'll access the info by name
	var $form = $('#EmployeeInfo'); //has to match form id
	var $firstName = $('#FirstName');
	var $LastName = $('#LastName');
	var $EmployeeNumber = $('#EmployeeNumber');
	var $Salary = $('#Salary');
	var $Title = $('#Title');
	var $LastReviewScore = $('#LastReviewScore');
	var $employees = $('#employees');


	$form.on('submit', function(e){ //use .on (more fully featured) instead of .submit or .click
		e.preventDefault();
		var employee = newEmployee(
			$FirstName.val(),
			$LastName.val(),
			$EmployeeNumber(),
			$Title(),
			$LastReviewScore(),
			$Salary()
			);
		console.log(employee);
	})
	//build a constructor
	var Employee = function(firstName, LastName, EmployeeNumber, Title, LastReviewScore, Salary)
	this.FirstName = FirstName;
	this.LastName = LastName;
	this.EmployeeNumber = LastName;
	this.Salary = Salary;
	this.LastReviewScore = LastReviewScore;
	this.Title = Title;

//function to append employee
function appendEmployee(emp){
	var $li = $(<'li'>);//this has to be inside the function or it will append the same info each time
	$li.text(emp.FirstName + ' ' + 
		emp.LastName+', ' +
		emp.Num + ', '
		emp.Title + ', '
		emp.Salary+ ', '
		emp.LastReviewScore + ', '
		);
}

var $button = $('<button>');
$button.text('Delete');
$button.attr('id', emp.empNum); //needs unique identifier so we can select it, use eeNum
$button.attr('class', 'js-delete'); //js prefix denotes that it is a JS class, just for delete not for styling
$li.append($button);//appendTo appends after the current item

//function to delete employees
$employees.on('click', '.js-delete', function(e){
	e.preventDefault();
	$(this).parent().remove();//we can select element to delete by context (this), so we don't need the button id
})

// Construct a list (UL) that populates with the most current employee information. 
// There should be a full list of employees represented on the screen.
// Add a 'remove' button grouped next to each employee’s information. 
      




//In the review score section, make sure to put some sort of color indicator based on their review. 
//The employee reviews should only be able to be 1 - 5. 5 would indicate a good score, 1 would be poor.
