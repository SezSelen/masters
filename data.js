// ============================================================
//  Almanya CS / AI Master Takip — VERİ DOSYASI
//  Son kontrol: 3 Kasım 2026. Hedef dönem: Kış dönemi 2027/28 (Ekim 2027 başlangıç)
//  Tarihler AB dışı (non-EU) adaylar içindir. Başvurmadan önce "Resmi sayfa"
//  linkinden mutlaka doğrula — üniversiteler tarihleri her yıl Nisan-Mayıs'ta günceller.
//  Bu dosyayı GitHub'da doğrudan düzenleyerek program ekleyip çıkarabilirsin.
// ============================================================

// Şehir bazlı iş imkânı parametreleri (1-5).
// hub      : Bölgedeki AI/teknoloji işvereni yoğunluğu
// maas     : Maaş seviyesi (junior AI/ML)
// ingilizce: Almanca bilmeden iş bulma kolaylığı
// arastirma: Araştırma enstitüsü / PhD / HiWi fırsatları
// Puanlar yayımlanmış maaş ve pazar verilerine dayanan DEĞERLENDİRMEDİR, resmi sıralama değildir.
window.CITIES = {
  "München": {
    hub: 5, maas: 5, ingilizce: 4, arastirma: 5,
    junior: "€62–78k",
    isverenler: "BMW, Siemens, Celonis, Google/Microsoft/Apple ofisleri, Rohde & Schwarz; Helmholtz Munich, MCML",
    not: "Almanya'nın en yüksek AI maaşları; kira da en yüksek."
  },
  "Tübingen": {
    hub: 3, maas: 4, ingilizce: 3, arastirma: 5,
    junior: "€55–75k",
    isverenler: "Cyber Valley ekosistemi; Stuttgart bölgesi (Bosch, Mercedes-Benz, Porsche); Max Planck Intelligent Systems",
    not: "Araştırma için Avrupa'nın en güçlü ML merkezlerinden; sanayi işi için Stuttgart'a gidip gelme gerekebilir."
  },
  "Saarbrücken": {
    hub: 2, maas: 3, ingilizce: 3, arastirma: 5,
    junior: "€55–75k",
    isverenler: "DFKI, CISPA, MPI Informatik / Software Systems; sanayi sınırlı",
    not: "PhD/araştırma yolu için çok güçlü, sanayi işi için büyük şehre taşınma gerekebilir."
  },
  "Aachen": {
    hub: 3, maas: 3, ingilizce: 3, arastirma: 4,
    junior: "€55–75k",
    isverenler: "Ford Research & Innovation Center Aachen, Köln–Düsseldorf bölgesi (Ford Köln, DeepL Köln), Fraunhofer",
    not: "Ford Otosan stajın Ford'un Almanya birimleri için anlamlı bir köprü."
  },
  "Karlsruhe": {
    hub: 4, maas: 4, ingilizce: 3, arastirma: 4,
    junior: "€55–75k",
    isverenler: "SAP (Walldorf, ~50 km), Bosch, IONOS; FZI, KIT enstitüleri",
    not: "Yazılım + otomotiv karışımı güçlü bir bölge."
  },
  "Darmstadt": {
    hub: 4, maas: 4, ingilizce: 4, arastirma: 4,
    junior: "€55–75k",
    isverenler: "Frankfurt finans sektörü (bankalar, fintech, risk), Deutsche Telekom, Merck; hessian.AI, ATHENE",
    not: "Finansal risk / GenAI deneyimin Frankfurt piyasasında doğrudan değer görür."
  },
  "Freiburg": {
    hub: 2, maas: 3, ingilizce: 3, arastirma: 4,
    junior: "€55–75k",
    isverenler: "Yerel sanayi sınırlı; Basel (İsviçre) ilaç sektörü sınırötesi, Fraunhofer enstitüleri",
    not: "Yaşam kalitesi yüksek; iş için genelde taşınma gerekir."
  },
  "Bonn": {
    hub: 3, maas: 3, ingilizce: 3, arastirma: 4,
    junior: "€55–75k",
    isverenler: "Deutsche Telekom, DHL Group; Köln (DeepL, Ford, medya); Lamarr Institute",
    not: "Köln–Bonn bölgesi büyük ve erişilebilir."
  },
  "Heidelberg": {
    hub: 4, maas: 4, ingilizce: 3, arastirma: 4,
    junior: "€55–75k",
    isverenler: "SAP (Walldorf), Mannheim/BASF, sağlık AI; DKFZ, EMBL",
    not: "SAP yakınlığı büyük avantaj."
  },
  "Stuttgart": {
    hub: 4, maas: 4, ingilizce: 3, arastirma: 4,
    junior: "€55–75k",
    isverenler: "Bosch, Mercedes-Benz, Porsche, otomotiv tedarikçileri; Cyber Valley",
    not: "Otomotiv son yıllarda daraldı; otonom sürüş / CV pozisyonları hâlâ güçlü."
  },
  "Erlangen": {
    hub: 3, maas: 4, ingilizce: 3, arastirma: 4,
    junior: "€55–75k",
    isverenler: "Siemens Healthineers, Siemens, Fraunhofer IIS, Nürnberg bölgesi",
    not: "Medikal görüntüleme ve endüstriyel AI güçlü."
  },
  "Berlin": {
    hub: 5, maas: 3, ingilizce: 5, arastirma: 4,
    junior: "€55–75k",
    isverenler: "Startup ekosistemi, Zalando, Delivery Hero, büyük teknoloji ofisleri; BIFOLD",
    not: "İngilizce ile iş bulmanın en kolay olduğu şehir; maaşlar Münih'in altında."
  }
};

// Programlar. deadline: YYYY-MM-DD (WS 2027/28, non-EU). acilis: başvuru penceresinin açılışı (biliniyorsa).
// kademe: genel itibar kademesi (A = Almanya'nın en üst CS/AI grubu, B = çok güçlü) — değerlendirme.
// dogrula: true ise kaynaklar çelişiyor veya 2027 tarihi henüz yayımlanmamış → resmi sayfadan teyit et.
window.PROGRAMS = [
  {
    id: "tum-inf", uni: "TU München (TUM)", sehir: "München", kademe: "A",
    program: "M.Sc. Informatics", dil: "İngilizce",
    acilis: "2027-02-01", deadline: "2027-05-31", erken: "2027-03-31",
    erkenNot: "Vize gerekenler için önerilen tarih",
    yol: "TUMonline (doğrudan)",
    ucret: "€4.000–6.000 / dönem (programa göre)", ucretSayi: 6000,
    sartlar: "TUM Informatik B.Sc.'ye eşdeğer lisans; Eignungsverfahren (dosya puanlaması, gerekirse mülakat); IELTS/TOEFL.",
    link: "https://www.cit.tum.de/en/cit/studies/degree-programs/master-informatics/",
    dogrula: false
  },
  {
    id: "tum-dea", uni: "TU München (TUM)", sehir: "München", kademe: "A",
    program: "M.Sc. Data Engineering and Analytics", dil: "İngilizce",
    acilis: "2027-02-01", deadline: "2027-05-31",
    yol: "TUMonline (doğrudan)",
    ucret: "€6.000 / dönem", ucretSayi: 6000,
    sartlar: "Informatik lisansı; yazılı yetenek sınavı içeren Eignungsverfahren.",
    link: "https://cit.tum.de/en/cit/studies/degree-programs/master-data-engineering-and-analytics",
    dogrula: false
  },
  {
    id: "tum-rci", uni: "TU München (TUM)", sehir: "München", kademe: "A",
    program: "M.Sc. Robotics, Cognition, Intelligence", dil: "İngilizce",
    acilis: "2027-02-01", deadline: "2027-05-31",
    yol: "TUMonline (doğrudan)",
    ucret: "€4.000–6.000 / dönem", ucretSayi: 6000,
    sartlar: "Informatik / EE / Makine vb. lisans; iki aşamalı Eignungsverfahren.",
    link: "https://www.tum.de/en/studies/degree-programs/detail/robotics-cognition-intelligence-master-of-science-msc",
    dogrula: false
  },
  {
    id: "lmu-ds", uni: "LMU München", sehir: "München", kademe: "A",
    program: "M.Sc. Data Science (Elite)", dil: "İngilizce",
    acilis: "2027-04-25", deadline: "2027-06-01",
    yol: "Program portalı + LMU International Office (15 Temmuz)",
    ucret: "Harç yok (~€97 dönem katkısı)", ucretSayi: 0,
    sartlar: "İstatistik + informatik temelleri; essay; mülakat. Portal 2024'te 25 Nisan'da açıldı, son gün 1 Haziran'dı.",
    link: "https://www.m-datascience.mathematik-informatik-statistik.uni-muenchen.de/application/onlineapplication/index.html",
    dogrula: true
  },
  {
    id: "lmu-sds", uni: "LMU München", sehir: "München", kademe: "A",
    program: "M.Sc. Statistics and Data Science", dil: "İngilizce",
    acilis: "2027-03-01", deadline: "2027-05-15",
    yol: "Program portalı + LMU International Office (15 Temmuz)",
    ucret: "Harç yok (~€97 dönem katkısı)", ucretSayi: 0,
    sartlar: "Kesin son gün 15 Mayıs; Mayıs sonu ev ödevi testi, Temmuz başı mülakat.",
    link: "https://www.statistik.uni-muenchen.de/studium/studieninfos/statistik_im_master/bewerbung_master/index.html",
    dogrula: false
  },
  {
    id: "tue-ml", uni: "Universität Tübingen", sehir: "Tübingen", kademe: "A",
    program: "M.Sc. Machine Learning", dil: "İngilizce",
    acilis: "2027-02-01", deadline: "2027-04-30",
    yol: "Doğrudan (başvuru ücreti yok)",
    ucret: "€1.500 / dönem (Baden-Württemberg)", ucretSayi: 1500,
    sartlar: "Güçlü matematik + CS; İngilizce sertifikası deadline'dan önce hazır olmalı (sonradan kabul edilmiyor). Sonuç ~4–6 hafta.",
    link: "https://uni-tuebingen.de/en/166353",
    dogrula: false
  },
  {
    id: "saar-dsai", uni: "Universität des Saarlandes", sehir: "Saarbrücken", kademe: "A",
    program: "M.Sc. Data Science and Artificial Intelligence", dil: "İngilizce",
    acilis: null, deadline: "2027-05-15", erken: "2026-11-15",
    erkenNot: "Erken deadline — olumlu karar Şubat'a kadar",
    yol: "apply.cs.uni-saarland.de (doğrudan)",
    ucret: "Harç yok", ucretSayi: 0,
    sartlar: "İngilizce C1 (MOI kabul edilmiyor); kontenjan sınırı yok. Aynı takvim Saarland M.Sc. Computer Science için de geçerli.",
    link: "https://www.uni-saarland.de/studium/angebot/master/data-science.html",
    dogrula: false
  },
  {
    id: "kit-inf", uni: "Karlsruher Institut für Technologie (KIT)", sehir: "Karlsruhe", kademe: "A",
    program: "M.Sc. Informatik", dil: "Almanca / İngilizce karışık",
    acilis: null, deadline: "2027-07-15",
    yol: "KIT International Students Office portalı",
    ucret: "€1.500 / dönem (Baden-Württemberg)", ucretSayi: 1500,
    sartlar: "Dil şartını programa göre teyit et (Almanca ağırlıklı ders havuzu olabilir).",
    link: "https://www.intl.kit.edu/istudies/9074.php",
    dogrula: true
  },
  {
    id: "rwth-cs", uni: "RWTH Aachen", sehir: "Aachen", kademe: "A",
    program: "M.Sc. Informatik / Computer Science", dil: "Almanca ağırlıklı",
    acilis: "2026-12-01", deadline: "2027-03-01",
    yol: "RWTHonline (doğrudan)",
    ucret: "Harç yok", ucretSayi: 0,
    sartlar: "Bölüm 'çok iyi Almanca' gerektiğini belirtiyor; GRE General deadline'dan önce yüklenmeli.",
    link: "https://sc.informatik.rwth-aachen.de/en/studium/master/informatik/start-ins-studium/",
    dogrula: false
  },
  {
    id: "rwth-sse", uni: "RWTH Aachen", sehir: "Aachen", kademe: "A",
    program: "M.Sc. Software Systems Engineering", dil: "İngilizce",
    acilis: "2026-12-01", deadline: "2027-03-01",
    yol: "RWTHonline (doğrudan)",
    ucret: "Harç yok", ucretSayi: 0,
    sartlar: "Sadece kış döneminde başlanabiliyor; ilk dönemde temel Almanca kursu zorunlu.",
    link: "https://www.myguide.de/en/international-programmes-master/detail/rwth-aachen-university-software-systems-engineering-3696/?ip-id=3696",
    dogrula: false
  },
  {
    id: "tuda-cs", uni: "TU Darmstadt", sehir: "Darmstadt", kademe: "A",
    program: "M.Sc. Computer Science", dil: "İngilizce",
    acilis: "2027-06-01", deadline: "2027-07-15",
    yol: "TUCaN portalı + onaylı belgelerin POSTAYLA ulaşması",
    ucret: "Harç yok (dönem katkısı)", ucretSayi: 0,
    sartlar: "Onaylı belgeler 15 Temmuz'a kadar Darmstadt'a ULAŞMIŞ olmalı (posta damgası yetmez). Giriş sınavı ya da GRE/GATE ile muafiyet.",
    link: "https://www.informatik.tu-darmstadt.de/studium_fb20/vor_dem_studium/bewerbung_1/bewerbung_2.en.jsp",
    dogrula: false
  },
  {
    id: "frei-cs", uni: "Universität Freiburg", sehir: "Freiburg", kademe: "B",
    program: "M.Sc. Computer Science", dil: "İngilizce",
    acilis: "2027-04-15", deadline: "2027-05-31",
    yol: "Doğrudan (üniversite portalı)",
    ucret: "€1.500 / dönem (Baden-Württemberg)", ucretSayi: 1500,
    sartlar: "CS veya yakın alanda ortalama üstü lisans; GRE güçlü şekilde öneriliyor.",
    link: "https://studium.uni-freiburg.de/en/program-offerings/masters/info/181",
    dogrula: false
  },
  {
    id: "bonn-cs", uni: "Universität Bonn", sehir: "Bonn", kademe: "B",
    program: "M.Sc. Computer Science (ayrıca M.Sc. Artificial Intelligence)", dil: "İngilizce",
    acilis: null, deadline: "2027-05-01",
    yol: "Doğrudan (uni-assist gerekmiyor)",
    ucret: "Harç yok", ucretSayi: 0,
    sartlar: "Matematik (18 ECTS) ve teorik CS (15 ECTS) kredi şartları; İngilizce B2. AI master'ının deadline'ını ayrıca kontrol et.",
    link: "https://www.informatik.uni-bonn.de/en/studies/master-programs/master-program-application",
    dogrula: true
  },
  {
    id: "hd-dcs", uni: "Universität Heidelberg", sehir: "Heidelberg", kademe: "B",
    program: "M.Sc. Data and Computer Science", dil: "İngilizce",
    acilis: "2027-02-01", deadline: "2027-03-15",
    yol: "Doğrudan",
    ucret: "€1.500 / dönem (Baden-Württemberg)", ucretSayi: 1500,
    sartlar: "Kaynaklar çelişkili (eski sayfada 1 Mayıs–15 Haziran) — güncel tarihi teyit et.",
    link: "https://www.uni-heidelberg.de/en/study/management-of-studies/key-dates-deadlines/application-deadlines-for-the-1st-semester-of-the-masters-degree-programmes",
    dogrula: true
  },
  {
    id: "stu-cs", uni: "Universität Stuttgart", sehir: "Stuttgart", kademe: "B",
    program: "M.Sc. Computer Science (İngilizce)", dil: "İngilizce",
    acilis: "2026-12-01", deadline: "2027-01-15",
    yol: "C@MPUS — DİKKAT: Almanca 'Informatik' ile karıştırma",
    ucret: "€1.500 / dönem (Baden-Württemberg)", ucretSayi: 1500,
    sartlar: "Başlangıçtan ~9 ay önce başvuru. Portalda başlangıç = 'winter semester 2027' seç, sonra 'Computer Science (in English)'.",
    link: "https://uni-stuttgart.de/en/study/study-programs/Computer-Science-M.Sc.-00001",
    dogrula: false
  },
  {
    id: "fau-ai", uni: "FAU Erlangen-Nürnberg", sehir: "Erlangen", kademe: "B",
    program: "M.Sc. Artificial Intelligence", dil: "İngilizce",
    acilis: null, deadline: "2027-05-31",
    yol: "campo portalı (doğrudan) + kabul sınavı",
    ucret: "Harç yok", ucretSayi: 0,
    sartlar: "Motivasyon mektubu çok önemli; kabul sınavı var. Kaynaklarda 31 Mayıs ve 15 Temmuz geçiyor — erken olanı esas al.",
    link: "https://www.ai.study.fau.eu/?p=49",
    dogrula: true
  },
  {
    id: "tub-cs", uni: "TU Berlin", sehir: "Berlin", kademe: "B",
    program: "M.Sc. Computer Science (Informatik)", dil: "İngilizce",
    acilis: null, deadline: "2027-05-15",
    yol: "TU Berlin portalı + uni-assist VPD",
    ucret: "Harç yok", ucretSayi: 0,
    sartlar: "Kontenjanlı İngilizce master'lar 15 Mayıs'ta kapanıyor. VPD'yi haftalar önce başlat (uni-assist: €75 + her ek başvuru €30).",
    link: "https://www.tu.berlin/en/studying/study-programs/all-programs-offered/study-course/computer-science-informatik-m-sc",
    dogrula: true
  }
];

// Genel kontrol listesi (her başvuru için)
window.CHECKLIST = [
  "IELTS Academic (≥6.5–7.0) veya TOEFL iBT (≥88–95) — Saarland C1 istiyor, Tübingen sertifikayı deadline'dan önce istiyor",
  "Lisans transkripti (İngilizce/Almanca, onaylı) + derece sistemi açıklaması",
  "Lise diploması (bazı başvurularda isteniyor)",
  "CV (Europass değil, akademik format önerilir)",
  "Motivasyon mektubu — her programa özel",
  "2 referans mektubu (hoca + işveren)",
  "Modül açıklamaları / ders içerikleri (TUM, Bonn kredi eşleştirmesi ister)",
  "GRE General (RWTH zorunlu; TU Darmstadt sınav muafiyeti; Freiburg önerir)",
  "uni-assist VPD (TU Berlin, Stuttgart gibi uni-assist kullanan yerler için)",
  "Kabul sonrası: bloke hesap (2026 tutarı €11.904/yıl — 2027 için güncel tutarı kontrol et), sağlık sigortası, vize randevusu"
];
