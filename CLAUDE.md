# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Balma is a showcase (vitrine) site for a booking and management platform dedicated to independent beauty professionals. It's a static site deployed on Cloudflare Pages.

## Architecture

- **Main Landing Page** (`index.html`): full vitrine with hero, problem/solution, key features (4), testimonials, how it works (3 steps), pricing, FAQ, final CTA, and footer. Single primary CTA: "Rejoindre la liste d'attente". Primary button color: gold (#C9A227), same as `docs/caisse.html` (Tailwind theme `gold-500` / `gold-600`).
- **Auxiliary Pages** in `docs/` (e.g., `creation-site-loading.html`, `caisse.html`, `site-editor.html`)
- **No build process** - all dependencies loaded via CDN (Tailwind CSS, Iconify, Google Fonts)
- **Two modal components**: waitlist signup form and info ("À propos") modal, controlled via vanilla JS; info modal accessible from footer

## Backend

- **Cloudflare Pages Functions** in `functions/api/`
- **Waitlist API** (`/api/waitlist`): Receives form submissions and saves to Airtable
- **Environment variables** (`.dev.vars` for local, Cloudflare dashboard for prod): `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`, `AIRTABLE_TABLE_NAME`, `BREVO_API_KEY`

## Development

Open `index.html` directly in a browser for frontend. For backend testing, use `npx wrangler pages dev .`

## Deployment

Push to GitHub triggers automatic deployment via Cloudflare Pages.

## Key Patterns

- **Styling**: Tailwind utility classes with custom CSS animations (fog drift effects, modal transitions, gold shine). Primary CTA uses `bg-gold-500` / `hover:bg-gold-600` (see `tailwind.config` in `index.html`).
- **Fonts**: Space Grotesk (`font-space`) for headings, Inter (`font-geist`) for body text, Poppins for logo
- **Landing sections**: Hero → Problème/Solution → Fonctionnalités (alternating layout) → Témoignages → Comment ça marche → Tarifs → FAQ → CTA final → Footer (legal, contact, À propos, social)
- **Modal system**: Toggle via `toggleModal(modalId)` function, uses CSS visibility/transform for animations
- **Form handling**: Waitlist form submits to `/api/waitlist` (Cloudflare Pages Function) which saves to Airtable
- **Animations**: Custom keyframes for fog, slide-up, gold shine

## Instructions for Claude

- **Keep CLAUDE.md updated**: When committing and pushing changes, update this file if the changes affect architecture, features, dev commands, dependencies, or code patterns.
