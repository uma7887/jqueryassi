var arrobj = [];
var sort = [];
var namearray = [];
var results = [];
$(document).ready( function () {
	var obj = [];
	$(function () {
		$.ajax({
			type : 'GET',
			url : 'resource.json',
			success : function (result) {
					$.each(result,function(i,val){
					arrobj.push(val);	
				});
			}	
		});
	});
});

$('#click_button').click(function() {
	updateTable();
}); 

function updateTable() {
		$('#append_data').empty();
		$('#append_data').append('<thead><tr><th><a href ="#" onclick = "sortById();">Id</th><th><a href ="#" onclick = "sortByName();">name</th> <th><a href ="#" onclick = "sortByProvider();"> provider</a></th> <th> url</th><th> delete</th><th>edit</th></tr></thead>');
		$.each(arrobj,function(index, value){
			$('#append_data').append('<tbody class = "tbodyclass"><tr> <td> '+arrobj[index].id+'</td><td> '+arrobj[index].name+'</td> <td> '+arrobj[index].provider+'</td> <td>' +arrobj[index].url+'</td><td><button onclick = "deleterow('+index+');" >delete</button></td><td><button onclick = "editrow('+index+');" >edit</button></td></tr></tbody>');
		});		
}

function sortById() {
    arrobj.sort (sortByIdCallBack);		
    updateTable();
}

function sortByIdCallBack(a, b) {
	var aname = a.id.toLowerCase();
	var bname = b.id.toLowerCase();
	if (aname < bname) {
        return -1;
	}
	if (aname > bname) {
        return 1;
	}
   return 0;
   	
}

function sortByName() {
		
    arrobj.sort (sortByNameCallBack);		
    updateTable();
}

function sortByNameCallBack(a, b) {
	var aname = a.name.toLowerCase();
	var bname = b.name.toLowerCase();
	if (aname < bname) {
        return -1;
	}
	if (aname > bname) {
        return 1;
	}
   return 0;
   	
}
function sortByProvider() {
		
	arrobj.sort (sortByProviderCallBack);
	updateTable();

}

function sortByProviderCallBack(a, b) {
	var aname = a.provider.toLowerCase();
	var bname = b.provider.toLowerCase();
	if (aname < bname) {
        return -1;
	}
	if (aname > bname) {
        return 1;
	}
    return 0;
   	
}

function deleterow(index) {
	arrobj.splice(index,1);		
	updateTable();
}
					
function editrow(index) {
	$('#editPanel').empty();
	$('#TableDiv').css({"float" : "left", "width" : "50%", "display" : "inline-block"});
	var hideOnCancel = $('#ContentDiv').append('<div id = "editPanel" style = "float : right;display : inline-block;"></div>');
	$('#editPanel').append('ID <br><textarea id = "idedit">'+arrobj[index].id+'</textarea><br>Name <br><textarea id = "nameedit">'+arrobj[index].name+'</textarea><br>Provider <br><textarea id = "provideredit">'+arrobj[index].provider+'</textarea><br>Url <br><textarea id = "urledit">'+arrobj[index].url+'</textarea><br><button onclick = "saveedit('+index+');">save</button><span>  </span><button onclick = "cancel();">cancel</button>');						
}

function saveedit(index) {
	arrobj[index].id = $("#idedit").val();
	arrobj[index].name = $("#nameedit").val();
	arrobj[index].provider = $("#provideredit").val();
	arrobj[index].url = $("#urledit").val();
	updateTable();
	reSizeWindow();
	cancel();
}

function reSizeWindow() {
	$('#TableDiv').css({"float" : "left", "width" : "100%", "display" : "inline-block"});
}

function cancel() {
	$('#editPanel').empty();
	reSizeWindow();
}

$("#button_input").click(function () {
	if($('#filtertext').val() != ''){
		$('#ManipulateDiv').append('<button id = "resetfilter" onclick = "resetfilter()">reset table</button>');
		
		var inputdata = $('#filtertext').val();
		for(var i=0; i < arrobj.length; i++) {
		  for(key in arrobj[i]) {
			if(arrobj[i][key].indexOf(inputdata)!= 1) {
			  results.push(arrobj[i]);
			}
		  }
		} updateTableByFilter(); 
	}
});

function updateTableByFilter() {
	$('#append_data').empty();
	$.each (results, function(index,val) {
	$('#append_data').append('<tbody class = "tbodyclass"><tr> <td> '+results[index].id+'</td><td> '+results[index].name+'</td> <td> '+results[index].provider+'</td> <td>' +results[index].url+'</td><td><button onclick = "deleterow('+index+');" >delete</button></td><td><button onclick = "editrow('+index+');" >edit</button></td></tr></tbody>');
	});	
}

function resetfilter() {
	updateTable();
	$('#resetfilter').hide();	
}

$('#containsClick').click (function() {
	$('#ManipulateDiv').append('<button id = "resetfilter" onclick = "resetfilter()">reset table</button>');
	var inputdata = $('#filtertext').val();
	$('td:contains('+inputdata+')').css({"color" :"blue"});
});

$('#equalsClick').click (function() {
	$('#ManipulateDiv').append('<button id = "resetfilter" onclick = "resetfilter()">reset table</button>');
	var inputdata = $('#filtertext').val();
	$.each(arrobj,function (index, value ){
		for(key in arrobj[index]){
			if($('td('+value[key]+')')==inputdata){
				console.log("matched");
				td.css({"color" :"red"});
			}
		}
	});
});
