/* Analitik kunjungan — Google Analytics 4 (G-R8GPD1TV67)
   Dimuat hanya setelah persetujuan (UU 27/2022).
   Tanpa iklan, tanpa Google signals, anonymize_ip.
   Beacon Cloudflare tidak dimuat: token situs tidak tersedia. */
(function () {
    'use strict';

    var ID = 'G-R8GPD1TV67';
    var CONSENT_KEY = 'bms_analytics_consent';
    var UTM_KEY = 'bms_utm_v1';
    var UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

    window['ga-disable-' + ID] = true;

    function readStore(storage, key) {
        try { return storage.getItem(key); } catch (e) { return null; }
    }
    function writeStore(storage, key, val) {
        try { storage.setItem(key, val); } catch (e) {}
    }

    function captureUtm() {
        var params = new URLSearchParams(location.search);
        var found = {};
        var any = false;
        UTM_KEYS.forEach(function (k) {
            var v = params.get(k);
            if (!v) return;
            found[k] = String(v).slice(0, 150);
            any = true;
        });
        if (!any) return null;
        writeStore(sessionStorage, UTM_KEY, JSON.stringify(found));
        return found;
    }

    function storedUtm() {
        var raw = readStore(sessionStorage, UTM_KEY);
        if (!raw) return null;
        try {
            var obj = JSON.parse(raw);
            return obj && typeof obj === 'object' ? obj : null;
        } catch (e) { return null; }
    }

    function decorateSameOriginLinks() {
        var utm = storedUtm();
        if (!utm) return;
        document.addEventListener('click', function (ev) {
            var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
            if (!a) return;
            var href = a.getAttribute('href');
            if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(href)) return;
            var url;
            try { url = new URL(href, location.href); } catch (e) { return; }
            if (url.origin !== location.origin) return;
            var changed = false;
            UTM_KEYS.forEach(function (k) {
                if (utm[k] && !url.searchParams.has(k)) {
                    url.searchParams.set(k, utm[k]);
                    changed = true;
                }
            });
            if (changed) a.href = url.pathname + url.search + url.hash;
        }, true);
    }

    function clearGaCookies() {
        var parts = document.cookie ? document.cookie.split(';') : [];
        parts.forEach(function (c) {
            var name = c.split('=')[0].trim();
            if (name === '_ga' || name.indexOf('_ga_') === 0) {
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
            }
        });
    }

    function loadGa() {
        if (window.__bmsGaLoaded) return;
        window.__bmsGaLoaded = true;
        window['ga-disable-' + ID] = false;
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'granted',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            security_storage: 'granted'
        });
        window.gtag('set', 'ads_data_redaction', true);
        window.gtag('set', 'allow_google_signals', false);
        window.gtag('set', 'allow_ad_personalization_signals', false);

        var cfg = {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            cookie_flags: location.protocol === 'https:' ? 'SameSite=Lax;Secure' : 'SameSite=Lax',
            send_page_view: true
        };
        var utm = storedUtm();
        var params = new URLSearchParams(location.search);
        if (utm && !params.get('utm_source')) {
            if (utm.utm_source) cfg.campaign_source = utm.utm_source;
            if (utm.utm_medium) cfg.campaign_medium = utm.utm_medium;
            if (utm.utm_campaign) cfg.campaign_name = utm.utm_campaign;
            if (utm.utm_content) cfg.campaign_content = utm.utm_content;
            if (utm.utm_term) cfg.campaign_term = utm.utm_term;
        }
        window.gtag('config', ID, cfg);

        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ID);
        document.head.appendChild(s);
    }

    function privacyHref() {
        var path = location.pathname || '';
        if (path.indexOf('/artikel/') !== -1) return '../kebijakan-privasi.html';
        return 'kebijakan-privasi.html';
    }

    function removeBanner() {
        var el = document.getElementById('bms-consent');
        if (el && el.parentNode) el.parentNode.removeChild(el);
        if (document.body) document.body.style.paddingBottom = '';
    }

    function showBanner() {
        if (!document.body) return;
        var existing = document.getElementById('bms-consent');
        if (existing) existing.parentNode.removeChild(existing);
        var bar = document.createElement('div');
        bar.id = 'bms-consent';
        bar.setAttribute('role', 'dialog');
        bar.setAttribute('aria-labelledby', 'bms-consent-title');
        bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:80;padding:12px;font-family:Inter,system-ui,sans-serif;';
        bar.innerHTML =
            '<div style="max-width:42rem;margin:0 auto;background:#fff;border:1px solid #fecdd3;border-radius:16px;box-shadow:0 10px 30px rgba(136,19,55,.12);padding:14px 14px 12px;">' +
                '<p id="bms-consent-title" style="margin:0;font-weight:800;color:#1e293b;font-size:14px;">Analitik kunjungan</p>' +
                '<p style="margin:6px 0 0;color:#475569;font-size:13px;line-height:1.45;">Situs ini ingin memakai Google Analytics 4 untuk menghitung halaman yang dibuka, termasuk tautan media sosial (UTM). Tidak ada iklan dan tidak ada sinyal personalisasi. Alamat IP dikirim dengan penanda anonim. Data baru diteruskan ke Google setelah Anda setuju. <a href="' + privacyHref() + '" style="color:#e11d48;font-weight:700;">Kebijakan Privasi</a></p>' +
                '<div style="display:flex;gap:8px;margin-top:10px;">' +
                    '<button type="button" data-bms="grant" style="flex:1;border:0;border-radius:999px;background:#e11d48;color:#fff;font-weight:800;font-size:13px;padding:10px 12px;cursor:pointer;">Setuju</button>' +
                    '<button type="button" data-bms="deny" style="flex:1;border:1px solid #e2e8f0;border-radius:999px;background:#fff;color:#334155;font-weight:800;font-size:13px;padding:10px 12px;cursor:pointer;">Tidak setuju</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(bar);
        document.body.style.paddingBottom = '9.5rem';
        bar.addEventListener('click', function (ev) {
            var btn = ev.target.closest ? ev.target.closest('button[data-bms]') : null;
            if (!btn) return;
            if (btn.getAttribute('data-bms') === 'grant') grant();
            else deny();
        });
    }

    function grant() {
        writeStore(localStorage, CONSENT_KEY, 'granted');
        removeBanner();
        loadGa();
    }
    function deny() {
        writeStore(localStorage, CONSENT_KEY, 'denied');
        window['ga-disable-' + ID] = true;
        clearGaCookies();
        removeBanner();
    }

    window.bmsOpenAnalyticsConsent = showBanner;

    captureUtm();
    decorateSameOriginLinks();

    function boot() {
        var choice = readStore(localStorage, CONSENT_KEY);
        if (choice === 'granted') loadGa();
        else if (choice !== 'denied') showBanner();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
})();
