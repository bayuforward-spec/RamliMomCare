/* =========================================================
   Ruang Kelas — Siap Hamil 90 Hari (konfigurasi & isi)
   CARA MENGISI VIDEO: tempel link YouTube (unlisted) ke `youtube`
   untuk video yang sudah siap, mis.
     youtube: 'https://youtu.be/AbCdEfGhIjK'
   Selama `youtube` null, kartu video menampilkan "Video segera tersedia".
   `pdf`: path ringkasan PDF per video (null = segera tersedia).
   ========================================================= */
window.SH90 = {
    ruangKelas: 'ruang-kelas-90-hari-0c8b7bbe9e89.html',
    // Asisten AI: isi dengan URL Cloudflare Worker setelah dipasang,
    // mis. 'https://asisten-sh90.<akun>.workers.dev'. Selama null, chat tampil "segera aktif".
    ai: { endpoint: 'https://asisten-sh90.bayuforward.workers.dev', limit: 10 },
    unduhan: {
        sumber: 'unduhan/234e9b442415a3f1/daftar-sumber-siap-hamil-90-hari.pdf',
        konsultasi: 'unduhan/5747d686459ab810/lembar-persiapan-konsultasi.pdf',
        cekPraHamil: 'unduhan/5747d686459ab810/daftar-cek-sebelum-hamil.pdf'
    },
    videos: [
 {
  "no": "00",
  "judul": "Pengantar: Cara Memakai Program Ini",
  "durasi": "13–15 menit",
  "ringkasan": "Tiga bulan bukan angka asal. Sel sperma butuh sekitar dua bulan lebih untuk terbentuk dan matang, asam folat perlu diminum sebelum kehamilan terjadi, dan beberapa vaksin perlu jeda sebelum boleh hamil. Program ini membagi tiga bulan itu menjadi tiga fase: Kenali & Periksa, Perbaiki, lalu Mencoba dengan Tenang. Setiap minggu ada checklist untuk istri dan suami. Program ini adalah edukasi, bukan jaminan hamil. Bila ada tanda bahaya atau kondisi tertentu, jangan menunggu: segera periksa.",
  "checklist": [
   "Istri: catat tanggal haid terakhir",
   "Suami & istri: daftar obat/vitamin/jamu",
   "Berdua: jadwalkan rapat kecil mingguan"
  ],
  "id": "00",
  "fase": "pengantar",
  "youtube": "https://youtu.be/KuE1eyKxY-U",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-00.pdf"
 },
 {
  "no": "01",
  "judul": "Mulai Asam Folat & Catat Siklus",
  "durasi": "20–22 menit",
  "ringkasan": "Asam folat adalah vitamin B yang membantu menutup tabung saraf janin di minggu-minggu awal kehamilan, sering sebelum ibu tahu dirinya hamil. Karena itu, minumlah 400 mikrogram setiap hari mulai sekarang, idealnya sedikitnya satu bulan sebelum hamil, dan lanjutkan sampai trimester pertama. Sebagian ibu butuh dosis lain yang ditentukan dokter. Di saat yang sama, mulailah mencatat siklus haid: hari pertama haid, lama haid, banyaknya darah, dan keluhan. Catatan ini menjadi dasar untuk memahami masa subur di Video 02 dan sangat membantu dokter bila suatu saat Anda perlu berkonsultasi.",
  "checklist": [
   "Istri: asam folat 400 µg setiap hari",
   "Istri: mulai catat siklus (5 hal)",
   "Suami: siapkan tablet + alarm + tempel kalender",
   "Berdua: hitung kepatuhan minggu ini (target 7/7)"
  ],
  "id": "01",
  "fase": "1",
  "youtube": "https://youtu.be/uhOsR7BSYAM",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-01.pdf"
 },
 {
  "no": "02",
  "judul": "Memahami Masa Subur",
  "durasi": "20–22 menit",
  "ringkasan": "Kehamilan hampir selalu berasal dari hubungan suami istri dalam rentang sekitar 6 hari: lima hari sebelum ovulasi ditambah hari ovulasi itu sendiri. Sperma bisa bertahan sampai sekitar lima hari, sedangkan sel telur hanya sekitar satu hari. Waktu ovulasi berbeda-beda pada setiap perempuan, bahkan dari bulan ke bulan, sehingga \"hari ke-14\" hanyalah rata-rata. Tanda yang bisa dikenali antara lain lendir serviks yang bening, licin, dan elastis, serta hasil tes ovulasi urin yang positif. Suhu basal membantu memastikan ovulasi sudah terjadi. Pegangan praktisnya: berhubungan setiap 1–2 hari saat tanda subur muncul, atau cukup rutin 2–3 kali seminggu bila memantau terasa melelahkan.",
  "checklist": [
   "Istri: hitung perkiraan masa subur",
   "Istri: catat lendir harian (kering/kental/licin-bening)",
   "Istri (opsional): suhu basal atau tes ovulasi",
   "Suami: pahami konsep masa subur",
   "Berdua: sepakati strategi siklus ini"
  ],
  "id": "02",
  "fase": "1",
  "youtube": "https://youtu.be/LuID5F6_G-A",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-02.pdf"
 },
 {
  "no": "03",
  "judul": "Cek Kesehatan Istri",
  "durasi": "20–22 menit",
  "ringkasan": "Pemeriksaan sebelum hamil memberi waktu untuk menemukan dan memperbaiki hal-hal yang lebih sulit ditangani setelah hamil. Pemeriksaan dasar meliputi wawancara riwayat kesehatan, tekanan darah, berat badan, darah lengkap, golongan darah dan rhesus, serta skrining HIV, sifilis, dan hepatitis B sesuai program Kemenkes. Cek kekebalan rubela; bila belum kebal, vaksin MR/MMR lalu tunda kehamilan sekitar 1 bulan. Lengkapi juga hepatitis B, cacar air bila belum kebal, dan tetanus sesuai status. Periksakan gigi dan gusi. Bawa semua obat, suplemen, dan jamu ke dokter untuk ditinjau. Jangan menghentikan atau mengganti obat sendiri.",
  "checklist": [
   "Istri: buat janji periksa sebelum hamil",
   "Istri: siapkan catatan siklus, riwayat, daftar pertanyaan",
   "Istri: kumpulkan semua obat/suplemen/jamu",
   "Istri: janji ke dokter gigi",
   "Suami: temani periksa",
   "Suami: kumpulkan riwayat penyakit keluarga",
   "Berdua: rencana kontrasepsi 1 bulan bila vaksin hidup"
  ],
  "id": "03",
  "fase": "1",
  "youtube": "https://youtu.be/cGLzDLKE_oA",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-03.pdf"
 },
 {
  "no": "04",
  "judul": "Cek Kesehatan Suami",
  "durasi": "±27 menit",
  "ringkasan": "Kehamilan butuh dua sel: sel telur dari istri dan sel sperma dari suami. Pada pasangan yang sulit hamil, faktor suami ikut berperan pada sekitar separuh kasus. Sperma dibentuk dalam waktu sekitar 2–3 bulan, sehingga perbaikan yang suami lakukan hari ini baru terlihat pada sperma beberapa bulan lagi. Video ini membahas kapan analisis sperma dibutuhkan, cara mempersiapkannya (pantang ejakulasi 2–7 hari sesuai panduan laboratorium WHO edisi ke-6), cara mengambil sampel yang benar, riwayat yang perlu diceritakan ke dokter, dan pemeriksaan umum suami. Cara membaca hasilnya kita bahas lengkap di Video Bonus Khusus Suami.",
  "checklist": [
   "Suami: tulis catatan riwayat (masa kecil, infeksi, penyakit, obat/suplemen, rokok/alkohol/pekerjaan, kehidupan seksual, riwayat punya anak, usia).",
   "Suami: foto/catat semua obat, jamu, dan suplemen. Jangan menghentikan obat resep sendiri.",
   "Suami: tentukan apakah termasuk kelompok \"periksa lebih awal\"; bila ya, buat janji dokter.",
   "Suami: bila akan analisis sperma, hubungi laboratorium (lokasi pengambilan, jam terima, wadah).",
   "Suami: rencanakan pantang ejakulasi 2–7 hari (misal 3–5 hari) dan catat tanggalnya.",
   "Suami: cek tekanan darah dan berat badan di puskesmas/posbindu.",
   "Istri: bantu lengkapi catatan riwayat suami, dampingi tanpa menyalahkan.",
   "Berdua: jadwalkan satu waktu konsultasi bersama."
  ],
  "id": "04",
  "fase": "1",
  "youtube": "https://youtu.be/wE0b8uVzgRU",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-04.pdf"
 },
 {
  "no": "05",
  "judul": "Gizi Seimbang untuk Berdua",
  "durasi": "±24 menit",
  "ringkasan": "Tidak ada satu makanan ajaib yang membuat hamil. Yang berpengaruh adalah pola makan sehari-hari. Gunakan Isi Piringku: setengah piring sayur dan buah, setengah piring lagi makanan pokok dan lauk-pauk. Istri tetap minum asam folat 400 µg/hari, mencukupi zat besi dan yodium, serta makan protein dan ikan. Suami juga perlu makan sehat karena kualitas sperma ikut dipengaruhi pola makan. Penelitian menunjukkan pola makan bergaya Mediterania, yang kaya sayur, buah, kacang, biji-bijian utuh, ikan, dan minyak sehat, berhubungan dengan kualitas sperma dan peluang hamil yang lebih baik, walaupun buktinya belum kuat. Pilih ikan rendah merkuri 2–3 porsi per minggu. Suplemen \"penyubur\" untuk suami belum terbukti kuat.",
  "checklist": [
   "Berdua: foto piring makan 3 hari, bandingkan dengan Isi Piringku.",
   "Berdua: tambah 1 porsi sayur di makan siang dan makan malam.",
   "Berdua: makan ikan rendah merkuri minimal 2 kali minggu ini.",
   "Berdua: buah lokal sebagai camilan minimal 1 kali/hari.",
   "Istri: asam folat 400 µg/hari, tidak terlewat.",
   "Istri: beri jeda 1–2 jam antara teh/kopi dan makan.",
   "Suami: ganti 1 kebiasaan (minuman manis → air putih, atau gorengan → buah/kacang rebus).",
   "Suami: catat suplemen yang sedang diminum untuk dibahas dengan dokter."
  ],
  "id": "05",
  "fase": "2",
  "youtube": "https://youtu.be/pjyfs5URpmA",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-05.pdf"
 },
 {
  "no": "06",
  "judul": "Berat Badan & Aktivitas Fisik",
  "durasi": "±25 menit",
  "ringkasan": "Berat badan yang terlalu rendah maupun terlalu tinggi bisa membuat ovulasi tidak teratur, dan pada pria, kegemukan berhubungan dengan jumlah sperma yang lebih rendah. Menurut klasifikasi Kemenkes, IMT normal adalah 18,5–25,0; di atas 25,0 termasuk berat badan lebih, dan di atas 27,0 termasuk obesitas. Bila berat badan berlebih, target awal yang realistis adalah turun 5–10% dari berat sekarang, dengan kecepatan sekitar 0,5–1 kg per minggu. Bergeraklah 150–300 menit per minggu dengan intensitas sedang, ditambah latihan kekuatan otot dua kali seminggu. Tidur cukup dan kelola stres. Semua ini dijalani berdua, tanpa saling menyalahkan dan tanpa diet ekstrem.",
  "checklist": [
   "Berdua: ukur BB, TB, lingkar perut; hitung IMT (klasifikasi Kemenkes); catat sebagai angka awal.",
   "Berdua: bila berlebih, tetapkan target turun 5–10% dalam 90 hari (0,5–1 kg/minggu).",
   "Berdua: jalan cepat bersama ≥3 kali × 30 menit.",
   "Berdua: latihan kekuatan otot 2 sesi (squat, push-up dinding, plank).",
   "Berdua: jam tidur dan bangun yang sama; ponsel jauh 30 menit sebelum tidur.",
   "Berdua: 15 menit \"ngobrol perasaan\" seminggu sekali.",
   "Istri: catat siklus haid (lanjutan Video 01).",
   "Suami: ukur lingkar perut; amati ngorok/napas berhenti saat tidur."
  ],
  "id": "06",
  "fase": "2",
  "youtube": "https://youtu.be/6y2g2Ajd4qY",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-06.pdf"
 },
 {
  "no": "07",
  "judul": "Rokok, Kafein, Alkohol & Paparan Kerja",
  "durasi": "26–28 menit",
  "ringkasan": "Sel telur dan sperma yang akan menjadi bayi Anda sedang \"dimatangkan\" dalam beberapa bulan ini, sehingga apa yang Anda berdua hirup, minum, dan sentuh sekarang ikut berpengaruh. Rokok, baik dihisap sendiri maupun asap dari orang lain, menurunkan kualitas sperma dan sel telur serta meningkatkan risiko keguguran; berhentinya harus berdua dan boleh dibantu tenaga kesehatan. Kafein tidak perlu dihentikan total: batasi di bawah 200 mg per hari, kira-kira satu sampai dua cangkir kopi. Alkohol sebaiknya dihindari. Untuk paparan kerja, kenali risikonya, pakai pelindung, dan bicarakan dengan dokter.",
  "checklist": [
   "Istri: Catat semua minuman berkafein selama 3 hari; pastikan total < 200 mg/hari.",
   "Istri: Periksa kosmetik/krim wajah; singkirkan yang tidak terdaftar resmi.",
   "Istri: Tidak minum alkohol sama sekali.",
   "Suami: Jika merokok, tetapkan tanggal berhenti (≤ 2 minggu lagi) dan tulis di kalender.",
   "Suami: Cari informasi layanan berhenti merokok di puskesmas/klinik terdekat.",
   "Suami: Jika bekerja dengan panas/kimia/pestisida, pakai alat pelindung diri setiap hari; hindari sauna/berendam air panas.",
   "Berdua: Rumah dan mobil = zona bebas asap; minta keluarga yang berkunjung ikut menghormati.",
   "Berdua: Siapkan \"toples tabungan\" dari uang rokok yang dihemat.",
   "Berdua: Panaskan makanan di wadah kaca/keramik, bukan plastik."
  ],
  "id": "07",
  "fase": "2",
  "youtube": "https://youtu.be/Kn5UiP9ZvRM",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-07.pdf"
 },
 {
  "no": "08",
  "judul": "Penyakit Kronik & Obat Rutin",
  "durasi": "29–31 menit",
  "ringkasan": "Banyak perempuan dan laki-laki dengan darah tinggi, diabetes, gangguan tiroid, epilepsi, lupus, penyakit jantung, asma, atau depresi bisa menjalani kehamilan yang sehat, asalkan direncanakan. Kuncinya: penyakit dikendalikan dulu, obat ditinjau dan bila perlu diganti dengan yang lebih aman untuk kehamilan, lalu dipantau ketat. Beberapa obat perlu diganti sebelum hamil, tetapi menghentikan obat sendiri bisa lebih berbahaya daripada obatnya. Bawa daftar obat Anda berdua ke dokter, dan buat rencana bersama.",
  "checklist": [
   "Istri: Tulis daftar semua obat, suplemen, dan jamu (nama zat, dosis, frekuensi); foto kemasannya.",
   "Istri: Jika punya darah tinggi, ukur dan catat tekanan darah 2× sehari selama 7 hari.",
   "Istri: Jika diabetes, minta pemeriksaan HbA1c bila belum diperiksa dalam 3 bulan terakhir.",
   "Istri: Jika minum obat tiroid, tanyakan \"apa yang harus saya lakukan begitu tes positif?\".",
   "Suami: Tulis daftar obat dan suplemen Bapak, termasuk obat/hormon dari pusat kebugaran.",
   "Suami: Jika punya darah tinggi/diabetes, ikut cek rutin (misalnya program penyakit kronis di faskes BPJS).",
   "Berdua: Buat janji konsultasi pra-kehamilan dan datang berdua.",
   "Berdua: Sepakati: tidak ada yang menghentikan/mengganti obat tanpa bicara dengan dokter.",
   "Berdua: Bila dokter menyarankan menunda kehamilan sementara obat diganti, sepakati metode kontrasepsi sementara."
  ],
  "id": "08",
  "fase": "2",
  "youtube": "https://youtu.be/9fJrpHE9pX4",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-08.pdf"
 },
 {
  "no": "09",
  "judul": "Waktu Berhubungan Tanpa Tekanan",
  "durasi": "25–29 menit",
  "ringkasan": "Peluang hamil paling besar bila berhubungan di enam hari masa subur, terutama satu sampai dua hari sebelum ovulasi. Tetapi Anda tidak harus membuat jadwal ketat: berhubungan secara teratur dua sampai tiga kali seminggu sudah mencakup masa subur pada sebagian besar siklus. Kebanyakan pasangan sehat tidak langsung hamil di bulan pertama, dan itu normal. Jaga keintiman sebagai ungkapan kasih, bukan tugas. Bicarakan perasaan berdua, sepakati cara menjawab pertanyaan keluarga, dan jangan ragu meminta bantuan bila ada keluhan dalam hubungan suami-istri.",
  "checklist": [
   "Berdua: Pilih pola yang paling nyaman: (A) tiap 1–2 hari di masa subur, atau (B) 2–3× per minggu sepanjang siklus.",
   "Berdua: Jadwalkan \"obrolan mingguan\" 15 menit (misalnya Minggu sore), ponsel diletakkan.",
   "Berdua: Sepakati satu kalimat jawaban untuk pertanyaan \"kapan hamil?\" dan siapa yang menjawab untuk keluarga siapa.",
   "Berdua: Rencanakan satu kegiatan menyenangkan minggu ini yang tidak berhubungan dengan program hamil.",
   "Istri: Bila memantau ovulasi terasa membebani, beri diri izin untuk berhenti memantau satu siklus.",
   "Istri: Catat bila ada nyeri saat berhubungan atau keluhan lain untuk disampaikan ke dokter.",
   "Suami: Lakukan satu bentuk perhatian setiap hari di luar kamar (membantu pekerjaan rumah, pesan hangat, pelukan).",
   "Suami: Siapkan kalimat dukungan untuk hari ketika haid datang.",
   "Suami: Bila ada keluhan ereksi atau ejakulasi yang menetap, catat dan rencanakan konsultasi; jangan beli obat kuat tanpa resep."
  ],
  "id": "09",
  "fase": "3",
  "youtube": "https://youtu.be/nZjPmiNyQP4",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-09.pdf"
 },
 {
  "no": "10",
  "judul": "Mitos & Fakta Promil",
  "durasi": "±27 menit",
  "ringkasan": "Banyak saran promil terdengar meyakinkan karena diwariskan dengan penuh kasih sayang. Faktanya, posisi berhubungan dan mengangkat kaki tidak terbukti meningkatkan peluang hamil. Sebagian pelumas memang bisa mengganggu gerak sperma di laboratorium, jadi bila perlu pilih yang berlabel ramah sperma. Belum ada makanan, jamu, atau suplemen yang terbukti \"menyuburkan\" pasangan sehat, dan sebagian produk justru bisa berbahaya. Suami tidak perlu \"puasa\" ejakulasi lama. Aplikasi hanya menebak. Stres bukan kesalahan Anda. Tes AMH bukan ramalan peluang hamil alami. Dan keguguran hampir selalu bukan karena makanan atau aktivitas ibu.",
  "checklist": [
   "Tetap minum asam folat 400 µg setiap hari.",
   "Tulis daftar semua suplemen, jamu, dan obat yang sedang diminum (nama zat, dosis, sejak kapan).",
   "Gunakan aplikasi hanya untuk mencatat; tambahkan catatan lendir serviks minimal 1 siklus.",
   "Bila perlu pelumas, pilih yang berlabel ramah sperma.",
   "Hentikan kebiasaan \"menabung\" sperma; di masa subur berhubungan setiap hari atau selang sehari.",
   "Ganti ke celana dalam katun yang longgar; laptop di meja, bukan di pangkuan.",
   "Tulis daftar suplemen/obat yang diminum; jangan membeli \"penambah stamina\" tanpa izin edar.",
   "Siapkan kalimat sopan untuk menjawab pertanyaan keluarga, dan ambil peran menjawabnya."
  ],
  "id": "10",
  "fase": "3",
  "youtube": "https://youtu.be/G5hI4_E0ClY",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-10.pdf"
 },
 {
  "no": "11",
  "judul": "Tes Kehamilan & Langkah Setelah Positif",
  "durasi": "±25 menit",
  "ringkasan": "Tes pack mendeteksi hormon hCG yang baru muncul setelah embrio menempel di rahim, sekitar 8–10 hari setelah ovulasi. Hasil paling bisa dipercaya bila dipakai mulai hari pertama terlambat haid, idealnya dengan urine pertama di pagi hari. Garis samar tetap berarti ada hCG; ulangi 2–3 hari lagi atau periksa darah. Setelah positif: lanjutkan asam folat, buat janji periksa pertama di trimester 1 (termasuk USG), dan kenali tanda bahaya: perdarahan banyak, nyeri perut hebat, pingsan — segera ke IGD.",
  "checklist": [
   "Tandai tanggal haid yang diharapkan; tes mulai hari pertama terlambat haid dengan urine pagi.",
   "Catat HPHT di buku/aplikasi.",
   "Tetap minum asam folat 400 µg setiap hari.",
   "Simpan daftar obat rutin dan nomor kontak dokter yang meresepkan.",
   "Simpan nomor dan alamat puskesmas/bidan, dokter kandungan, dan IGD 24 jam terdekat di ponsel.",
   "Pelajari tanda bahaya ektopik dan perdarahan; sepakati \"kalau tanda ini muncul, kita langsung berangkat\".",
   "Bantu menahan diri dari tes terlalu dini; temani saat membaca hasil.",
   "Pastikan rumah dan kendaraan bebas asap rokok."
  ],
  "id": "11",
  "fase": "3",
  "youtube": "https://youtu.be/8HZ_XcNrAw0",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-11.pdf"
 },
 {
  "no": "12",
  "judul": "Evaluasi & Kapan ke Dokter Kandungan",
  "durasi": "±24 menit",
  "ringkasan": "Periksakan diri bila belum hamil setelah 12 bulan berhubungan teratur tanpa kontrasepsi (istri di bawah 35 tahun), setelah 6 bulan (istri 35 tahun ke atas), dan segera tanpa menunggu bila istri berusia 40 tahun ke atas atau ada faktor risiko seperti haid sangat tidak teratur, riwayat endometriosis, operasi atau infeksi panggul, atau masalah kesuburan suami yang sudah diketahui. Datanglah berdua: istri dan suami diperiksa bersamaan. Bawa catatan siklus, hasil lab, daftar obat, dan daftar pertanyaan. Pilihan penanganan bertahap, dari perbaikan gaya hidup, obat pemicu ovulasi, inseminasi, hingga bayi tabung, dan peluangnya sangat bergantung pada usia dan penyebab.",
  "checklist": [
   "Hitung lama mencoba dan cocokkan dengan batas waktu (12 bulan / 6 bulan / segera).",
   "Rapikan catatan siklus 3–6 bulan terakhir.",
   "Kumpulkan semua hasil lab/USG lama dalam satu map, urut tanggal.",
   "Tulis daftar obat, suplemen, dan jamu; lanjutkan asam folat 400 µg/hari.",
   "Jadwalkan analisis sperma bila belum pernah (atau bila sudah mendekati batas waktu evaluasi).",
   "Tulis riwayat kesehatan Bapak sendiri (operasi, gondongan, obat, pekerjaan).",
   "Susun bersama istri 5 pertanyaan untuk dokter.",
   "Sisihkan satu malam minggu ini untuk berdua tanpa membahas promil."
  ],
  "id": "12",
  "fase": "3",
  "youtube": "https://youtu.be/cPd-EahWY10",
  "pdf": "unduhan/5747d686459ab810/ringkasan-video-12.pdf"
 },
 {
  "no": "BONUS",
  "judul": "Khusus Suami: Kualitas Sperma & Memahami Hasil Analisis Sperma",
  "durasi": "±26 menit",
  "ringkasan": "Kualitas sperma dipengaruhi oleh banyak hal yang bisa diubah: panas di sekitar buah zakar, rokok, alkohol berlebihan, kegemukan, dan penggunaan hormon atau steroid pembentuk otot. Varikokel juga bisa berperan dan dapat ditangani. Hasil analisis sperma dibaca dengan nilai rujukan WHO 2021, yang merupakan batas bawah (persentil ke-5) dari pria yang sudah terbukti punya anak. Nilai ini bukan garis pemisah mutlak antara subur dan tidak subur. Karena hasil sperma bisa naik-turun, hasil yang tidak normal biasanya perlu diulang. Berita tentang \"jumlah sperma dunia menurun\" perlu dibaca dengan hati-hati: datanya menarik, tetapi masih diperdebatkan. Bila hasil tetap tidak normal, temui dokter untuk evaluasi lebih lanjut.",
  "checklist": [
   "Suami: cocokkan hasil analisis sperma (bila ada) dengan tabel WHO 2021. Tulis pertanyaan untuk dokter.",
   "Suami: bila belum periksa, rencanakan sesuai Video 04 (pantang 2–7 hari).",
   "Suami: ganti celana dalam ketat dengan yang lebih longgar dan menyerap keringat.",
   "Suami: laptop di meja, berdiri/berjalan setiap 30–60 menit duduk.",
   "Suami: hindari sauna dan berendam air panas selama program.",
   "Suami: kurangi rokok dengan target berhenti (lihat Video 07). Hindari alkohol.",
   "Suami: catat semua suplemen/hormon/steroid yang pernah dipakai untuk didiskusikan dengan dokter.",
   "Istri: dampingi dan rayakan kemajuan kecil, tanpa menyalahkan."
  ],
  "id": "bonus",
  "fase": "bonus",
  "youtube": "https://youtu.be/XtAHt4KVaw8",
  "pdf": "unduhan/5747d686459ab810/bonus-khusus-suami.pdf"
 }
]
};
