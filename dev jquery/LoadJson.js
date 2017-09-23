$(document).ready(function () {
	$("#click-button").click(function () {
		var count = 1;
		 $.ajax({
			type : 'GET',
			url : 'resource.json',
			dataType : 'json',
			success : function (result) {
				console.log (result);
				$('<thead id = "deleteit"><tr><th>id</th><th>name</th> <th> provider</th> <th> url</th><th> delete</th></tr></thead>').appendTo("#append-data");
				$.each(result,function(index,val){
					
						var body = $('<tbody class = "deleteit2"><tr> <td> '+val.id+'</td><td> '+val.name+'</td> <td> '+val.provider+'</td> <td>' +val.url+'</td><td><button >delete</button></td></tr></tbody>').appendTo("#append-data");
					
						$('.idsetter').attr('id',"q"+count);
						 count++;
						/*delete table */
				
						$("#delete").click(function(){
						
							var deletevalue = $('#delete-input').val();
							$.get( 'resource.json', function(data)
								{
									console.log("loaded data for deleting");
									
									$.each(result,function(index,val){
									 if(val.id == deletevalue){
										 console.log("came inside");
										 val.splice(index,1);
										 
										  
									 }
								    });
								
						
								}),"json"
							
						});
						/*delete row*/
						$('#idsetter').click(function(){
							$('.idsetter').remove();
						});
				});
				$("#click-button").attr("disabled",true);
			}
		});
	});
});
/* $("#button-input").click (function () {
							var input =$('#filtertext').val();
							function filter(selector, input) {
							input =   $.trim(input); //trim white space
							input = input.replace(/ /gi, '|'); //add OR for regex query
								$(selector).each(function() {
									($(this).text().search(new RegExp(query, "i")) < 0) ? $(this).hide().removeClass('visible') : $(this).show().addClass('visible');
								});
							}
						}); */