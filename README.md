# 🍕 Apartment Pizza Lab - Website

**Your money-making pizza content creator site!**

This is your complete website for selling the Apartment Pizza Playbook and earning affiliate commissions from gear recommendations.

---

## 🎯 What's Included

### Pages
- **`index.html`** - Landing page with Playbook sales section + email opt-in
- **`gear.html`** - Gear recommendations organized by problem (with affiliate links)

### Structure
- ✅ Mobile-first responsive design
- ✅ Professional, clean layout
- ✅ Gumroad integration (for selling Playbook)
- ✅ Beehiiv email opt-in (for building your list)
- ✅ Affiliate link tracking
- ✅ Fast, lightweight (no frameworks needed)

---

## 🚀 Quick Start

### 1. Set Up Gumroad (Sell Your Playbook)

1. Go to [gumroad.com](https://gumroad.com) and sign up
2. Create a new product:
   - Name: "Apartment Pizza Playbook"
   - Price: $29
   - Upload your PDF (once it's done)
3. Copy your product link (looks like: `https://your-username.gumroad.com/l/playbook`)
4. Open `js/main.js` and update line 7:
   ```javascript
   gumroadProductLink: 'https://YOUR-ACTUAL-LINK-HERE'
   ```

**Why Gumroad?**
- Handles payments, PDF delivery, taxes, EU VAT
- FREE (just 10% per sale)
- No monthly fees

---

### 2. Set Up Beehiiv (Email List)

1. Go to [beehiiv.com](https://beehiiv.com) and sign up
2. Create your publication: "Apartment Pizza Lab"
3. Go to Settings → Grow and copy your Publication ID
4. Open `js/main.js` and update line 10:
   ```javascript
   beehiivPublicationId: 'YOUR_PUBLICATION_ID'
   ```

**Why Beehiiv?**
- FREE up to 2,500 subscribers
- Beautiful email editor
- Built for creators

**Email Opt-In Flow:**
- User enters email → gets free cheat sheet
- You nurture them → sell Playbook later
- Email list = your biggest asset

---

### 3. Set Up Amazon Affiliate Links (Earn Commissions)

1. Join Amazon Associates: [affiliate-program.amazon.com](https://affiliate-program.amazon.com)
2. Get approved (usually takes 1-3 days)
3. Create affiliate links for each product:
   - Digital scale
   - Sheet pan
   - Thermometer
   - Pizza steel
   - Bench scraper
   - Pizza peel
4. Open `js/main.js` and update the `affiliateLinks` object (lines 13-25)

**Example:**
```javascript
affiliateLinks: {
    'scale': 'https://amazon.com/dp/PRODUCT-ID?tag=your-tag-20',
    'thermometer': 'https://amazon.com/dp/PRODUCT-ID?tag=your-tag-20',
    // ... etc
}
```

**Earnings:**
- 4-8% commission per sale
- Passive income from every gear page click

---

### 4. Deploy to Netlify (Go Live!)

#### Option A: Drag & Drop (Easiest)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag the entire `apartment-pizza-site` folder into Netlify
3. Done! Your site is live.

#### Option B: GitHub + Netlify (Recommended)
1. Push this folder to GitHub (see below)
2. Connect Netlify to your GitHub repo
3. Auto-deploy on every update

---

## 📤 Push to GitHub

```bash
cd apartment-pizza-site
git init
git add .
git commit -m "Initial commit: Apartment Pizza Lab website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR-USERNAME/apartment-pizza-site.git
git branch -M main
git push -u origin main
```

Then connect Netlify to this GitHub repo for auto-deployment.

---

## ✏️ Customization

### Change Brand Name
If you decide "Apartment Pizza Lab" isn't the right name:

1. Find & replace "Apartment Pizza Lab" across all files
2. Update the logo emoji (🍕) if you want

### Add Your Social Links
Open `index.html` and `gear.html`, scroll to the footer, and update:
```html
<a href="https://tiktok.com/@your-username">TikTok</a>
<a href="https://instagram.com/your-username">Instagram</a>
```

### Add Analytics
Recommended: [Plausible Analytics](https://plausible.io) (privacy-friendly, simple)

Add this before `</head>` in both HTML files:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 💰 Monetization Overview

### Revenue Stream #1: Playbook Sales
- **Price:** $29
- **Margin:** ~$26 after Gumroad fee
- **Volume:** 10 sales/month = $260/month

### Revenue Stream #2: Affiliate Commissions
- **Commission:** 4-8% per sale
- **Example:** User buys $60 pizza steel = $3-5 for you
- **Volume:** 100 clicks/month, 5% convert = 5 sales = $15-25/month

### Revenue Stream #3: Email List (Future)
- Build to 1,000+ subscribers
- Launch bundle deals, upsells
- Sponsored emails when bigger

**Total Potential (conservative):**
- 10 Playbook sales = $260
- Affiliate commissions = $50
- **Total: $310/month** from a tiny pizza content channel

---

## 📋 Your Next Steps

### Immediate (This Week):
1. ✅ Sign up for Gumroad
2. ✅ Sign up for Beehiiv
3. ✅ Join Amazon Associates
4. ✅ Deploy site to Netlify
5. ✅ Start posting TikTok/IG videos (use the 20 scripts!)

### Week 2-4:
1. ✅ Create the Playbook PDF (use the outline provided)
2. ✅ Upload to Gumroad
3. ✅ Update buy button link in `js/main.js`
4. ✅ Create "free cheat sheet" PDF for email opt-in

### Month 2+:
1. Post 3-5 videos per week
2. Monitor which videos drive traffic
3. Double down on what works
4. Build email list to 500+ subscribers
5. Launch a bundle or upsell

---

## 🎥 Video → Money Flow

```
TikTok/IG Video (pale top fix)
    ↓
    "Link in bio"
    ↓
Your Landing Page (index.html)
    ↓
    ├─→ Buy Playbook ($29) 💰
    ├─→ Free Cheat Sheet (email capture) 📧
    └─→ Check Gear Page → Click Affiliate Link 💰
```

**Your Job:**
1. Make drool-worthy pizza videos
2. Drive traffic to your site
3. Optimize conversions (test pricing, copy, etc.)

---

## 🛠 Troubleshooting

### "The buy button doesn't work!"
- Did you update the Gumroad link in `js/main.js`?
- Check the browser console for errors (F12 → Console tab)

### "Email form does nothing"
- The form needs Beehiiv integration (see Setup step #2)
- For now, it just shows a success message

### "Affiliate links say 'coming soon'"
- You need to add your actual Amazon affiliate links to `js/main.js`

---

## 📞 Support

Questions? Issues? Email me or open a GitHub issue.

**Now go make some money with pizza content! 🍕💰**
