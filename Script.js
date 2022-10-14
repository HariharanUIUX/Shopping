			
				/*lOGIN PAGE CODE START HERE*/
function validation(frm)
	{

		if(frm.Uname.value==null || frm.Uname.value==""){
		alert("Please Enter the Username");
			frm.Uname.focus();				// check empty Username textbox
			return false;
			}


		if(frm.Pwd.value==null || frm.Pwd.value==""){
		alert("Please Enter the Password");
			frm.Pwd.focus();				// check empty password textbox
			return false;
			}
	
			//alert("Welcome "+ frm.Uname.value);

			var passval=frm.Pwd.value;			//assign value to passval
			var passlen=passval.length;			//assign value length to passlen

		//alert("the password "+passval+" size: "+passlen);	
	
	
		if(passlen<8){
			alert("Minimum 8 characters need");	
			frm.Pwd.focus();			//check minimum 8 characters 
			return false;
			}

		if(passlen>16){
			alert("Maximum 16 characters need");	
			frm.Pwd.focus();			//check maximum 16 characters 
			return false;
			}

	
		var arr=['!','@','#','$','%','^','&','*'];

		var lc=0;
	
		var uc=0;

		var nm=0;

		var sp=0;
		
		var spl;
	


	
	
		for(var i=0;i<passlen;i++){
										
			
	
				for(j=0;j<passlen;j++){
		
					if(arr[i]==passval.charAt(j)){
			
						spl=passval.charAt(j);	
						
						sp=1;	
					//alert("The special symbol is "+spl)		
						
					}
				}
			}
		if(sp==0){
				alert("Minimum one special character required");
					frm.Pwd.focus();				
					return false;
						}
	

	
			for(var i=0;i<passlen;++i){
	
					var cp=passval.charAt(i);
													//alert("this "+ i +" & " +cp+" the password "+passval );
					var chkup=(cp.toUpperCase()==null)
	  					
						if(!isNaN(cp*1)){
		
						//alert("Value is number: " +cp);
								nm=1;			//check number present enter
							}

						else{


						if(cp==cp.toUpperCase()){
							
							if(cp==spl){
							 continue;
								}
						//alert("Value is UpperCase: " +cp);
								uc=1;			//check uppercase present enter 
							
								
							} 
					
																			
		 
						if(cp==cp.toLowerCase()){
							
							if(cp==spl){
							 continue;
								}
						//alert("Value is LowerCase: " +cp);	//lowercase present enter
								lc=1;
							}	

						
					} 
				
								
			}	if(isNaN(cp*1)){
						alert("minimum 1 number required");
						frm.Pwd.focus();
						return false;
						nm=0;
						}
				if(uc==0){
						alert("minimum 1 uppercase required");
						uc=0;
						}
				if(lc==0){
						alert("minimum 1 uppercase required");
						lc=0;
						}
		
	if(lc==1 && uc==1){						
	
		if(nm==1 && sp==1){
			
			confirm("login Successful");
			
			}
		
		}else{
			confirm("login failed");
			frm.Pwd.focus();
			return false;
			}
		
	


	
	return true;
	
	}

			
				/*lOGIN PAGE CODE END HERE*/


				/*SHOPPING PAGE CODE START HERE*/


var checkbox1,checkbox2,checkbox3,checkbox4,checkbox5,checkbox6,checkbox7,checkbox8,checkbox9,checkbox10,checkbox11,checkbox12;



function shop1(item){

		var checkbox1=document.getElementById("chk1");
	
		if(checkbox1.checked==true){

		document.getElementById("td1").value=20;

		var x=document.getElementById("n1").value;

		x=parseInt(x);

		y =document.getElementById("td1").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}


function shop2(item){

		var checkbox2=document.getElementById("chk2");
	
		if(checkbox2.checked==true){

		document.getElementById("td2").value=250;

		var x=document.getElementById("n2").value;

		x=parseInt(x);

		y =document.getElementById("td2").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}
	
function shop3(item){

		var checkbox3=document.getElementById("chk3");
	
		if(checkbox3.checked==true){

		document.getElementById("td3").value=500;

		var x=document.getElementById("n3").value;

		x=parseInt(x);

		y =document.getElementById("td3").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}

function shop4(item){

		var checkbox4=document.getElementById("chk4");
	
		if(checkbox4.checked==true){

		document.getElementById("td4").value=300;

		var x=document.getElementById("n4").value;

		x=parseInt(x);

		y =document.getElementById("td4").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}

function shop5(item){

		var checkbox5=document.getElementById("chk5");
	
		if(checkbox5.checked==true){

		document.getElementById("td5").value=50;

		var x=document.getElementById("n5").value;

		x=parseInt(x);

		y =document.getElementById("td5").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}

function shop6(item){

		var checkbox6=document.getElementById("chk6");
	
		if(checkbox6.checked==true){

		document.getElementById("td6").value=10000;

		var x=document.getElementById("n6").value;

		x=parseInt(x);

		y =document.getElementById("td6").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}

function shop7(item){

		var checkbox7=document.getElementById("chk7");
	
		if(checkbox7.checked==true){

		document.getElementById("td7").value=300;

		var x=document.getElementById("n7").value;

		x=parseInt(x);

		y =document.getElementById("td7").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}

function shop8(item){

		var checkbox8=document.getElementById("chk8");
	
		if(checkbox8.checked==true){

		document.getElementById("td8").value=1000;

		var x=document.getElementById("n8").value;

		x=parseInt(x);

		y =document.getElementById("td8").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}

function shop9(item){

		var checkbox9=document.getElementById("chk9");
	
		if(checkbox9.checked==true){

		document.getElementById("td9").value=20000;

		var x=document.getElementById("n9").value;

		x=parseInt(x);

		y =document.getElementById("td9").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}

function shop10(item){

		var checkbox10=document.getElementById("chk10");
	
		if(checkbox10.checked==true){

		document.getElementById("td10").value=2500;

		var x=document.getElementById("n10").value;

		x=parseInt(x);

		y =document.getElementById("td10").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}

function shop11(item){

		var checkbox11=document.getElementById("chk11");
	
		if(checkbox11.checked==true){

		document.getElementById("td11").value=1500;

		var x=document.getElementById("n11").value;

		x=parseInt(x);

		y =document.getElementById("td11").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}

function shop12(item){

		var checkbox12=document.getElementById("chk12");
	
		if(checkbox12.checked==true){

		document.getElementById("td12").value=8000;

		var x=document.getElementById("n12").value;

		x=parseInt(x);

		y =document.getElementById("td12").value;
	
		z=x*y;
		
		 alert(z); 
		} 
	}




			/*SHOPPING PAGE CODE END HERE*/