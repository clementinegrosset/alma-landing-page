# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Alma is a "coming soon" landing page for a booking platform dedicated to independent beauty professionals. It's a single-page static site deployed on Cloudflare Pages.

## Architecture

- **Single HTML file** (`index.html`) containing all markup, styles, and scripts
- **No build process** - all dependencies loaded via CDN (Tailwind CSS, Iconify, Google Fonts)
- **Two modal components**: waitlist signup form and info modal, controlled via vanilla JS

## Development

Open `index.html` directly in a browser. No server or build step required.

## Deployment

Push to GitHub triggers automatic deployment via Cloudflare Pages.

## Key Patterns

- **Styling**: Tailwind utility classes with custom CSS animations (fog drift effects, modal transitions)
- **Fonts**: Space Grotesk (`font-space`) for headings, Inter (`font-geist`) for body text
- **Modal system**: Toggle via `toggleModal(modalId)` function, uses CSS visibility/transform for animations
- **Form handling**: Currently client-side only (`handleSubmit` logs to console) - needs backend integration
