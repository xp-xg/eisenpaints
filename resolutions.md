# Hero Image Resolution Guidelines

This document summarizes the best practices and recommended dimensions for hero images to ensure they look great on all devices (Desktop, Mobile Portrait, and Mobile Landscape).

## The Challenge: Different Screen Shapes
Most modern websites use a full-screen hero section (`h-screen`). 
- **Desktops** are wide (Landscape).
- **Phones** are tall (Portrait).
- **The Result:** Using a single horizontal image will cause the sides to be cut off on phones. Using a vertical image will cause the top/bottom to be cut off on desktops.

---

## Recommended Dimensions

### 1. The "One-Size-Fits-All" (Recommended)
If you want to use **one single image** for every device:
- **Dimensions:** `2000 x 2000 pixels` (Square / 1:1 ratio)
- **Why:** High resolution for big screens and enough height for tall phones.
- **The Safe Zone Rule:** Place all important details (text, faces, products) in the **center 1000 x 1000 px** area. The outer edges should only contain background content that can be safely cropped.

### 2. Dual-Image Setup (Best Quality)
If you can provide two different versions of the image:
- **Desktop & Landscape:** `1920 x 1080 pixels` (16:9 ratio)
- **Mobile Portrait:** `1080 x 1920 pixels` (9:16 ratio)

---

## Technical Explanation: `object-cover`
Your website uses the CSS property `object-cover`. This ensures that:
1. The image always fills the entire screen.
2. There are never any empty white or black bars.
3. The image is never "stretched" or "squashed."

**Trade-off:** To keep the image perfectly proportioned while filling a screen of a different shape, the browser must "zoom in" and crop the edges. This is why a **Square** or a **Dedicated Portrait** image is needed for mobile phones to see all the details.
