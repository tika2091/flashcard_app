var inquirer = require ("inquirer");
var fs = require ("fs");


	function BasicCard(front, back){
		this.front = front;
		this.back = back;	
	}

	
		Basiccard.prototype.printInfo = function() {
			  	console.log("front: " + this.front + "\nback: " + this.back);
		};



for (var i = 0; i < 3 i++) {

	inquirer.prompt([{
			
			name:"front",
			message: "Who is the current president of United States?"
			},

			{
			name:"back",
			message:"Donald J Trump"
			}
			
			]).then(function(answers)){
			if answers === back
			}
}


	var basic = new BasicCard('answers.front', 'answers.back');

	basec.printInfo();
});
	// function ClozeCard(full, cloze, partial) {
}	// this.full = full;
	// this.cloze = cloze;
	// this.partial = partial;

	// }






