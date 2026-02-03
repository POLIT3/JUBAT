# JUBAT Purified Drinking Water - Website

A modern, responsive website for JUBAT Purified Drinking Water with WhatsApp integration for orders and scheduling.

## Features

✅ **Multi-Page Website**
- Homepage with Hero Section
- About Us / Process Page
- Products / Shop Page
- Quality & Science Page
- Contact Page

✅ **WhatsApp Integration**
- Order Now button → +254751659527
- Schedule Order button → +254723726530
- Contact form integration with WhatsApp

✅ **Responsive Design**
- Works on Desktop, Tablet, and Mobile devices
- Mobile hamburger menu
- Optimized touch targets

✅ **Professional Styling**
- Modern color scheme
- Smooth animations and transitions
- Easy navigation

## File Structure

```
JUBAT/
├── public/
│   ├── index.html          # Homepage
│   ├── about.html          # About Us / Process Page
│   ├── products.html       # Products / Shop Page
│   ├── quality.html        # Quality & Science Page
│   ├── contact.html        # Contact Page
│   ├── design.css          # Styling
│   └── logic.js            # JavaScript & WhatsApp Integration
└── images/                 # Image folder (see below)
```

## Images Required

Create placeholder or actual images in the `images/` folder:

### Homepage Images
- `hero-water.jpg` - Hero section banner image

### About Us Page
- `reverse-osmosis.jpg` - Reverse Osmosis process
- `carbon-filtration.jpg` - Carbon filtration process
- `uv-treatment.jpg` - UV treatment process

### Products Page
- `500ml-bottle.jpg` - 500ml bottle
- `1liter-bottle.jpg` - 1 Liter bottle
- `1.5liter-bottle.jpg` - 1.5 Liter bottle
- `5liter-bottle.jpg` - 5 Liter bottle
- `10liter-bottle.jpg` - 10 Liter bottle
- `refill-service.jpg` - Refill service image

### Quality Page
- `pre-treatment.jpg` - Pre-treatment stage
- `ro-process.jpg` - Reverse Osmosis process
- `carbon-filter.jpg` - Carbon filtration
- `uv-process.jpg` - UV treatment process
- `bottling.jpg` - Bottling process

## How to Use

### 1. Basic Setup
- All HTML pages are ready to use
- CSS styling is complete and responsive
- JavaScript handles all interactions

### 2. Add Images
1. Create an `images` folder in the root directory if not present
2. Add images with the names listed above
3. Images can be .jpg, .png, or .webp format

### 3. Deploy
- The website is static HTML/CSS/JS - no backend required
- Can be hosted on any web server
- Works on GitHub Pages, Netlify, Vercel, or traditional hosting

### 4. Customize
- Update company contact numbers in `contact.html` footer
- Modify WhatsApp numbers in `logic.js` if needed:
  - `ORDER_PHONE = '+254751659527'`
  - `SCHEDULE_PHONE = '+254723726530'`

## WhatsApp Integration

### Order Now Button
- Directs users to WhatsApp: +254751659527
- Pre-filled message about placing an order

### Schedule Order Button
- Directs users to WhatsApp: +254723726530
- Pre-filled message about scheduling delivery/refill

### Contact Form
- Submits inquiry via WhatsApp
- Uses order phone number

## Contact Information

The website displays the following contact methods:
- **Phone Numbers:**
  - 0723 726 530
  - 0716 164 958
  - 0741 948 340

- **Location:** South B Branch
- **WhatsApp:**
  - Orders: +254751659527
  - Scheduling: +254723726530

## Mobile Responsive

The website is fully responsive with:
- Desktop optimization (1200px+)
- Tablet optimization (768px - 1200px)
- Mobile optimization (320px - 768px)
- Touch-friendly buttons and navigation
- Hamburger menu on mobile devices

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Tips

### Colors
Edit the CSS variables in `design.css`:
```css
--primary-color: #0066cc;
--secondary-color: #00b4d8;
--accent-color: #ff6b6b;
```

### Typography
Modify font sizes and families in `design.css`

### Content
Update text in HTML files as needed. All content is editable.

## Performance

- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading times
- SEO-friendly structure

## Footer

All pages include:
- Company information
- Contact details
- Quick navigation links
- Copyright notice

---

**Version:** 1.0
**Created:** February 2026
**For:** JUBAT Purified Drinking Water
