/**************************************************
 SMART FACTORY FRONTEND DEMO – JAVASCRIPT
 Frontend only | Dummy data | Engineering logic
**************************************************/

/* ---------- 1. DUMMY FACTORY DATA ---------- */

// Energy data (kWh)
const machines = [
  { name: "Machine A", energyInput: 1200, usefulOutput: 900 },
  { name: "Machine B", energyInput: 1000, usefulOutput: 650 },
  { name: "Machine C", energyInput: 800, usefulOutput: 700 }
];

// Process flow data (cycle time in minutes)
const processFlow = [
  { stage: "Cutting", cycleTime: 5 },
  { stage: "Assembly", cycleTime: 12 },
  { stage: "Painting", cycleTime: 7 }
];

// System dynamics (production vs time)
const timeSteps = [1, 2, 3, 4, 5, 6];
const productionRate = [50, 55, 52, 48, 45, 40];
const inventoryLevel = [20, 25, 30, 38, 50, 65];

/* ---------- 2. ENERGY BALANCE CALCULATION ---------- */

function calculateEfficiency(machine) {
  return (machine.usefulOutput / machine.energyInput) * 100;
}

function loadEnergyTable() {
  let tableBody = document.getElementById("energyTable");
  tableBody.innerHTML = "";

  machines.forEach(machine => {
    let efficiency = calculateEfficiency(machine).toFixed(2);

    let row = `
      <tr>
        <td>${machine.name}</td>
        <td>${machine.energyInput}</td>
        <td>${machine.usefulOutput}</td>
        <td>${efficiency}%</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

/* ---------- 3. BOTTLENECK DETECTION ---------- */

function findBottleneck() {
  let bottleneck = processFlow.reduce((max, stage) =>
    stage.cycleTime > max.cycleTime ? stage : max
  );
  return bottleneck;
}

function loadProcessFlow() {
  let list = document.getElementById("processFlow");
  list.innerHTML = "";

  let bottleneck = findBottleneck();

  processFlow.forEach(stage => {
    let color = stage.stage === bottleneck.stage ? "red" : "green";
    list.innerHTML += `
      <li style="color:${color}">
        ${stage.stage} – ${stage.cycleTime} min
      </li>
    `;
  });
}

/* ---------- 4. INEFFICIENCY DETECTION ---------- */

function detectIssues() {
  let issues = [];

  machines.forEach(machine => {
    let efficiency = calculateEfficiency(machine);
    if (efficiency < 80) {
      issues.push(
        `${machine.name} has low energy efficiency (${efficiency.toFixed(
          1
        )}%).`
      );
    }
  });

  let bottleneck = findBottleneck();
  issues.push(`Production bottleneck detected at ${bottleneck.stage} stage.`);

  if (inventoryLevel[inventoryLevel.length - 1] > 50) {
    issues.push("Inventory buildup detected due to reduced production rate.");
  }

  return issues;
}

/* ---------- 5. OPTIMIZATION RECOMMENDATIONS ---------- */

function generateRecommendations() {
  let recommendations = [];

  machines.forEach(machine => {
    let efficiency = calculateEfficiency(machine);
    if (efficiency < 80) {
      recommendations.push(
        `Optimize ${machine.name} by reducing idle time or upgrading equipment.`
      );
    }
  });

  let bottleneck = findBottleneck();
  recommendations.push(
    `Improve throughput at ${bottleneck.stage} by redistributing workload.`
  );

  recommendations.push(
    "Schedule preventive maintenance to reduce future downtime."
  );

  return recommendations;
}

function loadRecommendations() {
  let recList = document.getElementById("recommendations");
  recList.innerHTML = "";

  let recs = generateRecommendations();
  recs.forEach(rec => {
    recList.innerHTML += `<li>${rec}</li>`;
  });
}

/* ---------- 6. CHARTS (Chart.js REQUIRED) ---------- */

function loadCharts() {
  const ctx1 = document.getElementById("productionChart").getContext("2d");
  const ctx2 = document.getElementById("inventoryChart").getContext("2d");

  new Chart(ctx1, {
    type: "line",
    data: {
      labels: timeSteps,
      datasets: [
        {
          label: "Production Rate",
          data: productionRate,
          borderWidth: 2
        }
      ]
    }
  });

  new Chart(ctx2, {
    type: "line",
    data: {
      labels: timeSteps,
      datasets: [
        {
          label: "Inventory Level",
          data: inventoryLevel,
          borderWidth: 2
        }
      ]
    }
  });
}

/* ---------- 7. INITIAL LOAD ---------- */

window.onload = function () {
  loadEnergyTable();
  loadProcessFlow();
  loadRecommendations();
  loadCharts();
};
function showSection(sectionId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.remove("active"));

    document.getElementById(sectionId).classList.add("active");
}
