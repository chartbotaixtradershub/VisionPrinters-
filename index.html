let ws; let token; let isBotRunning = false;

window.addEventListener("load", () => { setTimeout(() => { const splash = document.getElementById("splash"); if (splash) splash.style.display = "none"; }, 5000);

const params = new URLSearchParams(window.location.search); token = params.get("token") ? decodeURIComponent(params.get("token")) : null; const account = params.get("acct") || "-"; const currency = params.get("cur") || "-";

document.getElementById("accountID").textContent = account; document.getElementById("currency").textContent = currency;

if (token) { initWebSocket(); document.getElementById("loginBtn").style.display = "none"; }

setTimeout(() => { document.getElementById("loading").style.display = "none"; document.getElementById("blocklyDiv").style.display = "block"; Blockly.inject("blocklyDiv", { toolbox: document.getElementById("toolbox") }); }, 2000);

document.getElementById("loginBtn").addEventListener("click", () => { window.location.href = "https://ke-com-1.onrender.com/login"; });

document.getElementById("xmlUpload").addEventListener("change", handleXMLUpload); document.getElementById("sampleBotSelector").addEventListener("change", loadSampleBot); });

function initWebSocket() { ws = new WebSocket("wss://ws.derivws.com/websockets/v3"); ws.onopen = () => { ws.send(JSON.stringify({ authorize: token })); };

ws.onmessage = (msg) => { const data = JSON.parse(msg.data); if (data.msg_type === "authorize") { getBalance(); } else if (data.msg_type === "balance") { document.getElementById("balance").textContent = $${data.balance.balance.toFixed(2)}; } }; }

function getBalance() { if (ws && ws.readyState === WebSocket.OPEN) { ws.send(JSON.stringify({ balance: 1, subscribe: 1 })); } }

function handleXMLUpload(event) { const file = event.target.files[0]; const reader = new FileReader(); reader.onload = () => { const xml = reader.result; const dom = Blockly.Xml.textToDom(xml); Blockly.mainWorkspace.clear(); Blockly.Xml.domToWorkspace(dom, Blockly.mainWorkspace); }; reader.readAsText(file); }

function runBot() { if (!token) return alert("Please log in first."); if (!ws || ws.readyState !== WebSocket.OPEN) return alert("WebSocket not ready."); if (isBotRunning) return alert("Bot already running.");

isBotRunning = true; console.log("Bot started");

try { const code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace()); console.log("Generated JS Code:\n", code); eval(code); } catch (err) { console.error("Error running bot:", err); alert("There was an error executing the bot."); } }

function stopBot() { isBotRunning = false; console.log("Bot stopped"); // Add unsubscribe logic if needed }

function loadSampleBot(e) { const type = e.target.value; let xmlString = "";

if (type === "rise_fall") { xmlString =  <xml xmlns="https://developers.google.com/blockly/xml"> <block type="trade_definition_market" x="20" y="20"> <field name="MARKET_LIST">synthetic_index</field> <field name="SUBMARKET_LIST">random_index</field> <field name="SYMBOL_LIST">R_75</field> <next> <block type="trade_definition_tradeoptions"> <field name="TRADETYPE">CALL</field> <field name="DURATION">5</field> <field name="DURATIONTYPE">t</field> <next> <block type="purchase"></block> </next> </block> </next> </block> </xml>; } else if (type === "multiplier_bot") { xmlString =  <xml xmlns="https://developers.google.com/blockly/xml"> <block type="controls_repeat_ext" x="20" y="20"> <value name="TIMES"> <shadow type="math_number"> <field name="NUM">3</field> </shadow> </value> <statement name="DO"> <block type="trade_definition_market"> <field name="MARKET_LIST">synthetic_index</field> <field name="SUBMARKET_LIST">random_index</field> <field name="SYMBOL_LIST">R_50</field> <next> <block type="trade_definition_multiplier"> <field name="MULTIPLIER">50</field> <next> <block type="purchase"></block> </next> </block> </next> </block> </statement> </block> </xml>; } else { return; }

const dom = Blockly.Xml.textToDom(xmlString); Blockly.mainWorkspace.clear(); Blockly.Xml.domToWorkspace(dom, Blockly.mainWorkspace); }

