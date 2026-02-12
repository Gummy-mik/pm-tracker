let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {
  let totalSites = Number(document.getElementById("totalSites").value);
  let visitsPerSite = Number(document.getElementById("visitsPerSite").value);
  let visitsSoFar = Number(document.getElementById("visitsSoFar").value);

  let totalRequired = totalSites * 2 ;
  
  console.log("Total Required Visits:", totalRequired); });
