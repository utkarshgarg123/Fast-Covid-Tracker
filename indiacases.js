var xmlhttp = new XMLHttpRequest();
    var url = "https://api.covid19india.org/data.json";
    
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) 
      {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function myFunction(arr) 
    {
      var out = "";
      var out1 = "";
      out=arr.cases_time_series[arr.cases_time_series.length-1].totalconfirmed;
      out1=arr.cases_time_series[arr.cases_time_series.length-1].dailyconfirmed;
      document.getElementById("id01").innerHTML +='<h1 style="margin: auto;text-shadow: 1px 1px 2px #000000;"><u>Total Cases in India</u> -<span style="color: red;"> '+ out + '</span><div style="display:inline"> ( <i class="fa fa-long-arrow-up"></i><span style="color: red;"> '+out1+'</span>)</div></h1>';
    }
