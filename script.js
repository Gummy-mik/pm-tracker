let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {
  let totalSites = number(document.getElementById("totalSites").value);
  let visitsPerSite = number(document.getElementById("visitsPerSite").value);
  let visitsSoFar = number(document.getElementById("visitsSoFar").value);

  let totalRequired = totalSites * visitsPerSite;
  
  console.log("Total Required Visits:", totalRequired); });
