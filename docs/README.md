# Fullstack-Brain-Bucket
> this is an app made for keeping track of ideas for CIS 486 Class

### authorship + version

`@corbinehlendt` \| `2026-09-15` \| `GOLF`

### deployments, codebase, & repo features 

  |resource                     |link|
  |---------------------------|----------------------|
  |PROD codebase                |[`main`](https://github.com/CorbinEhlendt/fullstack-brain-bucket)|
  |PROD server                  |[GCP](https://corbin.barrycumbie.com/)|
  |DEV codebase                 |[`dev`](https://github.com/CorbinEhlendt/fullstack-brain-bucket/tree/dev)|
  |DEV server                   |[Render](https://corbin-fullstack-brain-bucket.onrender.com)|
  |docs                         |[`docs/`](https://github.com/CorbinEhlendt/fullstack-brain-bucket/tree/main/docs)|
  |published docs               |[GitHub Pages](URL)|
  |CI/CD workflow               |[`deploy.yml`](https://github.com/CorbinEhlendt/fullstack-brain-bucket/blob/main/.github/workflows/re-deploy-main-to-gcp.yml)|
  |successful PROD deployment   |[GitHub Action](https://github.com/CorbinEhlendt/fullstack-brain-bucket/actions/runs/35002704274)|
  |resolved GOLF issue          |[issue \#](https://github.com/CorbinEhlendt/fullstack-brain-bucket/issues/1)|

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

`HTML/CSS/JS` \| `Node.js` \| `Express` \| `Git/GitHub` \| `Render` \|
`GCP` \| `Linux` \| `Nginx` \| `PM2` \| `Certbot` \| `GitHub Actions`

### project structure

Use `tree` to show your actual project structure.

``` text
repo/
├── .github/
│   └── workflows/
├── docs/
│   └── README.md
├── public/
├── server/
├── .gitignore
└── ...
```

### GCP

external IP: `35.192.57.103`\
Linux user: `cjehlendt`\
instructor SSH public key installed: `yes`
