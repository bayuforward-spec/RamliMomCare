# Cara menambah artikel

1. Salin `_template.html` menjadi file baru, mis. `tanda-bahaya-kehamilan.html` (huruf kecil, pakai tanda hubung).
2. Ganti semua `[isi: ...]`: judul, meta description (120–160 karakter, tanpa kata superlatif), tanggal terbit & ditinjau, kategori, poin penting, isi, dan **Referensi** (sumber primer: guideline/jurnal + link/DOI).
3. Hapus baris `<meta name="robots" content="noindex, nofollow">` dan komentar TEMPLATE di baris paling atas.
4. Perbarui JSON-LD di `<head>` (headline, description, tanggal, url) dan `og:url`/`canonical`.
5. Tambahkan kartu artikel di `artikel/index.html` dan baris `<url>` di `sitemap.xml`.
6. Rambu: tanpa testimoni, tanpa superlatif, tanpa merek obat/suplemen/susu formula, konten menyusui pro-ASI, disclaimer tetap ada.
