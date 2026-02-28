import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
app.get('/', (req, res) => {
  res.type('html').send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>Express on Vercel</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
       <header class="site-header">
        <div class="header-logo">
            <img src="http://bdescortservice.site/Jpg/Logo.jpeg" alt="Logo">
        </div>
        <div class="header-actions">
            <a href="#" class="auth-btn btn-signup">Join Now</a>
            <div class="menu-toggle" id="menuOpen"><i class="fa-solid fa-bars-staggered"></i></div>
        </div>
    </header>

    <!-- Slide Menu -->
    <div class="menu-overlay" id="menuOverlay"></div>
    <nav class="mobile-menu" id="mobileMenu">
        <div class="menu-header">
            <img src="http://bdescortservice.site/Jpg/Logo.jpeg" alt="Menu Logo">
            <p>VERIFIED ELITE NETWORK</p>
        </div>
        <div class="menu-body">
            <a href="index.html" class="menu-link"><i class="fa-solid fa-house"></i> Home</a>
            <a href="Gallery.html" class="menu-link"><i class="fa-solid fa-images"></i> Gallery</a>
            <a href="#" class="menu-link"><i class="fa-solid fa-newspaper"></i> News Update</a>
            <a href="Booking.html" class="menu-link"><i class="fa-solid fa-calendar-check"></i> Online Booking</a>
            <a href="Sign Up.html" class="menu-link"><i class="fa-solid fa-user-plus"></i> Sign Up</a>
            <a href="About.html" class="menu-link"><i class="fa-solid fa-circle-info"></i> About us</a>
            <a href="Download.html" class="menu-link"><i class="fa-solid fa-download"></i> Download</a>
            <a href="Premium Membership.html" class="menu-link"><i class="fa-solid fa-crown"></i> Premium Membership</a>
            <a href="Faq.html" class="menu-link"><i class="fa-solid fa-question-circle"></i> FAQ</a>
            <a href="Privacy Policy.html" class="menu-link"><i class="fa-solid fa-shield-halved"></i> Privacy Policy</a>
        </div>
    </nav>

    <!-- Stories -->
    <section class="story-section">
        <div class="story-container" id="storyContainer">
            <div class="story-item">
                <div class="story-ring"><div class="story-img" style="background:#222; display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-spinner fa-spin"></i></div></div>
                <span class="story-name">Loading...</span>
            </div>
        </div>
    </section>

    <!-- Banner -->
    <div class="banner-ad"> <img src="http://bdescortservice.site/Jpg/Ad1.jpeg" alt="Banner Ad"> </div>

    <!-- Featured Profiles Section -->
    <div class="section-header">
        <h2 class="section-title">Verified Profiles</h2>
        <a href="#" class="view-all">View All</a>
    </div>

    <div class="gallery-grid" id="profileGrid">
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #444;">
            <i class="fa-solid fa-circle-notch fa-spin fa-2x"></i>
        </div>
    </div>

    <!-- Latest Updates Section -->
    <div class="section-header">
        <h2 class="section-title">Latest Updates Today </h2>
    </div>

    <div class="news-strip-container">
        <div class="news-strip">
            <img src="http://bdescortservice.site/Jpg/IMG_0437.jpeg" alt="Update">
            <div class="news-strip-content">
                <div>
                    <span class="news-strip-meta">Hot Girls Booking</span>
                    <div class="news-strip-title">New Premium Models Available in Gulshan Area</div>
                </div>
                <div style="display:flex; flex-direction:column; gap:5px;">
                    <a href="Booking.html" class="btn-booking-news">Booking ??</a>
                    <div class="news-strip-time"><i class="fa-regular fa-clock"></i> 2 Hours Ago</div>
                </div>
            </div>
        </div>
        <div class="news-strip">
            <img src="http://bdescortservice.site/Jpg/IMG_0006.jpeg" alt="Update">
            <div class="news-strip-content">
                <div>
                    <span class="news-strip-meta">Verified</span>
                    <div class="news-strip-title">Secure & Discrete Payment Methods Added</div>
                </div>
                <div style="display:flex; flex-direction:column; gap:5px;">
                    <a href="Booking.html" class="btn-booking-news">Booking ??</a>
                    <div class="news-strip-time"><i class="fa-regular fa-clock"></i> 5 Hours Ago</div>
                </div>
            </div>
        </div>
    </div>

<!-- Banner Ad Container -->
<div class="banner-ad">

    <!-- Google Ad Banner -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-1075027323975545"
         data-ad-slot="1234567890"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>

</div>

    <!-- Verified News Updates Section -->
    <div class="section-header">
        <h2 class="section-title">Verified News Updates</h2>
    </div>

    <section class="news-updates" id="newsUpdateContainer">
        <div style="text-align: center; padding: 40px; color: #444; width: 100%;">
            <i class="fa-solid fa-circle-notch fa-spin fa-2x"></i>
            <p style="font-size: 12px; margin-top: 10px;">Connecting to News Box...</p>
        </div>
    </section>

<!-- Banner -->
  <div class="banner-ad"> <img src="http://bdescortservice.site/Jpg/Ad1.jpeg" alt="banner ad"> </div>

    <!-- Download App Footer Section -->
    <div class="download-box">
        <div class="download-title">Get The Official App</div>
        <p class="download-subtitle">Secure, Discrete, and Real-time updates on your device.</p>
        
        <div class="app-store-btns">
            <!-- App Store -->
            <a href="#" class="store-btn">
                <i class="fa-brands fa-apple"></i>
                <div class="btn-txt-wrap">
                    <span class="btn-txt-small">Download on the</span>
                    <span class="btn-txt-large">App Store</span>
                </div>
            </a>
            <!-- Play Store -->
            <a href="#" class="store-btn">
                <i class="fa-brands fa-google-play"></i>
                <div class="btn-txt-wrap">
                    <span class="btn-txt-small">Get it on</span>
                    <span class="btn-txt-large">Google Play</span>
                </div>
            </a>
        </div>
        <div class="mt-4 flex items-center justify-center gap-2 opacity-50">
            <i class="fa-solid fa-shield-halved text-xs text-green-500"></i>
            <span class="text-[10px] uppercase tracking-widest text-white">Verified & Secure APK</span>
        </div>
    </div>

    <footer>
        <div class="footer-logo">BD ESCORT SERVICES</div>
        <div class="footer-text">
           <p>BD ESCORT SERVICES AND ONLINE DATING WEB APPS,</p>
           Dhaka's premier 24-hour destination for elite companionship. Experience the easiest booking process in the city via our web app. 24/7 Outcall & InCall services available.
           <p style="font-size: 11px; color: #444; margin-top: 10px;">&copy; 2026 Elite Network. Discrete & Professional.</p>
        </div>
    </footer>
  `)
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'))
})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
