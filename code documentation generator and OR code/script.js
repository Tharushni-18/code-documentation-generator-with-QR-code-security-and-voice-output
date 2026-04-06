let docText = "";

// Generate Documentation
function generateDoc() {
    let code = document.getElementById("codeInput").value;

    let lines = code.split("\n").length;
    let functions = (code.match(/function/g) || []).length;
    let variables = (code.match(/var|let|const/g) || []).length;
    let loops = (code.match(/for|while/g) || []).length;
    let conditions = (code.match(/if/g) || []).length;

    docText =
        "Program Documentation. " +
        "Lines: " + lines + ", " +
        "Functions: " + functions + ", " +
        "Variables: " + variables + ", " +
        "Loops: " + loops + ", " +
        "Conditions: " + conditions;

    document.getElementById("documentation").innerText = docText;

    localStorage.setItem("doc", docText);

    generateQR(docText);
}

// Save for voice page
function saveDoc() {
    localStorage.setItem("doc", docText);
    alert("Saved!");
}

// Voice Output
function speakSaved() {
    let text = localStorage.getItem("doc");

    if (!text) {
        alert("No data found!");
        return;
    }

    document.getElementById("voiceText").innerText = text;

    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

// QR Generator
function generateQR(data) {
    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: data,
        width: 200,
        height: 200
    });
}