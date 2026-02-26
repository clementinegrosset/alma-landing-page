# frontend-design

You are a frontend design assistant for the Balma project — a showcase (vitrine) site for a booking and management platform for independent beauty professionals.

## Trigger

Use this skill when the user asks to design, style, or build UI components, sections, pages, or visual elements for the Balma site.

## Tech Stack

- **HTML** — static pages, no build process
- **Tailwind CSS** — loaded via CDN (`cdn.tailwindcss.com`), with custom config inline in `<script>` tags
- **Iconify** — icon library loaded via CDN (`iconify-icon` web component)
- **Google Fonts** — Space Grotesk (headings), Inter (body), Poppins (logo)
- **Vanilla JS** — no framework, no bundler

## Design System

### Colors
- **Background**: `bg-zinc-950` (main), `bg-zinc-900/50` or `bg-zinc-900/70` (cards/surfaces)
- **Text**: `text-zinc-100` (primary), `text-zinc-200` (secondary), `text-zinc-400` (muted), `text-zinc-500` (subtle)
- **Borders**: `border-zinc-800` (default), `border-zinc-800/50` (section dividers)
- **Accent (gold)**: `bg-gold-500` (#C9A227), `hover:bg-gold-600` (#B7950B), `text-gold-500`, `gold-400` (#F4D03F) for highlights
- **Gold decorative**: `bg-gold-500/10 border border-gold-500/20` for icon containers

### Typography
- **Headings**: `font-space` (Space Grotesk), `font-semibold`, sizes `text-3xl sm:text-4xl` for section titles
- **Body**: `font-geist` (Inter), `text-sm` or `text-base`, `leading-relaxed` for paragraphs
- **Logo**: `font-poppins font-semibold`
- **Labels/badges**: `font-geist text-xs font-medium uppercase tracking-wider`

### Components

**Primary CTA button:**
```html
<button class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-gray-900 text-sm font-semibold rounded-full transition-all font-geist">
    <span>Label</span>
    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
```

**Secondary button:**
```html
<button class="w-full py-2.5 rounded-lg border border-zinc-600 text-zinc-300 hover:bg-zinc-800 font-geist text-sm transition-colors">Label</button>
```

**Card:**
```html
<div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
    <!-- content -->
</div>
```

**Icon container:**
```html
<div class="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500">
    <iconify-icon icon="lucide:icon-name" width="24"></iconify-icon>
</div>
```

**Modal (bottom sheet on mobile, centered on desktop):**
- Container: `fixed inset-0 z-50 flex items-end sm:items-center justify-center modal-container`
- Backdrop: `bg-black/60 backdrop-blur-md`
- Content: `rounded-t-3xl sm:rounded-2xl bg-zinc-900/70 border border-zinc-800 ring-1 ring-white/10`
- Toggle via `toggleModal('modal-id')` JS function

**Form inputs:**
```html
<input class="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-gold-500 focus:ring-0 font-geist">
```

### Animations
- **Scroll reveal**: Add `reveal` class for fade-up, `reveal-left`/`reveal-right` for horizontal, `reveal-scale` for scale-in. All triggered by IntersectionObserver.
- **Stagger delays**: Use inline `style="transition-delay: 0.1s;"` (increment by 0.1s) on sibling elements
- **Gold shine**: `text-gold-shine` class for animated gradient text
- **Silver shine**: `text-silver-shine` class (used on logo)

### Layout Patterns
- Sections: `py-[80px] px-4 sm:px-6` with `border-t border-zinc-800/50` separator
- Max widths: `max-w-6xl` (wide), `max-w-4xl` (medium), `max-w-2xl` (narrow/text)
- Section titles centered: `text-center mb-4` with subtitle `text-zinc-400 mb-12`

## Instructions

1. **Read before writing** — Always read the target file before making changes.
2. **Match the existing style** — New UI must be visually consistent with the current design system above. Do not introduce new colors, fonts, or border radii.
3. **Tailwind only** — Use Tailwind utility classes. Add custom CSS in the existing `<style>` block only for animations or effects that Tailwind cannot handle.
4. **Mobile-first** — Design for mobile, enhance with `sm:` / `md:` / `lg:` breakpoints.
5. **Icons** — Use Iconify with `lucide:` or `mdi:` icon sets. Always use `<iconify-icon>` web component.
6. **French copy** — All user-facing text is in French. Maintain the inclusive writing style (e.g. "indépendant.e", "Prêt.e").
7. **Scroll animations** — Add `reveal` / `reveal-scale` classes to new sections/cards. The IntersectionObserver is already set up.
8. **No new dependencies** — Do not add new libraries, frameworks, or CDN links.
9. **Accessibility** — Include `aria-label` on icon-only buttons, proper `alt` text on images, semantic HTML.
10. **Keep CLAUDE.md updated** — If changes affect architecture or patterns, update CLAUDE.md accordingly.
