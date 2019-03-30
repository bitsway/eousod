$.afui.useOSThemes=false;
    $.afui.loadDefaultHash=true;
    $.afui.autoLaunch=false;

    //check search
    var search=document.location.search.toLowerCase().replace("?","");
    if(search.length>0)
    {

       $.afui.useOSThemes=true;
        if(search=="win8")
            $.os.ie=true;
        else if(search=="firefox")
            $.os.fennec="true"
        $.afui.ready(function(){
            $(document.body).get(0).className=(search);
        });
    }

/********  apipath *****************/

//var  apipath ='http://127.0.0.1:8000/epos/syncmobile_epos/'

//var apipath_image='http://i001.yeapps.com/image_hub/unigift/upload_image/'


var  apipath ='http://w02.yeapps.com/epos/syncmobile_epos/'
var apipath_image='http://i001.yeapps.com/image_hub/epos/upload_image/'

/******** EPOS apipath *****************/



    $(document).ready(function(){
        $.afui.launch();
		
		
		//getLocationInfo_ready();
		
		
	//alert ('aaa')
var linkPath_aboutus="window.open('http://eousod.com/about-us/', '_system');"
	var linkPath_onsale="window.open('http://eousod.com/product-category/discount/', '_system');"
	var linkPath_ordernow="window.open('http://eousod.com/order-now/', '_system');"
	var linkPath_prescription="window.open('http://eousod.com/upload-prescription/', '_system');"
	
	var aboutus='<img style="padding-top:0px; padding-bottom:0px;" hight="100px" width="90%" src="2.png" onclick="'+linkPath_aboutus+'">';
	var onsale='<img style="padding-top:0px; padding-bottom:0px;" hight="100px" width="90%" src="1.png" onclick="'+linkPath_onsale+'">';
	var ordernow='<img style="padding-top:0px; padding-bottom:0px;" hight="100px" width="90%" src="3.png" onclick="'+linkPath_ordernow+'">';
	var prescription='<img style="padding-top:0px; padding-bottom:0px;" hight="100px" width="90%" src="4.png" onclick="'+linkPath_prescription+'">';
	
	$('#aboutus').empty();
	$('#aboutus').append(aboutus);
	
	
	$('#onsale').empty();
	$('#onsale').append(onsale);
	
	$('#ordernow').empty();
	$('#ordernow').append(ordernow);
	
	$('#prescription').empty();
	$('#prescription').append(prescription);
	
	$.afui.loadContent("#page_home",true,true,'right');
	
		
		
    });

    //if($.os.ios)
        $.afui.animateHeader(true);
	//	getLocation()










//=============================================

//page_PrescriptionCapture

function homePage() {
	
	var linkPath_aboutus="window.open('http://eousod.com/about-us/', '_system');"
	var linkPath_onsale="window.open('http://eousod.com/product-category/discount/', '_system');"
	var linkPath_ordernow="window.open('http://eousod.com/order-now/', '_system');"
	var linkPath_prescription="window.open('http://eousod.com/upload-prescription/', '_system');"
	
	var aboutus='<img style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="this.jpg" onclick="'+linkPath_aboutus+'">';
	var onsale='<img style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="this.jpg" onclick="'+linkPath_onsale+'">';
	var ordernow='<img style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="this.jpg" onclick="'+linkPath_ordernow+'">';
	var prescription='<img style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="this.jpg" onclick="'+linkPath_prescription+'">';
	
	$('#aboutus').empty();
	$('#aboutus').append(aboutus);
	
	
	$('#onsale').empty();
	$('#onsale').append(onsale);
	
	$('#ordernow').empty();
	$('#ordernow').append(ordernow);
	
	$('#prescription').empty();
	$('#prescription').append(prescription);
	
	$.afui.loadContent("#page_home",true,true,'right');

}


