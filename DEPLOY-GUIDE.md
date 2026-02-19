# 🚀 Deployment Guide

## Quick Deploy to Netlify (3 Steps)

### Option 1: Drag & Drop (Easiest - 2 minutes)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up/login
3. Drag the entire `apartment-pizza-site` folder onto the page
4. **Done!** Your site is live.

Netlify will give you a URL like: `https://random-name-12345.netlify.app`

You can change this to a custom subdomain (free) or add your own domain.

---

### Option 2: GitHub + Netlify (Recommended - Auto-deploy)

#### Step 1: Create GitHub Repo

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `apartment-pizza-site`
3. Make it **Public** or **Private** (your choice)
4. **Don't** initialize with README (we already have files)
5. Click "Create repository"

#### Step 2: Push Your Code

```bash
# In Terminal, navigate to the project folder:
cd /Users/timothydobies/apartment-pizza-site

# Add GitHub as remote (replace YOUR-USERNAME):
git remote add origin https://github.com/YOUR-USERNAME/apartment-pizza-site.git

# Push your code:
git push -u origin main
```

#### Step 3: Connect Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Authorize Netlify to access your repos
5. Select `apartment-pizza-site`
6. Build settings:
   - **Build command:** (leave blank)
   - **Publish directory:** `.` (dot)
7. Click "Deploy site"

**Now every time you push to GitHub, Netlify auto-deploys!**

---

## Test Locally First

Before deploying, test the site on your computer:

```bash
cd /Users/timothydobies/apartment-pizza-site

# If you have Python 3:
python3 -m http.server 8000

# OR if you have Node.js:
npx serve .
```

Then open: http://localhost:8000

---

## After Deploying

### 1. Update Your Links

Once deployed, your site will have a URL. Update:

- **TikTok bio:** Add your Netlify URL
- **Instagram bio:** Add your Netlify URL
- **Video captions:** "Link in bio" points here

### 2. Add Your Custom Domain (Optional)

Netlify lets you add a custom domain:
- Example: `apartmentpizzalab.com`
- Buy from Namecheap ($10-15/year)
- Connect in Netlify settings

### 3. Set Up Gumroad & Beehiiv

**Don't forget to update `js/main.js` with your actual:**
- Gumroad product link (line 7)
- Beehiiv publication ID (line 10)
- Amazon affiliate links (lines 13-25)

---

## SSL Certificate

Netlify automatically gives you FREE SSL (https://). No setup needed!

---

## Troubleshooting

### "Site is blank after deploying"
- Check the Netlify deploy log for errors
- Make sure `index.html` is in the root folder

### "Links don't work"
- Netlify might need a `_redirects` file for SPA routing
- For this simple site, you shouldn't need it

### "My custom domain isn't working"
- DNS can take 24-48 hours to propagate
- Check Netlify's DNS instructions

---

## What's Next?

1. ✅ Deploy the site
2. ✅ Add link to social media bios
3. ✅ Set up Gumroad product
4. ✅ Set up Beehiiv email
5. ✅ Start posting videos!

**Need help? Check the README.md for full setup instructions.**
