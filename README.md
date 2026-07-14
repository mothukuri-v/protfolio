# Portfolio — React Version

A full React conversion of your static HTML/CSS/jQuery portfolio. No jQuery, Typed.js,
or Owl Carousel dependencies — the typing effect, sticky navbar, scroll-to-top button,
and project carousel are all rebuilt as plain React (hooks + CSS).

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Add your assets (these are **not included** — copy them over from your original repo):
   ```
   public/images/car.png
   public/images/ecom.png
   public/images/picture.jpg
   public/images/portfolio.png
   public/images/image-.png   (used by Banking System & LMS cards)
   public/vid/vid1.mp4
   ```

3. Run locally:
   ```
   npm start
   ```

4. Build for production:
   ```
   npm run build
   ```

## Structure

```
src/
  App.jsx              -> composes all sections
  App.css              -> all styles (from style.css, class names unchanged)
  hooks/
    useTypewriter.js    -> replaces Typed.js
  components/
    Navbar.jsx          -> sticky nav + mobile menu
    ScrollUpButton.jsx  -> back-to-top button
    Home.jsx            -> hero section w/ background video + typewriter
    About.jsx
    Services.jsx
    Skills.jsx           -> experience, education, animated skill bars
    Projects.jsx         -> custom carousel (replaces Owl Carousel), autoplay + dots
    Contact.jsx          -> controlled form, still POSTs to your Google Apps Script
    Footer.jsx
```

## Notes on what changed vs. the original

- **Typed.js → `useTypewriter` hook**: same cycling-strings behavior, no external script tag needed.
- **Owl Carousel (jQuery) → custom `Projects` carousel**: responsive items-per-view (1/2/3 based on width), autoplay every 2.5s, clickable dots, all in React state — no jQuery.
- **Sticky navbar / scroll-up button**: converted `$(window).scroll(...)` into `useEffect` + `window.addEventListener('scroll', ...)`.
- **Mobile menu toggle**: `useState` instead of `.toggleClass`.
- **Contact form**: now a controlled form (`useState` for fields); submit handler still does the same `fetch(scriptURL, { method: 'POST', body: new FormData(form) })` to your existing Google Sheet script.
- Fixed a couple of small bugs from the original CSS along the way (an empty `.navbar.sticky .menu li a {}` rule and an invalid `background(141, 213, 34)` value).
