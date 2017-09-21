var arrobj = [];
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
				console.log(arrobj);	
			}	
		});
	});
	
	
	
});

$('#click_button').click(function loadTable() {
		$('#append_data').append('<thead><tr><th>id</th><th><a href ="#" onclick = "sortit();">name</a></th> <th> provider</th> <th> url</th><th> delete</th><th>edit</th></tr></thead>');
		$.each(arrobj,function(index,value){
			$('#append_data').append('<tbody><tr> <td class = "sortit"> '+arrobj[index].id+'</td><td> '+arrobj[index].name+'</td> <td> '+arrobj[index].provider+'</td> <td>' +arrobj[index].url+'</td><td><button onclick = "deleterow('+index+');" >delete</button></td><td><button onclick = "editrow('+index+');" >edit</button></td></tr></tbody>');
		});		

});
function updateTable() {
		$('#append_data').empty();
		$('#append_data').append('<thead><tr><th>id</th><th>name</th> <th> provider</th> <th> url</th><th> delete</th><th>edit</th></tr></thead>');
		$.each(arrobj,function(index,value){
			$('#append_data').append('<tbody><tr> <td> '+arrobj[index].id+'</td><td> '+arrobj[index].name+'</td> <td> '+arrobj[index].provider+'</td> <td>' +arrobj[index].url+'</td><td><button onclick = "deleterow('+index+');" >delete</button></td><td><button onclick = "editrow('+index+');" >edit</button></td></tr></tbody>');
		});		
		
}
function sortit() {
	
}
function deleterow(index) {
	arrobj.splice(index,1);		
	console.log(arrobj);
	updateTable();
}


					
function editrow(index) {
							
}
