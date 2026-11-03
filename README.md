# Almanya CS / AI Master Takibi

Almanya'daki güçlü CS ve AI master programlarının deadline'larını, başvuru prosedürlerini ve mezuniyet sonrası iş imkânlarını tek sayfada takip etmek için kişisel bir GitHub Pages sitesi.

**Hedef dönem:** Kış dönemi 2027/28 (Ekim 2027 başlangıç) · Tarihler AB dışı (non-EU) adaylar içindir.

## Özellikler

- 17 program: TUM, LMU, Tübingen, Saarland, KIT, RWTH, TU Darmstadt, Freiburg, Bonn, Heidelberg, Stuttgart, FAU, TU Berlin
- Her program için deadline, başvuru penceresi, başvuru yolu (doğrudan / uni-assist), harç ve şartlar
- Kalan gün sayacı ve yaklaşan tarihler zaman çizelgesi
- **İş skoru parametresi:** şehir bazlı 4 alt parametre (sektör yoğunluğu, maaş, İngilizce ile iş bulma, araştırma/PhD). Ağırlıkları sayfadaki kaydırıcılarla değiştirince skor yeniden hesaplanır
- Her program için durum (Araştırılıyor → Gönderildi → Kabul…) ve not alanı
- Belge kontrol listesi
- Durum/notlar tarayıcıda saklanır; "Yedeği indir/yükle" ile cihazlar arasında taşınır


## Veriyi güncelleme

Her şey `data.js` içinde:

- `PROGRAMS` — program ekle/çıkar, tarihleri `YYYY-MM-DD` formatında güncelle. Kaynaklar çelişiyorsa `dogrula: true` yap, sayfada "Tarihi doğrula" etiketi çıkar.
- `CITIES` — şehirlerin iş parametreleri (1–5). Bunlar değerlendirmedir; kendi araştırmana göre değiştir.
- `CHECKLIST` — belge listesi.

Üniversiteler kış dönemi tarihlerini genellikle Nisan–Mayıs'ta, bazıları Kasım–Aralık'ta yayımlar. Her başvurudan önce "Resmi sayfa" linkinden teyit et.

## Kaynaklar (Kasım 2026 kontrolü)

- Program sayfaları: her satırdaki "Resmi sayfa" linki
- TUM harç: https://tum.de/en/studies/fees/tuition
- Mavi Kart 2026 eşikleri: https://www.rtpartner.de/en/immigration/blaue-karte-eu-mindestgehalt-2026/
- 18 ay iş arama izni (§20 AufenthG): https://www.make-it-in-germany.com
- Bitkom IT iş piyasası 2026: https://www.bitkom.org/Bitkom/Publikationen/Der-Arbeitsmarkt-fuer-IT-Fachkraefte-0
- Junior AI maaş bantları: https://www.optimaeurope.com/recruitment-blog/ai-engineer-salary-germany , https://jobrise.io/en/blog/machine-learning-engineer-salary-munich/
