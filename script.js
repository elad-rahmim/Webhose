$(document).ready(function(){
    //valid email//
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    $( "#email" ).blur(function() {
        var $result = $("#result_email");
        var email = $("#email").val();
        $result.text("");
        if (validateEmail(email)) {
            
        } else {
            $result.text(email + " is not valid");
        }
        return false;
    });

    //valid domain//
    function is_url(str)
        {
        regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
                if (regexp.test(str))
                {
                return true;
                }
                else
                {
                return false;
                }
        }
    $("#domain").blur(function(){
        var $result_domain = $("#result_domain");
        var domain = $("#domain").val();
        $result_domain.text("");
        if(is_url(domain)){

        }
        else{
            $result_domain.text(domain + " is not valid");
        }
    });
    



    // Table Data
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
    $("#submit").click(function(){
        var email = document.getElementById("email").value;
        var	domain = document.getElementById("domain").value;
        var	Source_type = document.getElementById("Source_type").value;
        var  country = document.getElementById("country").value;
        var  reason = document.getElementById("reason").value;
      
        var valData = {
                  email: email,
                  domain: domain,
                  Source_type: Source_type,
                  country: country,
                  reason: reason
                }
        console.log(valData);        

		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td>'+email+'</td>' +
            '<td>'+domain+'</td>' +
            '<td>'+Source_type+'</td>' +
            '<td>'+country+'</td>' +
            '<td>'+reason+'</td>' +
			'<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		
        

     
	
	
    });
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });


    // select option country
    var dropdown = $('#country');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>Choose State/Province</option>');
    dropdown.prop('selectedIndex', 0);

    var url = 'https://api.myjson.com/bins/7xq2x';

    // Populate dropdown with list of provinces
    $.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
    })
    });
});



