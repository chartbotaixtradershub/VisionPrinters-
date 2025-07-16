// === VisionPrinters Dashboard Script ===

const backend_url = "https://ke-com-1.onrender.com";

// Handle login
function startLogin() {
  window.location.href = `${backend_url}/login`;
}

// Section switching
function switchSection(id) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// Load account + trades
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch(`${backend_url}/api/account_info`);
    const data = await res.json();

    if (data && data.balance && data.account_id) {
      document.getElementById("balance").textContent = "$" + parseFloat(data.balance).toFixed(2);
      document.getElementById("account_id").textContent = data.account_id;
      document.getElementById("currency").textContent = data.currency || "USD";
    }

    loadTradeLog();
  } catch (err) {
    console.log("User not logged in or server unavailable.");
  }
});

async function loadTradeLog() {
  try {
    const res = await fetch(`${backend_url}/api/trades`);
    const json = await res.json();
    const trades = json.trades || [];

    const tbody = document.getElementById("trade-log");
    tbody.innerHTML = "";

    if (trades.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5">No trades available.</td></tr>`;
      return;
    }

    trades.forEach((trade) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${trade.contract_type || "-"}</td>
        <td>$${parseFloat(trade.amount || 0).toFixed(2)}</td>
        <td>$${parseFloat(trade.profit || 0).toFixed(2)}</td>
        <td>${trade.status || "-"}</td>
        <td>${new Date(trade.timestamp * 1000).toLocaleString()}</td>
      `;
      tbody.appendChild(row);
    });
  } catch (e) {
    console.log("Error loading trades:", e);
  }
}
