
setTimeout(executeAfterDelay, 10000);
	
    function executeAfterDelay() {
		var locidCustomer = document.getElementById("arid_WIN_0_536871994").value.trim(); 
		var locidKlasse = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);
		var statusStatus = document.getElementById("arid_WIN_0_536870917").value.trim(); 
		var locidEnds = document.getElementById("arid_WIN_0_536870999").value.trim(); 
		var locidBesc = document.getElementById("arid_WIN_0_536870990").value.trim(); 
		
		if (kozernCustomer == "voestalpine AG" && ttKlasse == "Main" && statusStatus == "zugewiesen"){
			locidBesc = locidBesc+"\n"+locidEnds;
		}
		
	}