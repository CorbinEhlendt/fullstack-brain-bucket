# Fullstack-Brain-Bucket
> this is an app made for keeping track of ideas for CIS 486 Class

### authorship + version

`@corbinehlendt` \| `2026-10-08` \| `Hotel`

### deployments, codebase, & repo features 

  |resource                     |link|
  |---------------------------|----------------------|
  | MongoDB connection | [server code](https://github.com/CorbinEhlendt/fullstack-brain-bucket/blob/3f3eebacd730c32fd4fcfb080a46920a71a21a60/server/mongo.js#L19) |
  | GET all | [endpoint code](https://github.com/CorbinEhlendt/fullstack-brain-bucket/blob/3f3eebacd730c32fd4fcfb080a46920a71a21a60/server/mongo.js#L73) |
  | GET one | [endpoint code](https://github.com/CorbinEhlendt/fullstack-brain-bucket/blob/3f3eebacd730c32fd4fcfb080a46920a71a21a60/server/mongo.js#L100) |
  | filtered GET | [endpoint code](https://github.com/CorbinEhlendt/fullstack-brain-bucket/blob/3f3eebacd730c32fd4fcfb080a46920a71a21a60/server/mongo.js#L81) |
  | POST / create | [endpoint code](https://github.com/CorbinEhlendt/fullstack-brain-bucket/blob/3f3eebacd730c32fd4fcfb080a46920a71a21a60/server/mongo.js#L120) |
  | PATCH / update | [endpoint code](https://github.com/CorbinEhlendt/fullstack-brain-bucket/blob/3f3eebacd730c32fd4fcfb080a46920a71a21a60/server/mongo.js#L157) |
  | DELETE | [endpoint code](https://github.com/CorbinEhlendt/fullstack-brain-bucket/blob/3f3eebacd730c32fd4fcfb080a46920a71a21a60/server/mongo.js#L167) |
  | frontend `fetch()` | [client code](https://github.com/CorbinEhlendt/fullstack-brain-bucket/blob/3f3eebacd730c32fd4fcfb080a46920a71a21a60/public/hotel.html#L168) |
  | persistent CRUD | [PROD app](https://corbin.barrycumbie.com/) |
  | HOTEL milestone | [milestone](https://github.com/CorbinEhlendt/fullstack-brain-bucket/milestone/1) |
  | example issue | [issue #](https://github.com/CorbinEhlendt/fullstack-brain-bucket/issues/2) |
  | development branch | [branch](https://github.com/CorbinEhlendt/fullstack-brain-bucket/tree/dev) |
  | feature → dev | [PR #](https://github.com/CorbinEhlendt/fullstack-brain-bucket/pull/4) |
  | dev → main | [PR #](https://github.com/CorbinEhlendt/fullstack-brain-bucket/pull/6) |
  | PROD deployment | [GitHub Action](https://github.com/CorbinEhlendt/fullstack-brain-bucket/actions/runs/37508769922) |

### user story

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

### narrative

I have built a infrastructure that has a main branch that acts as the current working product. This branch is automatically deployed when code is updated and any changes will be seen on the app. There
is also a Dev branch that allows me to work on the app and view any changes without changing the main branch. This is made to replicate a real world working environment.

### architecture

``` text
LOCAL
  │
  ▼
GitHub
  │
  ├── dev  ──► Render ─────────► DEV
  │
  └── main ──► GitHub Actions ─► GCP ──► PROD
```

### stack

`HTML/CSS/JS` | `Bootstrap 5` | `Node.js` | `Express` | `REST` |
`MongoDB` | `Atlas` | `Git/GitHub` | `GCP` | `Nginx` | `PM2` | `GitHub Actions`

### project structure

Use `tree` to show your actual project structure.

``` text
repo/
├── .github/
│   └── workflows/
├── docs/
│   └── README.md
├── public/
│   ├── hotel.html
|   ├── not-index.html
├── server/
│   ├── app.js
│   ├── mongo.js
│   ├── package.json
│   └── package-lock.json
└── .gitignore
```

### GCP

external IP: `35.192.57.103`\
Linux user: `cjehlendt`\
instructor SSH public key installed: `yes`
