(function () {
  'use strict';

  /* ---------- Data proyek (ID + EN) ----------
     Cover foto: isi "image" dengan nama file foto (harus sama persis,
     termasuk huruf besar-kecil, dan satu folder dengan index.html).
     Kalau "image" tidak diisi, kartu menampilkan teks "preview". */
  const projects = [
    {
      cat: 'excel',
      image: 'Database Pegawai & Simulasi Payroll.jpg',
      title: { id: 'Database Pegawai & Simulasi Payroll', en: 'Employee Database & Payroll Simulation' },
      desc: {
        id: 'Perhitungan gaji dengan PPh 21 Tarif Efektif Rata-Rata (TER), tunjangan jabatan, dan slip gaji otomatis.',
        en: 'Payroll calculation with PPh 21 average effective rates (TER), position allowances, and automatic payslips.'
      },
      tags: ['Nested IF', 'VLOOKUP', 'Payslip'],
      preview: '<b>SIMULASI_PAYROLL.XLSX</b>\nGAJI_POKOK      6.500.000\nTUNJ_JABATAN    1.200.000\nPPH21_TER        -192.500\n<b>TAKE_HOME      7.507.500</b>\n=IF(E4="A",VLOOKUP(G4,TER,3,TRUE)*G4,0)',
      spec: {
        id: 'Workbook multi-sheet: Master Pegawai, Komponen Gaji, Tabel TER, dan slip gaji siap cetak (PDF).',
        en: 'Multi-sheet workbook: employee master, salary components, TER table, and print-ready payslips (PDF).'
      },
      link: {
        url: 'https://docs.google.com/spreadsheets/d/1eubXrBh4_qXr6o1HXPquBNwTzZHp95bmnnoDHjgON9c/edit?usp=sharing',
        label: { id: 'Buka Spreadsheet ↗', en: 'Open Spreadsheet ↗' }
      }
    },
    {
      cat: 'excel',
      image: 'Pelacak Absensi & Jadwal Kerja.jpg',
      title: { id: 'Pelacak Absensi & Jadwal Kerja', en: 'Attendance & Work Schedule Tracker' },
      desc: {
        id: 'Matriks shift dinamis, validasi ketidakhadiran, rekap lembur bulanan, dan conditional formatting.',
        en: 'Dynamic shift matrix, absence validation, monthly overtime summary, and conditional formatting.'
      },
      tags: ['Conditional Formatting', 'Pivot Table', 'Time Math'],
      preview: '<b>ATTENDANCE_MATRIX.XLSX</b>\nSen  Sel  Rab  Kam  Jum  Sab  Min\n H    H    H    H    H    L   OFF\n\nTOTAL_LEMBUR : 14,5 jam',
      spec: {
        id: 'Workbook jadwal untuk banyak staf dengan shift bergilir; menghitung denda terlambat dan lembur otomatis.',
        en: 'Roster workbook for many staff on rolling shifts; automatically computes late penalties and overtime.'
      },
      link: {
        url: 'https://docs.google.com/spreadsheets/d/1ZiafWFWxKqJaMv3IXWRz6hNzgIyg9Ze7/edit?usp=sharing&ouid=113058058775179075085&rtpof=true&sd=true',
        label: { id: 'Buka Spreadsheet ↗', en: 'Open Spreadsheet ↗' }
      }
    },
    {
      cat: 'excel',
      image: 'Pembukuan Operasional & HPP.jpg',
      title: { id: 'Pembukuan Operasional & HPP', en: 'Operational Bookkeeping & Cost Analysis' },
      desc: {
        id: 'Perhitungan HPP menu katering, proyeksi margin, dan pencatatan arus kas harian untuk Mrs. Sid Catering.',
        en: 'Catering menu cost (HPP) calculation, margin projection, and daily cash flow records for Mrs. Sid Catering.'
      },
      tags: ['HPP', 'Stok', 'Jurnal Kas'],
      preview: '<b>MRS_SID_HPP.XLSX</b>\nMENU        Nasi Kotak Premium B\nBAHAN BAKU  14.850\nKEMASAN     3.650\n<b>HPP / PORSI  18.500</b>',
      spec: {
        id: 'Workbook katering yang dipakai harian: pembelian dapur, selisih porsi bahan, dan invoice pelanggan.',
        en: 'Catering workbook used daily: kitchen purchases, ingredient portion variance, and client invoices.'
      },
      link: {
        url: 'https://docs.google.com/spreadsheets/d/1l3TlkiASEqEJ69pH3ER6xi_HfqVIXbnM/edit?usp=sharing&ouid=113058058775179075085&rtpof=true&sd=true',
        label: { id: 'Buka Spreadsheet ↗', en: 'Open Spreadsheet ↗' }
      }
    },
    {
      cat: 'edu',
      image: 'Lembar Kerja Siswa.jpg',
      title: { id: 'Lembar Kerja Siswa Terstruktur', en: 'Structured Student Worksheets' },
      desc: {
        id: 'Modul lembar kerja SD berlayout rapi, panduan bertahap, dan rubrik penilaian.',
        en: 'Elementary worksheet modules with clear layout, step-by-step guidance, and assessment rubrics.'
      },
      tags: ['Layout', 'Rubrik', 'Kurikulum Merdeka'],
      preview: '<b>STEM_MODULE_04</b>\nLembar Aktivitas Ekosistem\nTingkat SD • 45 halaman\nKunci jawaban + rubrik',
      spec: {
        id: 'Lembar belajar siap cetak dengan hierarki huruf jelas, ruang diagram, dan penilaian mandiri.',
        en: 'Print-ready learning sheets with clear type hierarchy, diagram space, and self-assessment.'
      },
      link: {
        url: 'https://drive.google.com/file/d/1ZVCd0obJpUxvzPxI0yYjhQEQ4mR4qETI/view?usp=sharing',
        label: { id: 'Lihat Modul PDF ↗', en: 'View PDF Module ↗' }
      }
    },
    {
      cat: 'edu',
      image: 'Redesain Dokumen Korporat_ Before dan After.jpg',
      title: { id: 'Redesain Lembar Kerja: Sebelum & Sesudah', en: 'Worksheet Redesign: Before & After' },
      desc: {
        id: 'Perbaikan tata letak dan hierarki informasi agar dokumen lebih rapi, konsisten, dan profesional.',
        en: 'Fixing the layout and information hierarchy so the document looks neater, more consistent, and professional.'
      },
      tags: ['Hierarki Visual', 'Canva', 'Word'],
      preview: '<b>SEBELUM</b>  teks padat, tanpa grid\n<b>SESUDAH</b>  spasi lega, huruf berjenjang,\n          instruksi satu langkah',
      spec: {
        id: 'Penyederhanaan susunan informasi dan instruksi agar formulir lebih mudah dipahami dan digunakan.',
        en: 'Simplifying the arrangement of information and instructions so the form is easier to understand and use.'
      }
    },
    {
      cat: 'doc',
      /* image: 'NAMA-FILE-FOTO.jpg',  <- hapus tanda komentar ini dan isi nama foto cover bila sudah ada */
      title: { id: 'Penyuntingan Naskah & Dokumen Resmi', en: 'Manuscript Editing & Official Documents' },
      desc: {
        id: 'Standar tata naskah, layout laporan operasional, dan materi publikasi yang konsisten.',
        en: 'Document standards, operational report layouts, and consistent publication materials.'
      },
      tags: ['Proofreading', 'Kop Surat', 'Canva'],
      preview: '<b>EDITORIAL_STANDARDS</b>\n• Audit sitasi APA 7\n• Kop surat & tipografi\n• Ekspor siap cetak',
      spec: {
        id: 'Template, sistem kop surat, dan panduan gaya penulisan untuk dokumen lembaga.',
        en: 'Templates, letterhead systems, and writing style guidelines for organization documents.'
      },
      link: {
        url: 'https://drive.google.com/file/d/1aQ2RItHX5ARV-aqMselCuB_WEfNIIjwS/view?usp=sharing',
        label: { id: 'Lihat Dokumen ↗', en: 'View Document ↗' }
      }
    },
    {
      cat: 'doc',
      image: 'Pembuatan Web Sekolah.jpg',
      title: { id: 'Pembuatan Web', en: 'Website Development' },
      desc: {
        id: 'Perancangan dan pengelolaan situs web profil sekolah sebagai pusat informasi akademik, kegiatan siswa, dan publikasi profil lembaga.',
        en: 'Design and maintenance of the official school profile website as an academic information hub, student activities, and institutional publications.'
      },
      tags: ['Blogger', 'Web Design', 'Publikasi Digital'],
      preview: '<b>SDNEGERITEMPEHLOR01.BLOGSPOT.COM</b>\n• Profil Sekolah & Visi Misi\n• Informasi Akademik & Siswa\n• Dokumentasi Kegiatan & Prestasi\n<b>STATUS: AKTIF & TERPUBLIKASI</b>',
      spec: {
        id: 'Pengembangan website profil SDN Tempeh Lor 01 untuk mendigitalkan informasi sekolah, pengumuman kegiatan, dan sarana transparansi informasi bagi wali murid serta masyarakat.',
        en: 'Development of SDN Tempeh Lor 01 profile website to digitize school information, event announcements, and public transparency for parents and the community.'
      },
      link: {
        url: 'https://sdnegeritempehlor01.blogspot.com/',
        label: { id: 'Kunjungi Website ↗', en: 'Visit Website ↗' }
      }
    }
  ];

  /* ---------- Terjemahan EN (ID diambil dari HTML) ---------- */
  const en = {
    'nav-home': 'Home', 'nav-profile': 'Profile', 'nav-projects': 'Projects', 'nav-exp': 'Experience', 'nav-contact': 'Contact',
    'dl-cv': 'View CV',
    'hero-kicker': 'Administration & Operations',
    'hero-lead': 'Organizing information and keeping operations running: accurate data, tidy bookkeeping, and formula-driven Excel.',
    'pill-book': 'Operational bookkeeping',
    'hero-btn': 'View projects', 'hero-contact': 'Get in touch', 'hero-status': 'Open to opportunities',
    'side1-t': 'Profile & credentials', 'side1-d': 'Cum Laude graduate (GPA 3.73) with a professional educator certification.',
    'side2-t': 'Selected projects', 'side2-d': 'PPh 21 payroll simulation, shift schedules, and catering cost (HPP) models.',
    'prof-h': 'Administrative & Operations Specialist',
    'prof-p': 'An administrative professional focused on data accuracy, organized bookkeeping, and standardized workflows.',
    'f1-t': 'Experience', 'f1-d': '1+ year — operations, administration, teaching',
    'f2-t': 'Education', 'f3-t': 'Certification', 'f3-d': 'PPG PGSD — professional educator',
    'f4-t': 'Location', 'f4-d': 'Lumajang, East Java • On-site / remote / hybrid',
    'hard-skills-t': 'Hard Skills',
    'soft-skills-t': 'Soft Skills',
    'tools-t': 'Tools & Software',
    'hs1': 'Bookkeeping',
    'hs2': 'Record Keeping & Filing',
    'hs3': 'Administration',
    'hs4': 'Design',
    'hs5': 'AI (Artificial Intelligence)',
    'ss1': 'Initiative',
    'ss2': 'Practical',
    'ss3': 'Adaptive',
    'ss4': 'Open-Minded',
    'ss5': 'Persistent',
    'ss6': 'Creative',
    'proj-h': 'Selected projects',
    'proj-p': 'Simulations and real work: formula automation, verified calculations, and structured teaching materials.',
    'f-all': 'All', 'f-excel': 'Excel & administration', 'f-edu': 'Education materials', 'f-doc': 'Documentation & Web',
    'inspect': 'View details',
    'exp-h': 'Experience', 'now': 'present', 'now2': 'present',
    'e1': 'Records daily cash flow, calculates recipe costs (HPP), schedules vendors, and digitizes ingredient stock.',
    'e2': 'Builds structured worksheets, documents student portfolios, and tracks learning progress.',
    'e3-time': 'Jan – Aug 2024',
    'e3': 'Graded daily worksheets for hundreds of students, kept attendance records, and verified scores regularly.',
    'cert-h': 'Certifications & training', 'wip': 'in progress', 'wip2': 'in progress',
    'c-h': "Let's work together.",
    'c-p': 'Open to full-time administrative roles, operations coordination, and document organization.',
    'c-avail': 'Available in Lumajang, Jember, Surabaya, or remote/hybrid. Replies within 24 hours.',
    'copy': 'Copy email', 'loc': 'Location', 'close': 'Close'
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  let lang = 'id';

  /* ---------- Render kartu proyek ---------- */
  const grid = $('#grid');
  projects.forEach((p, i) => {
    const el = document.createElement('article');
    el.className = 'project';
    el.dataset.cat = p.cat;
    const linkBtn = p.link
      ? '<a href="' + p.link.url + '" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm project-link-btn">' + (p.link.label[lang] || p.link.label.id) + '</a>'
      : '';
    const previewContent = p.image
      ? '<img src="' + encodeURI(p.image) + '" alt="' + p.title[lang] + '" loading="lazy">'
      : '<pre>' + p.preview + '</pre>';
    el.innerHTML =
      '<div class="preview">' + previewContent + '</div>' +
      '<div class="project-body">' +
        '<h3></h3><p></p>' +
        '<ul class="tags">' + p.tags.map(t => '<li>' + t + '</li>').join('') + '</ul>' +
        '<div class="project-actions">' +
          linkBtn +
          '<button type="button" class="btn btn-ghost btn-sm" data-i18n="inspect">Lihat detail</button>' +
        '</div>' +
      '</div>';
    el.querySelector('button[data-i18n="inspect"]').addEventListener('click', () => openSpec(i));
    grid.appendChild(el);
  });

  /* ---------- Bahasa ---------- */
  $$('[data-i18n]').forEach(el => { el.dataset.id = el.innerHTML; });

  function setLang(l) {
    lang = l;
    document.documentElement.lang = l;
    $$('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      el.innerHTML = l === 'en' && en[k] ? en[k] : (el.dataset.id || el.innerHTML);
    });
    $$('.project').forEach((el, i) => {
      $('h3', el).textContent = projects[i].title[l];
      $('p', el).textContent = projects[i].desc[l];
      const img = $('.preview img', el);
      if (img) img.alt = projects[i].title[l];
      const linkEl = $('.project-link-btn', el);
      if (linkEl && projects[i].link) {
        linkEl.textContent = projects[i].link.label[l];
      }
    });
    $$('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ---------- Filter ---------- */
  $$('#filters button').forEach(btn => btn.addEventListener('click', () => {
    $$('#filters button').forEach(b => b.classList.toggle('on', b === btn));
    const f = btn.dataset.filter;
    $$('.project').forEach(card => { card.hidden = !(f === 'all' || card.dataset.cat === f); });
  }));

  /* ---------- Modal detail ---------- */
  const dlg = $('#spec');
  function openSpec(i) {
    $('#spec-t').textContent = projects[i].title[lang];
    $('#spec-d').textContent = projects[i].spec[lang];
    const specLink = $('#spec-link');
    if (specLink) {
      if (projects[i].link) {
        specLink.href = projects[i].link.url;
        specLink.textContent = projects[i].link.label[lang] || projects[i].link.label.id;
        specLink.style.display = 'inline-flex';
      } else {
        specLink.style.display = 'none';
      }
    }
    dlg.showModal();
  }
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

  /* ---------- Salin email ---------- */
  const toast = $('#toast');
  $('#copyEmail').addEventListener('click', async () => {
    const msg = { id: 'Email disalin.', en: 'Email copied.' };
    try {
      await navigator.clipboard.writeText('sidmaulah25@gmail.com');
      toast.textContent = msg[lang];
    } catch (e) {
      toast.textContent = 'sidmaulah25@gmail.com';
    }
    setTimeout(() => { toast.textContent = ''; }, 2500);
  });

  /* ---------- Menu aktif saat scroll ---------- */
  const links = $$('.nav a');
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => io.observe(s));

  $('#year').textContent = new Date().getFullYear();

  let saved = 'id';
  try { saved = localStorage.getItem('lang') || 'id'; } catch (e) {}
  setLang(saved);
})();
