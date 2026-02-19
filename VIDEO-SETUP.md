# 🎥 Adding Your Hero Video Background

The hero section is set up to display a full-screen video background. Here's how to add your pizza video.

---

## Quick Setup

### 1. Film Your Hero Video

**What to film:**
- Close-up shot of pizza
- Freshly grated parmesan falling onto melted cheese
- Maybe some slow-mo action
- Steam rising from fresh-baked pizza

**Specs:**
- **Length:** 5-10 seconds (it loops)
- **Orientation:** Landscape (16:9)
- **Resolution:** 1920x1080 minimum (4K if possible)
- **Format:** MP4 (H.264 codec)
- **File size:** Keep under 5MB for fast loading

---

### 2. Add the Video File

1. Export your video as `hero-pizza.mp4`
2. Place it in: `/Users/timothydobies/apartment-pizza-site/images/`
3. That's it! The HTML is already configured to use it.

---

### 3. Alternative: Use a Still Image (Temporary)

If you don't have a video yet:

**Option A: Dark gradient (already set up)**
- The CSS has a fallback dark gradient background
- Site works perfectly without a video

**Option B: Use a high-quality photo**

Edit `index.html` and replace the video section with an image:

```html
<!-- Replace this: -->
<video autoplay muted loop playsinline class="hero-video">
    <source src="images/hero-pizza.mp4" type="video/mp4">
</video>

<!-- With this: -->
<img src="images/hero-pizza.jpg" alt="Pizza" class="hero-video" style="object-fit: cover;">
```

Then add your image to `/images/hero-pizza.jpg`

---

## Video Optimization Tips

### Compress Your Video

Use **HandBrake** (free) to compress:
1. Download [HandBrake](https://handbrake.fr/)
2. Load your video
3. Preset: "Web" → "Gmail Large 3 Minutes 720p30"
4. Export

**Or use FFmpeg (command line):**

```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -vf "scale=1920:1080" -an hero-pizza.mp4
```

This will:
- Resize to 1080p
- Remove audio (not needed for background video)
- Compress to ~2-3MB

---

## Stock Video Alternative

Don't have your own pizza footage yet?

**Free stock video sites:**
- [Pexels](https://pexels.com/videos) - Search "pizza"
- [Pixabay](https://pixabay.com/videos) - Free commercial use
- [Coverr](https://coverr.co) - Free for commercial use

Download a high-quality pizza video, compress it, and use as placeholder until you film your own.

---

## Technical Details

The video section is already coded with:

✅ Autoplay (muted)
✅ Loop (plays forever)
✅ Mobile-optimized (`playsinline`)
✅ Dark overlay (70-85% opacity so text is readable)
✅ Fallback gradient if video doesn't load

---

## Mobile Performance

The video will auto-play on desktop but may not on mobile (browser restrictions).

**Mobile fallback:**
- The dark gradient background shows automatically
- Alternatively, add a mobile-specific poster image:

```html
<video autoplay muted loop playsinline class="hero-video" poster="images/hero-poster.jpg">
    <source src="images/hero-pizza.mp4" type="video/mp4">
</video>
```

---

## Need Help?

Check the main README.md or DEPLOY-GUIDE.md for other setup questions.
