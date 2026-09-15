# Sonay — Kişisel Portfolyo Web Sitesi

Bu proje, [hudovich.com](https://hudovich.com/) şablonunun modern, minimalist geliştirici estetiğini temel alarak geliştirilmiş **ultra hafif (lightweight)** bir kişisel web sitesidir.

## 🚀 Özellikler

- **Sıfır Bağımlılık (Zero Dependencies)**: Saf HTML5, modern CSS3 ve minimal Vanilla JS (~40 satır). Node.js, npm veya derleyici gerektirmez.
- **Geist Mono Tipografisi**: Modern yazılımcı ve indie hacker estetiği.
- **Açık & Koyu Tema Desteği**: `localStorage` ve sistem tercihi (`prefers-color-scheme`) ile tam uyumlu, sayfa yenilendiğinde titreşme (flicker) yapmayan tema motoru.
- **İnteraktif Proje Kartları**: 2 kolonlu responsive grid, renkli durum rozetleri (`Active`, `Sold`, `Open Source`, `Discontinued`), hover ring ve harici bağlantı ok animasyonu.
- **Sosyal Medya Rozetleri**: GitHub, LinkedIn, X/Twitter, Bluesky, Threads, Instagram.
- **Ultra Hızlı**: Toplam boyut < 25KB, yükleme süresi < 50ms.

## 💻 Yerel Ortamda Çalıştırma

Sayfayı çalıştırmak için herhangi bir ek kuruluma ihtiyaç yoktur.

### Yöntem 1: Doğrudan Tarayıcıda Açma
`index.html` dosyasına çift tıklayarak doğrudan Chrome, Edge, Firefox veya Safari'de açabilirsiniz.

### Yöntem 2: Python HTTP Sunucusu ile Açma
Terminalden proje dizininde şu komutu çalıştırmanız yeterlidir:
```bash
python -m http.server 8000
```
Ardından tarayıcınızda [http://localhost:8000](http://localhost:8000) adresine gidin.

## ✏️ İçerikleri Özelleştirme

- **Kişisel Bilgiler & Hero Metinleri**: `index.html` dosyasındaki `hero-section` etiketleri altından isminizi, unvanınızı ve biyografinizi değiştirebilirsiniz.
- **Projeler**: `projects-section` altında yer alan `project-card` bloklarına kendi projelerinizi, durum etiketlerini ve bağlantılarını ekleyebilirsiniz.
- **Sosyal Medya Linkleri**: `socials-list` içerisindeki bağlantı URL'lerini kendi hesaplarınızla güncelleyebilirsiniz.
- **Avatar Görseli**: `assets/avatar.svg` yerine kendi fotoğrafınızı koymak isterseniz `assets/avatar.png` (veya `jpg`) ekleyip `index.html`'deki `src` yolunu güncellemeniz yeterlidir.

## 🌐 Ücretsiz Yayına Alma (Deploy)

Bu site statik olduğu için aşağıdaki servislerde **1 dakikada tamamen ücretsiz** yayına alınabilir:
- **GitHub Pages**: Projeyi bir GitHub reposuna push edip `Settings > Pages` kısmından `main` dalını seçerek anında yayına alabilirsiniz.
- **Vercel** veya **Netlify**: Proje klasörünü sürükle-bırak yaparak veya reponuzu bağlayarak saniyeler içinde yayına alabilirsiniz.
- **Cloudflare Pages**: Ücretsiz ve küresel CDN üzerinde barındırma için idealdir.
