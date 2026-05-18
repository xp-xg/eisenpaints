const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');
const pages = [
  'about', 'calculator', 'contact', 'find-a-dealer', 
  'products', 'projects', 'resources', 'visualizer'
];

for (const p of pages) {
  const filePath = path.join(appDir, p, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to replace the hero image src
  // We look for the first `<Image` tag inside a section that has `relative` and `overflow-hidden`
  // Actually, we can just replace the specific `src="/images/carousel/..."` or similar in the first `<section`
  
  // Replace the image source with /images/splash.jpg
  content = content.replace(/src="\/images\/[A-Za-z0-9_/\-\s\.]+"/g, (match, offset) => {
    // Only replace if it's the hero image (usually the first one, or has priority)
    // A bit risky. Let's just do it manually with regex for the specific hero images.
    return match;
  });

  // Let's do a more precise replacement using regex.
  // Find the hero <section> which usually starts with `<section className="relative h-[...`
  // We'll replace the `src` inside it and remove the dark overlay.
}
