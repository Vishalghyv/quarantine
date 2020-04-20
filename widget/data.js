function load(){  
      var request = new XMLHttpRequest();
      var root = document.getElementById("root");
  request.open('GET','https://api.covid19api.com/summary',true)
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      console.log(data);
      var locations = data["Countries"];
      console.log(locations);
      locations.forEach((location) =>{
        let e = document.createElement('table');
        var name = location["Country"];
        var cc = location["CountryCode"];
        var confirmed = location["TotalConfirmed"];
        console.log(confirmed);
        if(confirmed == 0) confirmed = '0';
        var deaths = location["TotalDeaths"];
        if(deaths == 0) deaths = '0';
        var recovered = location["TotalConfirmed"];
        if(recovered == 0) recovered = '0';
        // root.appendChild(container);
        let temp = ui("table",root,'',['container'+cc]);
        let row = ui("tr",temp,'',['header'+cc]);
        ui("th",row,'Country Name',['country-name'+cc]);
        ui("th",row,'Confirmed Cases',['country-cases'+cc]);
        ui("th",row,'No of deaths',['country-deaths'+cc]);
        ui("th",row,'Recovered',['country-recovered'+cc]);
        row = ui("tr",temp,'',['content-data'+cc]);
        ui("th",row,name,['country-name'+cc]);
        ui("th",row,confirmed,['country-data-cases'+cc]);
        ui("th",row,deaths,['country-data-deaths'+cc]);
        ui("th",row,recovered,['country-data-recovered'+cc]);

      })
    }
  }
  request.send();
  // ulTasks.innerText = 'fgd';
}

load();
 function ui(elementType,appendTo,innerHTML,classNameArray){
      let e = document.createElement(elementType);
      if(innerHTML) e.innerHTML = innerHTML;
      if(Array.isArray(classNameArray))
        classNameArray.forEach(c=>e.classList.add(c));
      if(appendTo) appendTo.appendChild(e);
      return e;
    }
