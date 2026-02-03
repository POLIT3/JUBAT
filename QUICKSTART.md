# JUBAT Website - Quick Start Guide

## 🚀 Getting Started

Your JUBAT Purified Drinking Water website is ready to use! Follow these simple steps to get it running.

## 📋 What's Included

✅ 5 Complete HTML Pages
- Homepage (index.html)
- About Us / Process (about.html)
- Products (products.html)
- Quality & Science (quality.html)
- Contact (contact.html)

✅ Professional Styling (design.css)
✅ WhatsApp Integration (logic.js)
✅ Fully Responsive Design
✅ Mobile-Friendly Navigation

## 🖼️ Adding Images

1. **Navigate to the images folder:** `JUBAT/images/`
2. **Add these image files:**
   - See `images/README.md` for the complete list
   - Any format: JPG, PNG, or WebP
   - Recommended: High-quality, water/purity themed images

3. **Example image names needed:**
   - `hero-water.jpg`
   - `500ml-bottle.jpg`
   - `1liter-bottle.jpg`
   - `5liter-bottle.jpg`
   - `10liter-bottle.jpg`
   - `reverse-osmosis.jpg`
   - `carbon-filtration.jpg`
   - `uv-treatment.jpg`
   - `refill-service.jpg`
   - And more (see README.md for full list)

## 💬 WhatsApp Setup

The website automatically forwards users to WhatsApp:
- **Order Now:** +254751659527
- **Schedule Order:** +254723726530

These numbers are already configured in `logic.js`. To change them:

1. Open `public/logic.js`
2. Find these lines (near the top):
   ```javascript
   const ORDER_PHONE = '+254751659527';
   const SCHEDULE_PHONE = '+254723726530';
   ```
3. Update the phone numbers as needed

## 🌐 How to Host Your Website

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named `jubat-website`
3. Upload the files
4. Go to Settings → Pages
5. Select `main` branch and save
6. Your site will be live at: `https://username.github.io/jubat-website`

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop your `public` folder
3. Your site goes live instantly
4. Get a custom domain later

### Option 3: Traditional Web Hosting
1. Use any web hosting provider (Bluehost, HostGator, etc.)
2. Upload files via FTP or control panel
3. Point domain to your hosting

### Option 4: Local Testing
Simply open `public/index.html` in your web browser to see the website locally

## 📱 Testing on Mobile

1. Open the website in your browser
2. Press `F12` to open Developer Tools
3. Click the Mobile Device icon (top-left of DevTools)
4. Select your device type to preview

Or:
- Test on your actual phone by:
  - Uploading to a web server, or
  - Using a local tunnel service (ngrok)

## 🎨 Customizing Content

### Contact Information
Edit `public/contact.html` and `public/index.html` to update:
- Phone numbers (change all instances)
- Email address
- Physical address

### Company Description
Edit text in:
- `public/index.html` - Homepage content
- `public/about.html` - About Us page
- `public/products.html` - Products list
- `public/quality.html` - Quality info

### Colors
Edit `public/design.css` - Look for `:root` section:
```css
:root {
    --primary-color: #0066cc;    /* Blue */
    --secondary-color: #00b4d8;  /* Light Blue */
    --accent-color: #ff6b6b;     /* Red */
}
```

## ✅ Verification Checklist

- [ ] All 5 HTML files are in `public/` folder
- [ ] `design.css` styling is present
- [ ] `logic.js` is in place
- [ ] Images folder exists
- [ ] WhatsApp numbers are correct
- [ ] Contact info is updated
- [ ] Website displays correctly in browser
- [ ] Links navigate between pages properly
- [ ] Order/Schedule buttons open WhatsApp

## 🔧 Troubleshooting

### Images not showing?
- Check image file names match exactly
- Verify files are in `images/` folder
- Check file extensions (.jpg, .png, etc.)
- Make sure paths in HTML are correct

### Links not working?
- Check file names (case-sensitive)
- Ensure .html extensions are included
- Verify navigation links are up to date

### WhatsApp not opening?
- Check phone numbers include country code (+254)
- Test link: `https://wa.me/254751659527`
- Ensure user has WhatsApp installed

### Mobile menu not working?
- Check `logic.js` is loaded
- Verify no JavaScript errors in console
- Test on actual mobile device

## 📞 Support Contact Info

For the website, users can reach you:
- **Phone:** 0723 726 530 | 0716 164 958 | 0741 948 340
- **WhatsApp Orders:** +254751659527
- **WhatsApp Scheduling:** +254723726530
- **Location:** South B Branch

## 🚀 Next Steps

1. ✅ Add all required images
2. ✅ Verify all pages load correctly
3. ✅ Test WhatsApp links
4. ✅ Test on mobile devices
5. ✅ Deploy to web hosting
6. ✅ Share website link with customers

---

**Your website is production-ready!**
Just add images and deploy. No coding knowledge needed for most customizations.

For questions, check the main README.md file for more details.
