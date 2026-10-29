/* =========================================================
   produk.js — SATU file konfigurasi produk & daftar tunggu
   bayumaulanaspog.com (situs statis GitHub Pages)

   Cara membuka penjualan sebuah produk:
     1. Buat produknya di Mayar (e-book / kelas online / membership).
     2. Isi `harga` (angka rupiah, mis. 99000) dan `mayarUrl`
        (link checkout Mayar, https://...).
     3. Ubah `status` menjadi 'buka'.
   Selama harga ATAU mayarUrl masih null, atau status bukan 'buka',
   semua tombol produk itu otomatis diarahkan ke daftar-tunggu.html.

   Akad (catatan untuk transparansi, lihat rencana-pasif.md):
     'bai'    = jual beli (Fatwa DSN-MUI 110/DSN-MUI/IX/2017) — barang
                digital yang dibeli putus, mis. e-book.
     'ijarah' = sewa manfaat/jasa (Fatwa DSN-MUI 112/DSN-MUI/IX/2017) —
                akses kelas, langganan, tier AI premium.
   ========================================================= */
(function () {
    'use strict';

    var PRODUK = {
        'ebook-siap-hamil':   { nama: 'E-book Siap Hamil',                                  kategori: 'ebook',   akad: 'bai',    status: 'waitlist', harga: null, mayarUrl: null },
        'ebook-40-minggu':    { nama: 'E-book 40 Minggu dengan Tenang (Edisi 1: Trimester 1)', kategori: 'ebook',   akad: 'bai',    status: 'waitlist', harga: 149000, mayarUrl: 'https://bayu-maulana.myr.id/pl/e-book-40-minggu-dengan-tenang' },
        'kelas-a':            { nama: 'Kelas Rekaman A — Siap Hamil',                       kategori: 'kelas',   akad: 'ijarah', status: 'waitlist', harga: null, mayarUrl: null },
        'kelas-b':            { nama: 'Kelas Rekaman B — Kehamilan Sehat & Persiapan Persalinan', kategori: 'kelas', akad: 'ijarah', status: 'waitlist', harga: null, mayarUrl: null },
        'kelas-c':            { nama: 'Kelas Rekaman C — Nifas & Menyusui',                 kategori: 'kelas',   akad: 'ijarah', status: 'waitlist', harga: null, mayarUrl: null },
        'sejawat-langganan':  { nama: 'Langganan Sejawat',                                  kategori: 'sejawat', akad: 'ijarah', status: 'waitlist', harga: null, mayarUrl: null, periode: 'bulan' },
        'ai-premium':         { nama: 'Premium AI (di atas kuota gratis)',                  kategori: 'ai',      akad: 'ijarah', status: 'waitlist', harga: null, mayarUrl: null, periode: 'bulan' }
    };

    // Kategori yang tampil sebagai pilihan minat di formulir daftar tunggu.
    var KATEGORI = {
        ebook:   { label: 'E-book',                 ket: 'Siap Hamil · 40 Minggu dengan Tenang' },
        kelas:   { label: 'Kelas rekaman',          ket: 'Video rekaman, ditonton kapan saja' },
        sejawat: { label: 'Langganan sejawat',      ket: 'Untuk dokter, bidan, dan tenaga kesehatan' },
        ai:      { label: 'Premium AI',             ket: 'Akses alat bantu AI di atas kuota gratis' }
    };

    // Tujuan kirim formulir daftar tunggu. SELAMA mode = null, formulir
    // TIDAK mengirim data ke mana pun dan menampilkan pemberitahuan "segera dibuka".
    //   mode: null          → belum aktif
    //   mode: 'worker'      → POST JSON ke endpoint (lihat bayu-site/waitlist-worker.js)
    //   mode: 'googleform'  → POST ke Google Form (isi action + entry.xxxx)
    var WAITLIST = {
        mode: null,
        endpoint: null,                 // mis. 'https://<nama-worker>.<akun>.workers.dev/waitlist'
        googleForm: { action: null, fields: { nama: null, email: null, wa: null, produk: null, consent: null } },
        consentVersion: '2026-10-19'
    };

    var WAITLIST_PAGE = 'daftar-tunggu.html';

    function isOpen(p) {
        return !!(p && p.status === 'buka' && typeof p.harga === 'number' && p.harga > 0 &&
            typeof p.mayarUrl === 'string' && /^https:\/\//.test(p.mayarUrl));
    }
    function rupiah(n) {
        try { return 'Rp' + Number(n).toLocaleString('id-ID'); } catch (e) { return 'Rp' + n; }
    }
    function waitlistUrl(id) { return WAITLIST_PAGE + '?produk=' + encodeURIComponent(id); }

    // Hubungkan tombol & label harga di halaman:
    //   <a data-produk="kelas-a">…</a>          → href ke Mayar atau daftar tunggu
    //   <span data-produk-harga="kelas-a"></span> → "Rp…" atau "Segera diumumkan"
    //   <span data-produk-status="kelas-a"></span>→ badge status
    function wire(root) {
        root = root || document;
        root.querySelectorAll('[data-produk]').forEach(function (a) {
            var id = a.getAttribute('data-produk'), p = PRODUK[id];
            if (!p) return;
            var label = a.querySelector('[data-label]');
            if (isOpen(p)) {
                a.href = p.mayarUrl; a.target = '_blank'; a.rel = 'noopener';
                if (label && a.getAttribute('data-label-buka')) label.textContent = a.getAttribute('data-label-buka');
            } else {
                a.href = waitlistUrl(id); a.removeAttribute('target');
                if (label) label.textContent = 'Masuk daftar tunggu';
                var ic = a.querySelector('i'); if (ic) ic.className = 'fa-solid fa-bell';
            }
        });
        root.querySelectorAll('[data-produk-harga]').forEach(function (el) {
            var p = PRODUK[el.getAttribute('data-produk-harga')];
            if (!p) return;
            el.textContent = isOpen(p) ? rupiah(p.harga) + (p.periode ? ' / ' + p.periode : '') : 'Segera diumumkan';
        });
        root.querySelectorAll('[data-produk-status]').forEach(function (el) {
            var p = PRODUK[el.getAttribute('data-produk-status')];
            if (!p) return;
            var open = isOpen(p);
            el.textContent = open ? 'Tersedia' : 'Segera dibuka';
            el.className = 'text-[11px] font-bold px-2.5 py-1 rounded-full ' + (open ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700');
        });
    }

    window.Produk = { PRODUK: PRODUK, KATEGORI: KATEGORI, WAITLIST: WAITLIST, isOpen: isOpen, rupiah: rupiah, waitlistUrl: waitlistUrl, wire: wire };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { wire(); });
    else wire();
})();
