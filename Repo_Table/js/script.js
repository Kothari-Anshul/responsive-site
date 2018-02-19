var content = "";
var repo_array;
function display_JSON(){
	var table = document.getElementById("json_table");
	
	
	str = "";
	readTextFile();
	
	repo_array = JSON.parse(content);
	for (i in repo_array){
		str += "<tr>";

		for (key in repo_array[i]){
			str += "<td>" + repo_array[i][key] + "</td>";
			
		}

		str += "</tr>";
		
	}
	table.innerHTML += str;
	
	
}
function readTextFile()
{	var file = "repo_data.json";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {	 content = rawFile.responseText;
       
    }
    rawFile.send(null);
}

function search(){
	var url = document.getElementById("url").value;

	var dropdown = document.getElementById("dropdown");
	var col = dropdown.options[dropdown.selectedIndex].value;

	var result = document.getElementById("result");

	var str = "";
	if(isValid(url) == false){
		result.innerHTML= "Please Enter a Valid URL to Search ";
	}
	else{
		for(i in repo_array){
			if(url == repo_array[i]["url"]){
				str = repo_array[i][col];
			}
		}
		result.innerHTML = " Total "  + col + " of the repository " + url + " is  : " + str;
	}
}
function isValid(url){
	return /https:\/\/github.com\/[a-zA-Z]+\/[a-zA-Z]+/.test(url) ;
	
}