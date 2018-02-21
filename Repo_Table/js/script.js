var content = "";
var repo_array;
function display_JSON(){
	var table = document.getElementById("json_table");
	
	var urlList = document.getElementById("url");
	var url_str = "";
	var str = "";
	readTextFile();
	
	repo_array = JSON.parse(content);
	for (i in repo_array){
		str += "<tr>";

		for (key in repo_array[i]){
			str += "<td>" + repo_array[i][key] + "</td>";
			if(key == "url"){
				//url_str = url_str + "<option>" + repo_array[i]["url"] + "</option>"
				url_str += "<option value = '" + repo_array[i]["url"]  + "'>"
			}
			
		}

		str += "</tr>";
		
	}
	table.innerHTML += str;

	/* Display URL dropdown also*/
	
	urlList.innerHTML = url_str;
	
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
	var url = document.getElementById("searchfor").value;
	//var url = url_list.options[url_list.selectedIndex].innerHTML;

	var dropdown = document.getElementById("dropdown");
	var col = dropdown.options[dropdown.selectedIndex].value;

	var result = document.getElementById("result");

	var str = "";
	if(isValid(url) == false){
		result.innerHTML= "Please Enter a Valid URL to Search ";
	}
	else{
		var flag = false;
		for(i in repo_array){
			if(url == repo_array[i]["url"]){
				str = repo_array[i][col];
				flag = true;
			}
		}
		if(flag == true){
			result.innerHTML = " <h3> " +  col.toUpperCase() + " : "+ str  + " </h3>";
		}else {
			result.innerHTML = "<h3 style = 'color:red;'> DATA NOT FOUND! </h3>"
		}
		
	}
}
function isValid(url){
	return /https:\/\/github.com\/[a-zA-Z]+\/[a-zA-Z]+/.test(url) ;
	
}