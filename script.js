// Menunggu dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    const tombol = document.getElementById("btnSapa");

    // Menambahkan efek saat tombol diklik
    tombol.addEventListener("click", function() {
        alert("Halo Vogen! Senang bertemu denganmu di website ini.");
    });
});