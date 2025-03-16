// Fungsi untuk menambahkan angka atau operator ke display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Fungsi untuk membersihkan display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Fungsi untuk menghitung hasil
function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        document.getElementById("display").value = result;
        saveToHistory(expression + " = " + result);
    } catch (error) {
        alert("Ekspresi tidak valid!");
    }
}

// Fungsi untuk menyimpan riwayat ke localStorage
function saveToHistory(calculation) {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    history.push(calculation);
    localStorage.setItem("calcHistory", JSON.stringify(history));
    loadHistory();
}

// Fungsi untuk memuat riwayat dari localStorage
function loadHistory() {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    let historyList = document.getElementById("history-list");
    historyList.innerHTML = "";

    history.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Fungsi untuk menghapus riwayat
function clearHistory() {
    localStorage.removeItem("calcHistory");
    loadHistory();
}

// Load history saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", loadHistory);
