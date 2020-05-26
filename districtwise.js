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
    document.getElementById("lpp").innerHTML ='<h2> Total Confirmed cases in '+ selected_district+' - <span style="color: rgb(132, 189, 116);">'+ out[kp].confirmed +'</h2></span> </pre>';
    document.getElementById("lpp").innerHTML +='<h2 > Active cases - <span style="color: red;">'+ out[kp].active +'</h2></span> </pre>';
    document.getElementById("lpp").innerHTML +='<h2> Last updated on :  <span style="color: rgb(51, 89, 138);">'+ out[kp].date +'</span></h2> </pre>';
     fcc();
}}
}
