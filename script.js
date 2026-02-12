let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {
  let totalSites = Number(document.getElementById("totalSites").value);
  let visitsPerSite = Number(document.getElementById("visitsPerSite").value);
  let visitsSoFar = Number(document.getElementById("visitsSoFar").value);

  let totalRequired = totalSites * visitsPerSite;
  let remaining = totalRequired - visitsSoFar;
  
  console.log("Remaining Visits:", remaining); });
