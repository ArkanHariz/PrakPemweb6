// Persentase dari masing-masing tugas, uts, dan uas
const BOBOT_TUGAS = 0.3;
const BOBOT_UTS = 0.3;
const BOBOT_UAS = 0.4;

// Fungsi untuk menghitung nilai
function calculateGrade() {
    // Mengambil nilai dari inputan
    let tugas = parseFloat(document.getElementById("tugas").value);
    let uts = parseFloat(document.getElementById("uts").value);
    let uas = parseFloat(document.getElementById("uas").value);

    // Validasi inputan
    if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        document.getElementById("result").innerHTML = "Masukkan nilai antara 0 dan 100 untuk semua komponen.";
        return;
    }

    // Menghitung rata rata nilai
    let hasilRataRata = (tugas * BOBOT_TUGAS) + (uts * BOBOT_UTS) + (uas * BOBOT_UAS);

    // Klasifikasi nilai
    let nilai;
    if (hasilRataRata >= 90) {
        nilai = "A";
    } else if (hasilRataRata >= 80) {
        nilai = "B";
    } else if (hasilRataRata >= 70) {
        nilai = "C";
    } else if (hasilRataRata >= 60) {
        nilai = "D";
    } else {
        nilai = "E";
    }

    // Menampilkan hasil
    document.getElementById("result").innerHTML = `Nilai Akhir: ${hasilRataRata.toFixed(2)}<br>Grade: ${nilai}`;
}
