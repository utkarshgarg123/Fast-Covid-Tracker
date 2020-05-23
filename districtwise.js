 var xmlhttp = new XMLHttpRequest();
    var url = "https://api.covid19india.org/districts_daily.json";
    
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) 
      {
        var myArr = JSON.parse(this.responseText);
        myDistrict(myArr);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function myDistrict(arr) 
    { var newarr= arr;
       
            stateSel = document.getElementById("stateSel"),
            districtSel = document.getElementById("districtSel");
                stateSel.length = 1; // remove all options bar first
                districtSel.length = 1; // remove all options bar first
            for (var state in newarr.districtsDaily) {
                 
            stateSel.options[stateSel.options.length] = new Option(state, state);
            }
             fcc();
            function fcc(){
                stateSel = document.getElementById("stateSel"),
            districtSel = document.getElementById("districtSel");
                stateSel.length = 1;
                districtSel.length = 1;  // remove all options bar first
                for (var state in newarr.districtsDaily) {
                stateSel.options[stateSel.options.length] = new Option(state, state);
                }
                // alert("fcc started");
                districtSel.length = 1; // remove all options bar first
                
                stateSel.onchange = function () {
                districtSel.length = 1; // remove all options bar first
                // alert("fn2 started");
                if (this.selectedIndex < 1) return; // done
            for(var district in newarr.districtsDaily[this.value]){
                // alert("hdh");
                districtSel.options[districtSel.options.length] = new Option(district, district);
            }
        }
    
        districtSel.onchange=function(){
    var selected_state= document.getElementById("stateSel").value;
    var selected_district= document.getElementById("districtSel").value;
        var ttt=newarr.districtsDaily;
    var kp=ttt[selected_state][selected_district].length-1;
    var out=ttt[selected_state][selected_district];
    document.getElementById("lpp").innerHTML ='<h3 style="color:white"> Total Confirmed cases in '+ selected_district+' - '+ out[kp].confirmed +'</h3> </pre>';
    document.getElementById("lpp").innerHTML +='<h3 style="color:white"> Active cases - '+ out[kp].active +'</h3> </pre>';
    document.getElementById("lpp").innerHTML +='<h3 style="color:white"> Last updated on - '+ out[kp].date +'</h3> </pre>';
     fcc();
}}
    }
// function fn1(){

    // }