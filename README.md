# In-Game Photography

[![Netlify Status](https://api.netlify.com/api/v1/badges/a46beda4-7b15-4834-8da3-e52b4faeb917/deploy-status)](https://app.netlify.com/sites/ingame-photography/deploys)

> Built with Astro and using Notion API.

## [Demo](https://ingame-photography.netlify.app/)

## Features

- [Astro setup](astro.build/)
- [Notion API](https://developers.notion.com/)
- [Tailwind CSS](https://tailwindcss.com/) with dark/light theme enabled
- Github workflow + Dependabot setup
- Typescript
- Gallery powered by [photoswipe](https://photoswipe.com/)

## Setup

Create a new notion page similar to [this one](https://www.notion.so/highflyer/f14f1801015f48e5bd414a44be8d0038?v=fe256826c1b94e75b2236886d570e784).

Create an `.env` file at the root level and define the following variables:

```plain
NOTION_API_KEY=
DATABASE_ID=
```

You can find how to get these values for your page inside [the official documentation of Notion](https://developers.notion.com/docs/working-with-databases).

## Acknowledgemnets

Check out [Ema Suriano's repo](https://github.com/EmaSuriano/astro-art-portfolio). Inspired by his Astro theme.

## License

MIT
