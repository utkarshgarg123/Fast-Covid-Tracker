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
      out=arr.cases_time_series[arr.cases_time_series.length-1].totalconfirmed;
      document.getElementById("id01").innerHTML +='<h2 style="margin: auto;text-shadow: 2px 2px 4px #000000;"><u>Total Cases in India - '+ out +'</h2></u>';
    }