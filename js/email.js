/*FORMULAS REALIZADAS POR CTA*/
function ejemplo(edad,peso,creatinina,sexo,totaltexta){		
	
	edadtext=eval(edad.value);
	pesotext=eval(peso.value);
	creatininatext=eval(creatinina.value);
	
	total.value = edadtext + pesotext + creatininatext;
	totaltexta=eval(total.value);
}

function calculomatri(edad,peso,creatinina,sexo,totaltexta){	

	edadtext=eval(edad.value)
	pesotext=eval(peso.value);
	creatininatext=eval(creatinina.value);
	
	totalpes = (140-edadtext) * pesotext 	
	totalcrea = 72 * creatininatext;
	divis = totalpes / totalcrea
	
	if(sexo.value==2)
	{
		divisfin=divis*0.85
		
		total.value = +(divisfin).toFixed(2);
		totaltexta=eval(total.value);
	}
	else
	{
		total.value = +(divis).toFixed(2);
		totaltexta=eval(total.value);

	}
	
}

function calculomatri2(edad2,creatinina2,sexo2,raza2,totaltexta2){	
	
	edadtext=eval(edad2.value)
	creatininatext=eval(creatinina2.value);
	
	creatininaexp = Math.pow(creatininatext, -1.154);
	edadexp = Math.pow(edadtext, -0.203);

	totalpes2 = (186*creatininaexp*edadexp) 	
	
	if(sexo2.value==2 && raza2.value==2)
	{
		totalpes2=totalpes2*0.742*1.21
		
		total2.value = +(totalpes2).toFixed(2);
		totaltexta2=eval(total2.value);
	}
	else if(sexo2.value==2)
	{
		totalpes2=totalpes2*0.742
		
		total2.value = +(totalpes2).toFixed(2);
		totaltexta2=eval(total2.value);
	}
	else if(raza2.value==2)
	{
		totalpes2=totalpes2*1.21
		
		total2.value = +(totalpes2).toFixed(2);
		totaltexta2=eval(total2.value);
	}
	else
	{
		total2.value = +(totalpes2).toFixed(2);
		totaltexta2=eval(total2.value);
	}
	
}

function calculomatri3(creatinina3,edad3,bun3,albumina3,sexo3,raza3,totaltexta3){	
	creatininatext=eval(creatinina3.value)
	edadtext=eval(edad3.value)
	buntext=eval(bun3.value)
	albuminatext=eval(albumina3.value);
	
	creatininaexp = Math.pow(creatininatext, -0.999);
	edadexp = Math.pow(edadtext, -0,176);
	bunexp = Math.pow(buntext, -0.17);
	albuminaexp = Math.pow(albuminatext, 0.318);

	totalpes3 = (170*creatininaexp*edadexp*bunexp*albuminaexp) 	
	
	if(sexo3.value==2 && raza3.value==2)
	{
		totalpes3=totalpes3*0.762*1.18
		
		total3.value = +(totalpes3).toFixed(2);
		totaltexta3=eval(total3.value);
	}
	else if(sexo3.value==2)
	{
		totalpes3=totalpes3*0.762
		
		total3.value = +(totalpes3).toFixed(2);
		totaltexta3=eval(total3.value);
	}
	else if(raza3.value==2)
	{
		totalpes3=totalpes3*1.18
		
		total3.value = +(totalpes3).toFixed(2);
		totaltexta3=eval(total3.value);
	}
	else
	{
		total3.value = +(totalpes3).toFixed(2);
		totaltexta3=eval(total3.value);
	}
	
}

function calculomatri4(creatinina4,edad4,sexo4,totaltexta4){	
	creatininatext=eval(creatinina4.value)
	edadtext=eval(edad4.value) 	
	
    if(sexo4.value==1)
	{
		if(creatinina4.value<=0.9)
		{
			creatininadiv=creatininatext/0.9
			creatininaexp = Math.pow(creatininadiv, -0.411);
			edadexp = Math.pow(edadtext, 0.993);
		
			totalpes4 = (141*creatininaexp*edadexp)
			
			total4.value = +(totalpes4).toFixed(2);
			totaltexta4=eval(total4.value);
		}
		else if(creatinina4.value>0.9)
		{
			creatininadiv=creatininatext/0.9
			creatininaexp = Math.pow(creatininadiv, -1.209);
			edadexp = Math.pow(edadtext, 0.993);
		
			totalpes4 = (141*creatininaexp*edadexp)
			
			total4.value = +(totalpes4).toFixed(2);
			totaltexta4=eval(total4.value);	
		}
	}
	else if(sexo4.value==2)
	{
		if(creatinina4.value<=0.7)
		{
			
			creatininadiv=creatininatext/0.7
			creatininaexp = Math.pow(creatininadiv, -0.329);
			edadexp = Math.pow(edadtext, 0.993);
		
			totalpes4 = (144*creatininaexp*edadexp)
			
			total4.value = +(totalpes4).toFixed(2);
			totaltexta4=eval(total4.value);	
		}
		else if(creatinina4.value>0.7)
		{
			creatininadiv=creatininatext/0.7
			creatininaexp = Math.pow(creatininadiv, -1.209);
			edadexp = Math.pow(edadtext, 0.993);
		
			totalpes4 = (144*creatininaexp*edadexp)
			
			total4.value = +(totalpes4).toFixed(2);
			totaltexta4=eval(total4.value);	
		}
	}
	
}
/*FIN FORMULAS*/


function ajaxContact(theForm) {
var $ = jQuery;
$('#loader').fadeIn();
var formData = $(theForm).serialize(),
note = $('#Note');
$.ajax({
type: "POST",
url: "send.php",
data: formData,
success: function(response) {
if ( note.height() ) {			
note.fadeIn('fast', function() { $(this).hide(); });
} else {
note.hide();
}
$('#LoadingGraphic').fadeOut('fast', function() {
if (response === 'success') {
	
	$('.page_subtitle').hide();
	
}
// Message Sent? Show the 'Thank You' message and hide the form
var result = '';
var c = '';
if (response === 'success') { 
	result = 'Tu mensaje ha sido enviado correctamente';
	c = 'success';
} else {
	result = response;
	c = 'error';
}
note.removeClass('success').removeClass('error').text('');
var i = setInterval(function() {
	if ( !note.is(':visible') ) {
		note.html(result).addClass(c).slideDown('fast');
		clearInterval(i);
	}
}, 40);    
}); // end loading image fadeOut
}
});
return false;
}