let ws; let token; let isBotRunning = false;

window.addEventListener("load", () => { // Hide splash screen after 5 seconds setTimeout(() => { const splash = document.getElementById("splash"); if (splash) splash.style.display = "none"; }, 5000);

const params = new URLSearchParams(window.location.search); token = params.get("token") ? decodeURIComponent(params.get("token")) : null; const account = params.get("acct") || "-"; const currency = params.get("cur") || "-";

document.getElementById("accountID").textContent = account; document.getElementById("currency").textContent = currency;

if (token) { initWebSocket(); document.getElementById("loginBtn").style.display = "none"; }

setTimeout(() => { document.getElementById("loading").style.display = "none"; document.getElementById("blocklyDiv").style.display = "block"; Blockly.inject("blocklyDiv", { toolbox: '<xml><block type="controls_if"></block><block type="logic_compare"></block></xml>' }); }, 2000);

document.getElementById("loginBtn").addEventListener("click", () => { window.location.href = "https://ke-com-1.onrender.com/login"; });

document.getElementById("xmlUpload").addEventListener("change", handleXMLUpload); });

function initWebSocket() { ws = new WebSocket("wss://ws.derivws.com/websockets/v3"); ws.onopen = () => { ws.send(JSON.stringify({ authorize: token })); };

ws.onmessage = (msg) => { const data = JSON.parse(msg.data); if (data.msg_type === "authorize") { getBalance(); } else if (data.msg_type === "balance") { document.getElementById("balance").textContent = $${data.balance.balance.toFixed(2)}; } }; }

function getBalance() { if (ws && ws.readyState === WebSocket.OPEN) { ws.send(JSON.stringify({ balance: 1, subscribe: 1 })); } }

function handleXMLUpload(event) { const file = event.target.files[0]; const reader = new FileReader(); reader.onload = () => { const xml = reader.result; const dom = Blockly.Xml.textToDom(xml); Blockly.mainWorkspace.clear(); Blockly.Xml.domToWorkspace(dom, Blockly.mainWorkspace); }; reader.readAsText(file); }

function runBot() { if (!token) return alert("Please log in first."); if (!ws || ws.readyState !== WebSocket.OPEN) return alert("WebSocket not ready."); if (isBotRunning) return alert("Bot already running.");

isBotRunning = true; console.log("Bot started"); // Add your bot execution logic here (this is where you'd compile and run Blockly code) }

function stopBot() { isBotRunning = false; console.log("Bot stopped"); // Stop bot logic here }

  
