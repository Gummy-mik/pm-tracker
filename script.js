let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {
  
  let RCBCBankSites = Number(document.getElementById("RCBCBankSites").value);
  let PLC = Number(document.getElementById("PLC").value);
  let Offsites = Number(document.getElementById("Offsites").value);
  let totalSites = Number(document.getElementById("totalSites").value);
  let visitsPerSite = Number(document.getElementById("visitsPerSite").value);
  let visitsSoFar = Number(document.getElementById("visitsSoFar").value);
  
  let totalSites = RCBCBankSites + PLC + Offsites;
  let totalRequired = totalSites * visitsPerSite;
  let remaining = totalRequired - visitsSoFar;
  
  console.log("Remaining Visits:", remaining);
  document.getElementById("result").textContent = "Remaining Visits:" + remaining;
});
