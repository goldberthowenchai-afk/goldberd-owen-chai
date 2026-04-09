function kirim() {
    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;

    let jadwal = document.querySelector('input[name="jadwal"]:checked');

    let ekstra = [];
    let cek = document.querySelectorAll(".ekstra:checked");
    cek.forEach(function(item){
        ekstra.push(item.value);
    });

    if (nama === "" || kelas === "" || !jadwal) {
        document.getElementById("hasil").innerHTML = "Harap isi semua data wajib!";
        return;
    }

    document.getElementById("hasil").innerHTML =
        "Pendaftaran Berhasil! <br>" +
        "Nama: " + nama + "<br>" +
        "Kelas: " + kelas + "<br>" +
        "Jadwal: " + jadwal.value + "<br>" +
        "Ekstra: " + (ekstra.length ? ekstra.join(", ") : "Tidak ada");
}

function resetForm() {
    document.getElementById("formData").reset();
    document.getElementById("hasil").innerHTML = "";
}