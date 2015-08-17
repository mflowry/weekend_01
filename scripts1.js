

// Make a form that can capture and store employees; 
// First Name, Last Name, Employee Number, Title, Last Review Score, and Salary. 
// Store that information in an object.

$(document).ready(function(){
	
	var $form =  document.getElementById('employeeInfo');
    var $listOfEmployees = [];
    var $employee = {};

	$('#employeeInfo').on('submit', function(e){
		e.preventDefault();
		var elements = this.elements;
		
		$employee.fname = elements.firstName.value;
		$employee.lname = elements.lastName.value;
		$employee.eeNumber = elements.employeeNumber.value;
		$employee.title = elements.title.value;
		$employee.lastReviewScore = elements.lastReviewScore.value;
		$employee.salary = elements.salary.value;
        console.log($employee);
        $listOfEmployees.push($employee);
        console.log($listOfEmployees);

        // Construct a list (UL) that populates with the most current employee information. 
		// There should be a full list of employees represented on the screen.
		// Add a 'remove' button grouped next to each employee’s information. 
        var $newEl = document.createElement("li");
        var $newText = document.createTextNode($employee.fname+ " " +$employee.lname+ ", "+$employee.title+": #"+$employee.eeNumber+ ", review: "+$employee.lastReviewScore+", salary: " +$employee.salary);
		$newEl.appendChild($newText);
		var $position = document.getElementById("content");
		$position.appendChild($newEl);
		createBtn();
		//var $remBtn = document.createTextNode("Remove employee");
		//var $remBtn = ('<button>');
		//var $newButton = $('<button class=remove>Remove Employee</button>');
		// $('#content').append('<li>'$employee.fname+ " " +$employee.lname+ ", "+$employee.title+": #"+$employee.eeNumber+ ", review: "+$employee.lastReviewScore+", salary: " +$employee.salary'</li>');
		// $("li").append('<button class=remove>Remove Employee</button>');
		// //create a new element
		// $( "<button>", {
  //   html: "Remove employee",
  //   "class": "remove",
});


		function createBtn(){
			var $newEl = document.createElement("button");
			var $newText = document.createTextNode('Remove employee');
			$newEl.appendChild($newText);
			var $position = document.getElementById('content');
			$position.appendChild($newEl);
			}
		
		$('#content').on('click', function() {
		$(this).closest('li').remove('button');
		});

		//from Ben Hunt:

		function displayEmployee(addedEmployee){
		//insert new div for each added employee
		$('<div class = "existingEmployee"></div>').insertAfter('#topLevel');
		$addedEmployeeDiv = $('#topLevel').next();

		$addedEmployeeDiv.append('<ul></ul>');
	
		$addedEmployeeDivUl = $addedEmployeeDiv.children().first();
	//add the remove button to the added employee div
	$addedEmployeeDiv.prepend('<button id = "removeButton"> Remove Employee </button>')
	
	//add relevant employee info as list items
	$addedEmployeeDivUl.append('<li>' + labelArray[0] + " "+ addedEmployee.firstName + '</li>');
	$addedEmployeeDivUl.append('<li>' + labelArray[1] + " "+ addedEmployee.lastName + '</li>');
	$addedEmployeeDivUl.append('<li>' + labelArray[2] + " "+ addedEmployee.empNum + '</li>');
	$addedEmployeeDivUl.append('<li>' + labelArray[3] + " "+ addedEmployee.empTitle + '</li>');
	$addedEmployeeDivUl.append('<li>' + labelArray[4] + " $"+ addedEmployee.empSalary + '</li>');
	$addedEmployeeDivUl.append('<li>' + labelArray[5] + " "+ addedEmployee.lastReviewScore + '</li>');
	$($addedEmployeeDiv.attr('lastName',addedEmployee.lastName));
};


		$('#removeButton').on('click', function(event2){
			$(this).parent().remove();

		//$('#content').on('click', removeEmp); works but removes all ees

// var $remove = $('<button class=remove>Remove Employee</button>')
// $newLi.append($newSpan, $remove);
		
		// //Clicking that button should remove that specific employee.

		// }
		// var elButton = document.getElementById('remove');

		// $(elButton).on('click', removeEmp);
		// e.preventDefault();
		// 	
		// 	}
		// }

        
        	//});
}());



//In the review score section, make sure to put some sort of color indicator based on their review. 
//The employee reviews should only be able to be 1 - 5. 5 would indicate a good score, 1 would be poor.
