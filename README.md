# In-Game Photography

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

## Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                             |
| :--------------- | :------------------------------------------------- |
| `yarn`           | Installs dependencies                              |
| `yarn dev`       | Starts local dev server at `localhost:3000`        |
| `yarn build`     | Build your production site to `./dist/`            |
| `yarn preview`   | Preview your build locally, before deploying       |
| `yarn astro ...` | Run CLI commands like `astro add`, `astro preview` |

## License

MIT
