

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
		var $remBtn = document.createTextNode("Remove employee");
		$newEl.appendChild($newText);
		var $position = document.getElementById("content");
		$position.appendChild($newEl);
		createBtn();


		function createBtn(){
			var $newEl = document.createElement("button");
			var $newText = document.createTextNode('Remove');
			$newEl.appendChild($newText);
			var $position = document.getElementById('content');
			$position.appendChild($newEl);
			}
		
		function removeEmp() {
		$(this).button.remove();
		}

		$('#content').on('click', removeEmp);

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

        
        	});
}());



//In the review score section, make sure to put some sort of color indicator based on their review. 
//The employee reviews should only be able to be 1 - 5. 5 would indicate a good score, 1 would be poor.
