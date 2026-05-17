# Sabrina Personal Website

A modern React portfolio for Sabrina Westgate, Ph.D., positioned for data science, solutions engineering, sales engineering, customer success engineering, and technical advisory roles.

## Tech Stack

- React
- Vite
- TailwindCSS
- Lucide React
- GitHub Pages deployment via GitHub Actions

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.
Stop the local server with `Ctrl + C` in the terminal where it is running.

## Build

```bash
npm run build
```

Run this before pushing if you want to verify the production build locally.

## Make Changes

1. Edit files in `src/`.
2. Run the local dev server:

```bash
npm run dev
```

3. Check the site in your browser.
4. Run a production build:

```bash
npm run build
```

Do not commit `node_modules/` or `dist/`. They are ignored by `.gitignore`.

## Deploy to GitHub Pages

This project deploys with GitHub Actions. Push changes to the `main` branch, then GitHub will build the Vite app and publish the `dist` folder to GitHub Pages.

For the clean URL `https://swestgat.github.io/`, the GitHub repository should be named:

```text
swestgat.github.io
```

In GitHub, go to **Settings -> Pages** and set **Source** to **GitHub Actions**.

## Push Updates

After making and testing changes:

```bash
git status
git add .
git commit -m "Describe the website update"
git push
```

After `git push`, open the repository on GitHub and check the **Actions** tab. The workflow named **Deploy to GitHub Pages** should run automatically. When it finishes successfully, the site will update at:

```text
https://swestgat.github.io/
```

## GitHub Account Notes

The Git commit author and the GitHub account used to push are separate settings.

Set the local commit author for this repo:

```bash
git config user.name "Sabrina Westgate"
git config user.email "YOUR_GITHUB_EMAIL"
```

If pushes are appearing from the wrong GitHub account, clear the saved GitHub credential in Windows Credential Manager or re-authenticate with GitHub CLI:

```bash
gh auth logout
gh auth login
```
