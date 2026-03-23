# lysfjord.no

Personal website of Erik Menkin Lysfjord. Built with SvelteKit, content managed via Sanity, deployed on Vercel.

## Stack

- **Framework**: SvelteKit (Svelte 4)
- **CMS**: Sanity
- **Fonts**: Inter Variable, Lora Variable
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Pages

- **Home** — intro with links to GitHub, LinkedIn, and email
- **Books** — reading list fetched from Sanity, grouped by year with star ratings and notes
- **Resume** — work experience, education, and volunteering fetched from Sanity

## Developing

Install dependencies:

```bash
pnpm install
```

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

Required environment variables:

```
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_TOKEN=
```

Start the dev server:

```bash
pnpm dev
```

## Building

```bash
pnpm build
pnpm preview
```

## Type checking

```bash
pnpm check
```
