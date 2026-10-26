/* =====================================================================
   ai-quota.js — kuota chat AI gratis per pengunjung (dipakai bersama
   oleh momscare, panduan-obstetri, fertilitas, update-ilmu; gawatdarurat tidak lagi memakai AI).

   PENTING: penghitungan di file ini berjalan DI BROWSER (localStorage),
   jadi BISA DILEWATI (hapus data browser, mode samaran, ganti perangkat).
   Fungsinya hanya memberi tahu pengunjung lebih awal. Penegakan yang
   sebenarnya ada di Cloudflare Worker (kuota harian per IP, respons
   429 dengan code "quota_exceeded"), yang juga ditangani di sini.

   Kuota hanya berlaku bila halaman memakai proxy situs (RAMLI_PROXY_URL).
   Pengguna yang memakai API key pribadi (menu ⚙) tidak dibatasi di sini.
   ===================================================================== */
(function () {
    'use strict';

    // ---- KONFIGURASI (satu tempat untuk semua halaman) ----
    var CONFIG = {
        FREE_CHATS: 3,                          // jumlah chat AI gratis per jendela waktu
        WINDOW_MS: 24 * 60 * 60 * 1000,         // jendela waktu: 24 jam
        STORAGE_KEY: 'ai_free_quota_v1',
        BOOKING_WA: '[nomor WA booking]',       // isi format 62xxxxxxxxxx; selama placeholder, tombol WA disembunyikan
        KONTAK_URL: 'kontak.html',
        KELAS_URL: 'kelas.html',
        EBOOK_URL: 'ebook.html',
        PREMIUM_URL: 'daftar-tunggu.html?produk=ai-premium'   // tier Premium AI — selama belum dibuka, ke daftar tunggu
    };

    var scriptEl = document.currentScript;
    var EMERGENCY = !!(scriptEl && scriptEl.getAttribute('data-emergency') === '1');

    var mem = null;
    function load() {
        var raw = null;
        try { raw = localStorage.getItem(CONFIG.STORAGE_KEY); } catch (e) { raw = mem; }
        var list = [];
        try { list = JSON.parse(raw || '[]'); } catch (e) { list = []; }
        if (!Array.isArray(list)) list = [];
        var now = Date.now();
        return list.filter(function (t) { return typeof t === 'number' && now - t < CONFIG.WINDOW_MS; });
    }
    function save(list) {
        var v = JSON.stringify(list);
        try { localStorage.setItem(CONFIG.STORAGE_KEY, v); } catch (e) { mem = v; }
    }
    function usesProxy() {
        try { return typeof RAMLI_PROXY_URL === 'string' && !!RAMLI_PROXY_URL.trim(); } catch (e) { return false; }
    }
    function used() { return load().length; }
    function remaining() { return Math.max(0, CONFIG.FREE_CHATS - used()); }
    function canUse() { return !usesProxy() || remaining() > 0; }
    function record() { if (!usesProxy()) return; var l = load(); l.push(Date.now()); save(l); }
    function markExhausted() {
        var l = load(), now = Date.now();
        while (l.length < CONFIG.FREE_CHATS) l.push(now);
        save(l);
    }
    function resetTimeText() {
        var l = load();
        if (!l.length) return '';
        var t = Math.min.apply(null, l) + CONFIG.WINDOW_MS;
        try {
            return new Date(t).toLocaleString('id-ID', { weekday: 'long', hour: '2-digit', minute: '2-digit' });
        } catch (e) { return ''; }
    }
    function waLink() {
        if (!/^\d{9,15}$/.test(CONFIG.BOOKING_WA)) return '';
        var text = encodeURIComponent('Halo, saya ingin mendaftar konsultasi dengan dr. Bayu Maulana, Sp.O.G.');
        return 'https://wa.me/' + CONFIG.BOOKING_WA + '?text=' + text;
    }

    function option(href, icon, color, title, desc) {
        return '<a href="' + href + '" class="flex items-start gap-3 bg-white rounded-2xl border border-slate-100 shadow-sm p-3.5 hover:shadow-md hover:border-' + color + '-200 transition-all">' +
            '<div class="w-10 h-10 rounded-xl bg-' + color + '-100 flex items-center justify-center shrink-0"><i class="fa-solid ' + icon + ' text-' + color + '-600"></i></div>' +
            '<div class="min-w-0"><div class="font-bold text-slate-800 text-sm">' + title + '</div><div class="text-xs text-slate-500 leading-snug mt-0.5">' + desc + '</div></div></a>';
    }

    function panelHTML() {
        var reset = resetTimeText();
        var wa = waLink();
        var emergency = EMERGENCY ?
            '<div class="rounded-2xl bg-red-50 border border-red-200 p-4 text-sm text-red-900 mb-4">' +
            '<p class="font-black"><i class="fa-solid fa-truck-medical mr-1"></i> Kegawatdaruratan?</p>' +
            '<p class="mt-1 leading-relaxed">Jangan menunggu jawaban AI. Segera bawa pasien ke <b>IGD terdekat</b>, atau hubungi <a href="tel:119" class="font-black underline">119</a> (layanan darurat medis/ambulans) atau <a href="tel:112" class="font-black underline">112</a> (layanan panggilan darurat terpadu).</p>' +
            '<p class="mt-2 text-xs text-red-800">Protokol kondisi, kalkulator dosis, dan alur rujukan di halaman ini tetap bisa dipakai tanpa AI.</p></div>' : '';
        return '' +
            '<div class="text-center mb-4">' +
            '<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-600 mb-2"><i class="fa-solid fa-lock text-lg"></i></div>' +
            '<h2 id="aiQuotaTitle" class="font-black text-slate-800 text-lg">Kuota chat AI gratis sudah terpakai</h2>' +
            '<p class="text-sm text-slate-600 mt-1 leading-relaxed">Anda sudah memakai ' + CONFIG.FREE_CHATS + ' chat AI gratis dalam 24 jam terakhir.' + (reset ? ' Kuota tersedia lagi sekitar <b>' + reset + '</b>.' : '') + (EMERGENCY ? '' : ' Fitur non-AI di halaman ini tetap bisa dipakai.') + '</p>' +
            '</div>' + emergency +
            '<p class="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Pilihan lain</p>' +
            '<div class="space-y-2">' +
            option(CONFIG.KONTAK_URL, 'fa-user-doctor', 'rose', 'Konsultasi langsung ke dokter', 'Pemeriksaan dan konsultasi tatap muka. Lihat jadwal dan tempat praktik.') +
            (wa ? '<a href="' + wa + '" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-full py-2.5"><i class="fa-brands fa-whatsapp"></i> Daftar via WhatsApp</a>' : '') +
            option(CONFIG.KELAS_URL, 'fa-chalkboard-user', 'pink', 'Kelas Online', 'Persiapan hamil, kehamilan sehat &amp; persalinan, nifas &amp; menyusui.') +
            option(CONFIG.EBOOK_URL, 'fa-book-open', 'amber', 'E-book', 'Panduan program hamil dan kehamilan sehat.') +
            '</div>' +
            '<a href="' + CONFIG.PREMIUM_URL + '" class="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-rose-700 bg-white border border-rose-200 hover:bg-rose-100 rounded-full px-4 py-2.5 text-center"><i class="fa-solid fa-bell"></i> Premium AI · segera dibuka — daftar tunggu</a>' +
            '<p class="text-[11px] text-slate-400 mt-4 text-center">Jawaban AI bersifat edukasi dan tidak menggantikan pemeriksaan langsung.</p>' +
            '<button type="button" onclick="AIQuota.hideLock()" class="mt-3 w-full text-sm font-bold text-slate-600 hover:text-slate-800 py-2 rounded-full border border-slate-200 hover:bg-slate-50">Tutup</button>';
    }

    function showLock() {
        hideLock();
        var wrap = document.createElement('div');
        wrap.id = 'aiQuotaLock';
        wrap.setAttribute('role', 'dialog');
        wrap.setAttribute('aria-modal', 'true');
        wrap.setAttribute('aria-labelledby', 'aiQuotaTitle');
        wrap.className = 'fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-slate-900/50 p-3 no-print';
        wrap.innerHTML = '<div class="w-full max-w-md max-h-[92vh] overflow-y-auto bg-rose-50 rounded-3xl shadow-2xl p-5 sm:p-6 text-slate-800">' + panelHTML() + '</div>';
        wrap.addEventListener('click', function (e) { if (e.target === wrap) hideLock(); });
        document.body.appendChild(wrap);
        document.addEventListener('keydown', escClose);
    }
    function escClose(e) { if (e.key === 'Escape') hideLock(); }
    function hideLock() {
        var el = document.getElementById('aiQuotaLock');
        if (el) el.remove();
        document.removeEventListener('keydown', escClose);
    }

    // Dipanggil di awal setiap fungsi AI. false = jangan lanjut (panel kunci ditampilkan).
    function guard() {
        if (canUse()) return true;
        showLock();
        return false;
    }

    function QuotaError() { var e = new Error('AI quota exceeded'); e.name = 'AIQuotaError'; return e; }
    function isQuotaError(e) { return !!(e && e.name === 'AIQuotaError'); }

    // Pengganti fetch() untuk panggilan AI: menangani 429 quota_exceeded dari Worker & mencatat pemakaian.
    async function aiFetch(url, opts) {
        var res = await fetch(url, opts);
        if (usesProxy()) {
            if (res.status === 429) {
                var body = null;
                try { body = await res.clone().json(); } catch (e) { body = null; }
                if (body && body.code === 'quota_exceeded') {
                    markExhausted();
                    showLock();
                    throw QuotaError();
                }
            } else if (res.ok) {
                record();
            }
        }
        return res;
    }

    window.AIQuota = {
        CONFIG: CONFIG, guard: guard, fetch: aiFetch, isQuotaError: isQuotaError,
        used: used, remaining: remaining, canUse: canUse, record: record,
        markExhausted: markExhausted, showLock: showLock, hideLock: hideLock, panelHTML: panelHTML
    };
})();
