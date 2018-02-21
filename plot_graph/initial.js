
function read_file(){
	var LineByLineReader = require('line-by-line');
    
    

	var file_names = ["India2011.csv", "IndiaSC2011.csv", "IndiaST2011.csv"];
	
	var dict = {};
	var edu_category = {};
	var fileRead = 0;
	
	var i  = 0;
	for(i=0; i<file_names.length; i++){
		
		var lr = new LineByLineReader(file_names[i]);
		lr.line_count = 0;
		lr.on('line', function (line) {
			this.line_count++;
			if(this.line_count == 1){
				/* do nothing its header section */
			}
			else{
				var values = line.split(",");
				if(values[4] == "Total" && values[5] != "Age not stated" && values[5] != "All ages")
				{	if(values[5] in dict){
						dict[values[5]] += parseInt(values[12]);
					}
					else{
						dict[values[5]] = parseInt(values[12]);
					}
					
				}
				 /*for reading data according to education category */
				 
				
				 if(this._filepath in edu_category){
				 	edu_category[this._filepath] += parseInt(values[12]);
					
				}else{
					edu_category[this._filepath] = parseInt(values[12]);
					
					
				}

			}
			
			

		});

		lr.on('end', function () {
			fileRead++;
			if(fileRead == 3){
				for(key in dict){
					console.log(key + "--->" + dict[key]);
				}
				
				for(key in edu_category){
					console.log(key + "---->" + edu_category[key]);
				}
			}

		});
	}




	


}
read_file();