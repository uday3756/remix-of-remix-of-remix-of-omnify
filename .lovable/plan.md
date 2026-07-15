## Problem

The intro overlay renders only the title and "Loading your experience…" on a dark background. The 3D gallery never appears because:

1. `useTexture` (inside `GalleryScene`) **suspends** while it downloads the Unsplash images, but the `<Canvas>` in `3d-gallery-photography.tsx` has no `<Suspense>` boundary. React unmounts the scene subtree during suspense, so the canvas stays empty.
2. Even if it didn't suspend forever, remote Unsplash hotlinks are slow/unreliable from the sandbox preview, so they'd rarely resolve inside the 5-second window.
3. The fade-out begins at 4.5 s, giving almost no visible time even in the best case.

## Fix

### 1. `src/components/ui/3d-gallery-photography.tsx`
- Wrap `<GalleryScene />` inside the `<Canvas>` with `<Suspense fallback={null}>` so texture loading doesn't blank the canvas.
- Import `Suspense` from `react`.

### 2. `src/components/IntroGallery.tsx`
- Replace the 8 remote Unsplash URLs with reliable local assets. Use Lovable Assets: generate (or pick from existing) 6–8 on-brand gym/family-activity images and reference them via `.asset.json` pointers so they're served from the CDN and load instantly.
- Extend the intro to give the gallery time to be seen:
  - Show gallery for 5 s of *visible* time, then fade for 700 ms (total ~5.7 s).
  - Start the fade-out timer only after the first frame paints (via `requestAnimationFrame`) so slow first paint doesn't eat the whole intro.
- Keep `document.body.style.overflow = "hidden"` during intro.
- Optional: add a subtle radial gradient behind the canvas so the theme color shows through instead of a flat dark rectangle if a texture is momentarily missing.

### 3. Sanity checks after edit
- Reload `/` and confirm images appear within ~1 s and auto-scroll for the remainder.
- Confirm the overlay disappears and the normal home page (Header/Hero/Overview/ServicesExplorer) is interactive afterward.
- Confirm no console errors from three.js / react-three-fiber.

## Technical notes

- `<Suspense>` must be *inside* `<Canvas>`, not outside — r3f runs its own reconciler and the outer React tree can't catch suspensions from inside the canvas subtree.
- Local/CDN images also avoid CORS issues with `THREE.TextureLoader`, which silently fails on some cross-origin hosts.
- No changes to `src/routes/index.tsx` are needed; it already mounts `IntroGallery` client-side after hydration, which is correct (WebGL can't run during SSR).
