// Note to instructor: I tried to refactor my code with your example, 
//but our approaches were so different that I had to switch to your method entirely.
//I did try to annotate each step with my understanding of what it accomplishes.

// Make a form that can capture and store employees; 
// First Name, Last Name, Employee Number, Title, Last Review Score, and Salary. 
// Store that information in an object.

$(document).ready(function(){
	//build a form
	//when we submit the form, we'll access the info by name
	var $Form = $('#employeeInfo'); //has to match form id
	var $FirstName = $('#firstName');
	var $LastName = $('#lastName');
	var $EmployeeNumber = $('#employeeNumber');
	var $Salary = $('#salary');
	var $Title = $('#title');
	var $LastReviewScore = $('#lastReviewScore');
	var $Employees = $('#content');//a variable to refer to the listing of ees

	 //event handler to pass data to new employee object
	$Form.on('submit', function(e){
		e.preventDefault();
		var employee = new Employee(
			$FirstName.val(),
			$LastName.val(),
        	$EmployeeNumber.val(),
        	$Title.val(),
        	$LastReviewScore.val(),
        	$Salary.val()
      );
      appendEmployee(employee);
		
	});
	
	 // constructor for employee
  	var Employee = function(fName, lName, eeNumber, title, lrScore, salary){
    this.fName = fName;//names must match arguments passed in
    this.lName = lName;
    this.eeNumber = eeNumber;
    this.title = title;
    this.lrScore = lrScore;
    this.salary = salary;
}
    // function to append employees
    function appendEmployee(ee){
       	var $li = $('<li>');
       	//In the review score section, make sure to put some sort of color indicator based on their review. 
		//The employee reviews should only be able to be 1 - 5. 5 would indicate a good score, 1 would be poor.
        $li.attr('class', 'score' + ee.lrScore);//dynamically creates score class depending on rating, set colors in css
        $li.text(ee.fName+ " " +
        		ee.lName+ ", "+
        		ee.title+": #"+
        		ee.eeNumber+ ", review: "+
        		ee.lrScore+", salary: " +
        		ee.salary
        );

    	// Add a 'remove' button grouped next to each employee’s information. 
    	var $button = $('<button>');//create button
        $button.text('Remove employee');//set button text
        $button.attr('class', 'remove'); //set button class so we can select it later

		$li.append($button); //append button to employee list item
			
		// Construct a list (UL) that populates with the most current employee information. 
		// There should be a full list of employees represented on the screen.
		$Employees.append($li);//add this employee's info to the listing
		
		}
	
	//function to delete employees (don't enclose this in a function name b/c it needs to run on document.ready)
		$Employees.on('click', '.remove', function(e) {//the second argument points to the remove class (delegation) to make it specific to the button
		e.preventDefault(); //prevents page refresh
		$(this).parent().remove();//removes li and button
		})
		
}) 






