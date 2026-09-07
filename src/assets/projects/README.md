# Project screenshots

For directly served screenshots, use `public/projects/` instead of this source folder, then set the matching project's `image` field in `src/data/projects.js`.

Example:

```js
image: '/projects/cuppanord.webp'
```

Use WebP or JPG images around 1600px wide for a crisp, lightweight project visual. The site lazy-loads them and keeps the existing stylized interface as a fallback until an image is assigned.
