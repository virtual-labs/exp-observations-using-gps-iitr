
pannellum.viewer('panorama-360-view', {
    "type": "equirectangular",
    "panorama": "https://i.ibb.co/42JSzBv/Screenshot-34.png",
    "autoLoad": true
})

function reset(){
    window.location.reload();
}
function esc(){

    window.close();
}
function power(){

        document.getElementById("power_on").style.display="inline";
        setTimeout(function(){ swal({position:'top-end', title:"Message",text:"Click on ENTER Button to proceed",icon: "info",button: "ok",}) }, 300);
        document.getElementById("enter").disabled = false;
}
function enter(){

    
    document.getElementById("power_on").style.display="none";
    document.getElementById("detect_sig").style.display="inline";
    document.getElementById("sig_img").style.display="inline";
    setTimeout(function(){ swal({position:'top-end', title:"Message",text:"Signals from minimum eight satellites are required.Click on IN button for observations",icon: "info",button: "ok",}) }, 1000);
    document.getElementById("in").disabled = false;
    
}
function start(){

    document.getElementById("person").style.display="inline";
    setTimeout(function(){ swal({title:"Message",text:"Click on POWER Button on device to turn on GPS",icon: "info",button: "ok",position:"center",}) }, 500);
    document.getElementById("power").disabled = false;
}
function In(){

    document.getElementById("detect_sig").style.display="none";
    document.getElementById("sig_img").style.display="none";
    document.getElementById("ob1").style.display="inline";
    setTimeout(function(){ swal({title:"Success",text:"Click on GOTO Button to save reading of locatiion 1",icon: "success",button: "ok",}) }, 500);
    document.getElementById("enter").disabled = true;
    document.getElementById("goto").disabled = false;
}

function Goto()
{

    if(document.getElementById("ob8").style.display === 'inline')
    {

        document.getElementById("ob8").style.display = "none";
        document.getElementById("goto").disabled = true;
        setTimeout(function(){ swal({title:"Success",text:"Now click on the NAVIGATION Button to check all the readings stored. ",icon: "success",button: "ok",}) }, 500);
        document.getElementById("nav").disabled = false;
    }
    else
    {
        
        document.getElementById("detect_sig").style.display="none";
        document.getElementById("sig_img").style.display="none";
        document.getElementById("ob1").style.display="none";
        document.getElementById("ob2").style.display="none";
        document.getElementById("ob3").style.display="none";
        document.getElementById("ob4").style.display="none";
        document.getElementById("ob5").style.display="none";
        document.getElementById("ob6").style.display="none";
        document.getElementById("ob7").style.display="none";
        document.getElementById("ob8").style.display="none";
        setTimeout(function(){ swal({title:"Success",text:"Observations are saved successfully!! ",icon: "success",button: "ok",}) }, 500);
        setTimeout(function(){ swal({title:"Message",text:"Click on change location ",icon: "success",button: "ok",}) }, 2500);
        document.getElementById("change_loc").disabled = false;
        document.getElementById("power").disabled = true;
        document.getElementById("enter").disabled = true;
        document.getElementById("in").disabled = true;
    
    }


}

 function change_loc(){

    if(document.getElementById("person").style.display === 'inline')
    {

        document.getElementById("person").style.display="none";
        document.getElementById("person2").style.display="inline";
        document.getElementById("ob2").style.display="inline";
        document.getElementById("start").disabled = true;
        document.getElementById("power").disabled = true;
        document.getElementById("enter").disabled = true;
        document.getElementById("in").disabled = true;
        setTimeout(function(){ swal({title:"Success",text:"Click on GOTO Button to save reading of locatiion 2",icon: "success",button: "ok",}) }, 500);


    }
   else 
   if(document.getElementById("person2").style.display === 'inline')
   {

       document.getElementById("person2").style.display="none";
       document.getElementById("person3").style.display="inline";
       document.getElementById("ob3").style.display="inline";
       document.getElementById("start").disabled = true;
       document.getElementById("power").disabled = true;
       document.getElementById("enter").disabled = true;
       document.getElementById("in").disabled = true;
       setTimeout(function(){ swal({title:"Success",text:"Click on GOTO Button to save reading of locatiion 3",icon: "success",button: "ok",}) }, 500);
   }
   else 
   if(document.getElementById("person3").style.display === 'inline')
   {

       document.getElementById("person3").style.display="none";
       document.getElementById("person4").style.display="inline";
       document.getElementById("ob4").style.display="inline";
       document.getElementById("start").disabled = true;
       document.getElementById("power").disabled = true;
       document.getElementById("enter").disabled = true;
       document.getElementById("in").disabled = true;
       setTimeout(function(){ swal({title:"Success",text:"Click on GOTO Button to save reading of locatiion 4",icon: "success",button: "ok",}) }, 500);
   }
   else 
   if(document.getElementById("person4").style.display === 'inline')
   {

       document.getElementById("person4").style.display="none";
       document.getElementById("person5").style.display="inline";
       document.getElementById("ob5").style.display="inline";
       document.getElementById("start").disabled = true;
       document.getElementById("power").disabled = true;
       document.getElementById("enter").disabled = true;
       document.getElementById("in").disabled = true;
       setTimeout(function(){ swal({title:"Success",text:"Click on GOTO Button to save reading of locatiion 5",icon: "success",button: "ok",}) }, 500);
   }
   else 
   if(document.getElementById("person5").style.display === 'inline')
   {

       document.getElementById("person5").style.display="none";
       document.getElementById("person6").style.display="inline";
       document.getElementById("ob6").style.display="inline";
       document.getElementById("start").disabled = true;
       document.getElementById("power").disabled = true;
       document.getElementById("enter").disabled = true;
       document.getElementById("in").disabled = true;
       setTimeout(function(){ swal({title:"Success",text:"Click on GOTO Button to save reading of locatiion 6",icon: "success",button: "ok",}) }, 500);
   }
   else 
   if(document.getElementById("person6").style.display === 'inline')
   {

       document.getElementById("person6").style.display="none";
       document.getElementById("person7").style.display="inline";
       document.getElementById("ob7").style.display="inline";
       document.getElementById("start").disabled = true;
       document.getElementById("power").disabled = true;
       document.getElementById("enter").disabled = true;
       document.getElementById("in").disabled = true;
       setTimeout(function(){ swal({title:"Success",text:"Click on GOTO Button to save reading of locatiion 7",icon: "success",button: "ok",}) }, 500);
   }
   else 
   if(document.getElementById("person7").style.display === 'inline')
   {

       document.getElementById("person7").style.display="none";
       document.getElementById("person8").style.display="inline";
       document.getElementById("ob8").style.display="inline";
       document.getElementById("start").disabled = true;
       document.getElementById("power").disabled = true;
       document.getElementById("enter").disabled = true;
       document.getElementById("in").disabled = true;
       setTimeout(function(){ swal({title:"Success", text:"Click on GOTO Button to save reading of locatiion 8", icon: "success",button: "ok",}) }, 500);
       setTimeout(function(){ swal({title:"Success", text:"Click on the NAVIGATION Button to go through all the readings saved", icon: "success",button: "ok",}) }, 10000);
       document.getElementById("nav").disabled = false;
   }
   
        
 }
 function nav()
 {
    document.getElementById("left_ar").disabled = false;
    document.getElementById("right_ar").disabled = false;
    document.getElementById("ob1").style.display ="inline";
}
function left_ar()
 {

    if(document.getElementById("ob1").style.display === 'inline')
    {
        setTimeout(function(){ swal({title:"Error", text:"These are the First Observations !!", icon: "error",button: "ok",}) }, 500);
    }
    else if(document.getElementById("ob2").style.display === 'inline')
    {
        document.getElementById("ob2").style.display="none";
        document.getElementById("ob1").style.display="inline";
    }
    else if(document.getElementById("ob3").style.display === 'inline')
    {
        document.getElementById("ob3").style.display="none";
        document.getElementById("ob2").style.display="inline";
    }
    else if(document.getElementById("ob4").style.display === 'inline')
    {
        document.getElementById("ob4").style.display="none";
        document.getElementById("ob3").style.display="inline";
    }
    else if(document.getElementById("ob5").style.display === 'inline')
    {
        document.getElementById("ob5").style.display="none";
        document.getElementById("ob4").style.display="inline";
    }
    else if(document.getElementById("ob6").style.display === 'inline')
    {
        document.getElementById("ob6").style.display="none";
        document.getElementById("ob5").style.display="inline";
    }
    else if(document.getElementById("ob7").style.display === 'inline')
    {
        document.getElementById("ob7").style.display="none";
        document.getElementById("ob6").style.display="inline";
    }

}

 function right_ar()
 {

    if(document.getElementById("ob1").style.display === 'inline')
    {
        document.getElementById("ob1").style.display="none";
        document.getElementById("ob2").style.display="inline";
    }
    else if(document.getElementById("ob2").style.display === 'inline')
    {
        document.getElementById("ob1").style.display="none";
        document.getElementById("ob2").style.display="none";
        document.getElementById("ob3").style.display="inline";
    }
    else if(document.getElementById("ob3").style.display === 'inline')
    {
        document.getElementById("ob1").style.display="none";
        document.getElementById("ob2").style.display="none";
        document.getElementById("ob3").style.display="none";
        document.getElementById("ob4").style.display="inline";
    }
    else if(document.getElementById("ob4").style.display === 'inline')
    {
        document.getElementById("ob1").style.display="none";
        document.getElementById("ob2").style.display="none";
        document.getElementById("ob3").style.display="none";
        document.getElementById("ob4").style.display="none";
        document.getElementById("ob5").style.display="inline";
    }
    else if(document.getElementById("ob5").style.display === 'inline')
    {
        document.getElementById("ob1").style.display="none";
        document.getElementById("ob2").style.display="none";
        document.getElementById("ob3").style.display="none";
        document.getElementById("ob4").style.display="none";
        document.getElementById("ob5").style.display="none";
        document.getElementById("ob6").style.display="inline";
    }
    else if(document.getElementById("ob6").style.display === 'inline')
    {
        document.getElementById("ob1").style.display="none";
        document.getElementById("ob2").style.display="none";
        document.getElementById("ob3").style.display="none";
        document.getElementById("ob4").style.display="none";
        document.getElementById("ob5").style.display="none";
        document.getElementById("ob6").style.display="none";
        document.getElementById("ob7").style.display="inline";
    }
    else if(document.getElementById("ob7").style.display === 'inline')
    {
        document.getElementById("ob1").style.display="none";
        document.getElementById("ob2").style.display="none";
        document.getElementById("ob3").style.display="none";
        document.getElementById("ob4").style.display="none";
        document.getElementById("ob5").style.display="none";
        document.getElementById("ob6").style.display="none";
        document.getElementById("ob7").style.display="none";
        document.getElementById("ob8").style.display="inline";
    }
    else if(document.getElementById("ob8").style.display === 'inline')
    {
        setTimeout(function(){ swal({title:"Error", text:"These are the Last Observations !!", icon: "error",button: "ok",}) }, 500);
    }

}