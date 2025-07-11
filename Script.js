function toggleInfo(id, htmlContent) {
  const element = document.getElementById(id);
  const isShowingInfo = element.dataset.open === "true";

  if (isShowingInfo) {
    
    element.innerHTML = element.dataset.label;
    element.dataset.open = "false";
  } else {
   
    element.innerHTML = htmlContent;
    element.dataset.open = "true";
  }
}
function showCPUInfo() {
    toggleInfo('cpu',`
       <p>Central Processing Unit - the brain of the computer!</p>
       <img src="assets/cpu.avif" alt="CPU Image" width="150">
    `);
}

function showRAMInfo() {
  toggleInfo('ram', `
    <p>RAM - Temporary memory for active processes.</p>
    <img src="assets/ramm.webp" width="150">
  `);
}

function showROMInfo() {
  toggleInfo('rom', `
    <p>ROM - Stores permanent system instructions.</p>
    <img src="assets/rom.jpg" width="150">
  `);
}

function showStorageInfo() {
  toggleInfo('Storage', `
    <p>Storage Drive - Long-term data storage.</p>
    <img src="assets/storage.webp" width="100" height="100">
  `);
}

function showPowerUnitInfo() {
  toggleInfo('power', `
    <p>Power Unit - Supplies power to all components.</p>
    <img src="assets/power.webp" width="150">
  `);
}

function switchToBIOS() {
  document.getElementById("motherboardView").style.display = "none";
  document.getElementById("biosScreen").style.display = "block";

}

function toggle(element) {
  element.textContent = element.textContent === "ON" ? "OFF" : "ON";
}


function SwitchToMotherboard() {
  document.getElementById("biosScreen").style.display = "none";
  document.getElementById("motherboardView").style.display = "block";
 
}
